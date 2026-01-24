---
icon: /assets/icon/android.svg
category:
  - Android逆向
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2026-01-15
---



# 基于RK3588 Soc 编译Redroid云手机

由于目前我没有手机，只有一台OrangePi 5Pro开发板，所以这里以编译基于Rk3588SOC的Redroid为例来进行云手机的编译，注意云手机和安卓手机还是有区别的，但打字不差，等我后续有安卓手机了我再来续写安卓编译。

至于Redroid，Redroid（Remote Android）是一个基于容器技术的 Android 运行时环境，可以在 Linux 服务器上运行完整的 Android 系统。

| 对比维度                | 正统安卓编译（手机 / 平板 ROM）         | 云手机编译（reDroid / 容器 Android） |
| ----------------------- | --------------------------------------- | ------------------------------------ |
| **目标形态**            | 真实手机 / 平板                         | 云端实例 / 容器服务                  |
| **核心目标**            | 适配**具体硬件**                        | 让 Android **作为服务运行**          |
| **是否依赖硬件**        | ✅ 强依赖                                | ❌ 弱依赖 / 无依赖                    |
| **是否需要 bootloader** | ✅ 必须（U-Boot / fastboot）             | ❌ 不需要                             |
| **内核归属**            | Android 设备内核（厂商 BSP）            | Linux 宿主机内核                     |
| **是否要自己编 kernel** | ✅ 几乎必须                              | ❌ 通常不需要                         |
| **设备树（DT）**        | ✅ 必须                                  | ❌ 不需要                             |
| **HAL 类型**            | 真 HAL（Camera / Audio / Sensor）       | 虚拟 HAL / Stub                      |
| **显示系统**            | 真实屏幕 + GPU + HWC                    | 虚拟显示 / DRM / Headless            |
| **GPU 依赖**            | 强（厂商驱动）                          | 可选（无 GPU 也能跑）                |
| **Binder 来源**         | Android kernel                          | Linux kernel（binderfs）             |
| **ashmem / memfd**      | 内核直接支持                            | 依赖宿主内核能力                     |
| **SELinux 模式**        | Enforcing（严格）                       | 通常宽松 / 定制                      |
| **启动流程**            | BootROM → Bootloader → Kernel → Android | Linux → Container → Android init     |
| **系统镜像**            | boot / system / vendor / vbmeta 等      | system / vendor（极简）              |
| **是否支持多实例**      | ❌ 几乎不支持                            | ✅ 核心能力                           |
| **启动速度关注点**      | 一般                                    | 极其重要                             |
| **典型用途**            | 刷机 / 量产 / 设备 ROM                  | 云手机 / 自动化 / 测试               |
| **主要难点**            | 驱动 / 硬件适配                         | 系统裁剪 / 性能 / 显示               |
| **失败常见原因**        | 驱动缺失、不开源                        | 内核特性不足、GPU瓶颈                |
| **学习成本**            | 硬件工程偏重                            | 系统工程偏重                         |

## Redroid云手机编译

### 基础环境准备

准备工作有哪些？我们需要一台高配置的工作站来进行编译：

- 一个64位x86系统，推荐使用Ubuntu20或者Ubuntu22，也可以使用AEM64的MACOS系统
- 如果要检出和构建代码，至少需要 400 GB 可用磁盘空间，推荐更高512GB+磁盘存储
- 多核心大内存电脑，推荐最少16核，32GB RAM，Google使用72核机器和64GB RAM来构建 Android
- Docker版本20.10以上
- Git版本2.25以上
- Python3
- repo版本必须是2.x

> [!NOTE]
>
> 使用6核机器和64GB RAM 构建一个完整build大约需要6个小时。

### 软件环境部署

安装Git、Wget、Curl、Docker、repo等环境和工具。

```shell
sudo apt install -y git git-lfs wget curl docker docker-compose docker.io repo python3
```

安装完成如图：

![image-20260111144243638](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260111144243638.png)

安装最新的repo，然后再去执行上面的仓库初始化命令。

```shell
mkdir -p ~/bin
curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
chmod +x ~/bin/repo
export PATH=~/bin:$PATH
```

使用`repo --version`命令查看版本是否更新：

![image-20260114103724854](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260114103724854.png)

由于Ubuntu22自带的版本比较老，git-lfs没有这个选项，所以会导致我们后面去初始化仓库的时候出问题。如图：

![image-20260114103425881](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260114103425881.png)

创建工程目录

```shell
mkdir ~/redroid && cd ~/redroid
```

配置git用户信息

```
git config --global user.name "qingyao"
git config --global user.email "qingyao@local"
```

**注意**: 请将邮箱和用户名替换为您的实际信息。

### 初始化Redroid源码仓库

接下来我们需要初始化Redroid的源码仓库，这里使用了ice-black-tea大佬的仓库，在此对他表示感谢。

```shell
repo init -u https://github.com/redroid-rockchip/platform_manifests.git -b redroid-12.0.0 --depth=1 --git-lfs
```

成功操作如下：

![image-20260114103830965](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260114103830965.png)

同步源码：

```shell
cd ~/redroid
repo sync -c
repo sync -c -j$(nproc)
# 推荐使用如下命令解决网络问题，2选1
repo sync -c -j4 --fail-fast
repo sync -c -j2 --fail-fast
```

![image-20260111150101706](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260111150101706.png)

> [!WARNING]
>
> repo / Android 源码操作：❌ 不要用 sudo
>
> repo sync -c -j$(nproc)，当前普通用户执行
> sudo repo sync ，root 用户执行，是错误示范（很多教程写错）。

容易出现的错误，这种错误是网络波动问题，如图主要是单个问题：

- TLS 连接被中途断开
- GitHub / googlesource 触发 HTTP 429（限流）
- repo 并发 + LFS + 大仓库，网络扛不住

![image-20260111150312589](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260111150312589.png)

> [!NOTE]
>
> 遇到这种情况不要删除，不要重新来，等待即可，如果在某一个进度中超过半个小时都没有下载好，比如一直卡在86%超过半小时，多半是唧唧了。使用VPN进行科学上网一般不会超过半小时，超过半小时十有八九有是卡死了。

CTRL+C断开重新执行即可，成功之后如下：

![image-20260111170906568](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260111170906568.png)

同步webview：

```shell
repo forall -g lfs -c git lfs pull
```

修改`build/soong/cc/config/global.go`，向`commonGlobalCflags`数组添加全局cflags `"-DANDROID_12"`



### Docker 构建环境搭建

接下来我们构建编译镜像：

```shell
cd ~/ && git clone https://github.com/remote-android/redroid-doc.git
cd redroid-doc/android-builder-docker/
sudo usermod -aG docker $USER
newgrp docker
# 重启系统
# 构建 Docker 镜像（包含所有构建依赖）
docker build \
    --build-arg userid=$(id -u) \
    --build-arg groupid=$(id -g) \
    --build-arg username=$(id -un) \
    -t redroid-builder .
```

注意：我们在前面的操作都没有使用root权限，就是为了保证权限的统一，防止出现问题。

成功之后如下：

![image-20260111174028281](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260111174028281.png)

启动构建容器，挂载源码目录

```shell
docker run -it --rm \
  --hostname redroid-builder \
  --name redroid-builder \
  -v /home/qingyao/redroid:/src \
  redroid-builder
```

成功进入容器之后如下：

![image-20260111174234393](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260111174234393.png)

### 编译Redroid系统

此时我们已经处于容器中了，进入src源码目录

```shell
cd /src
# 初始化构建环境
. build/envsetup.sh
# 选择构建目标（ARM64 架构，用户调试版本）
lunch redroid_arm64-userdebug
# 我们编译的是rk3588，用的gpu是mali-G610
# 但是hardware/rockchip/librkvpu/omx_get_gralloc_private/Android.go没有定义mali-G610，只有G6110是Rockchip自家的GPU，不是Mali系列，所以此处选择同用bifrost库的mali-G52
export TARGET_BOARD_PLATFORM_GPU=mali-G52
export TARGET_RK_GRALLOC_VERSION=4
```

这里说明下lunch后面的参数product_name-release_config-build_variant

- product_name是要构建的产品的名称，例如aosp_cf_x86_64_phone或 aosp_husky
- release_config设置为版本配置，例如名为 trunk_staging 的开发版本配置
- build_variant有三个值，user、userdebug、eng

操作如图：

![image-20260111175907779](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260111175907779.png)

图片里面的G610是错误的，会导致编译失败，请使用命令行的内容：mali-G52

开始编译，`m` 命令可以使用 `-jN` 参数处理并行任务。如果您没有提供 `-j` 参数，构建系统会自动选择其认为最适合您系统的并行任务计数。

```shell
make -j6
```

开始编译中，如图：

![image-20260111180230306](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260111180230306.png)

> [!WARNING]
>
> make -j$(nproc)是高风险写法（容易卡死 / OOM / I/O 爆）
>
> Android 编译不是纯 CPU 任务，它是：CPU + 内存、大量磁盘 I/O、Ninja 并发调度
>
> 磁盘空间不足时候，清理编译缓存：make clean

编译成功如下：

![image-20260114170246023](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260114170246023.png)

### 打包镜像

编译完成后，需要将生成的系统文件打包为 Docker 镜像。

```shell
# 退出构建容器，回到宿主机
exit

# 进入编译输出目录
cd ~/redroid/out/target/product/redroid_arm64

# 挂载系统镜像（只读）
sudo mount system.img system -o ro
sudo mount vendor.img vendor -o ro

# 打包为 Docker 镜像
sudo tar --xattrs -c vendor -C system --exclude="./vendor" . | DOCKER_DEFAULT_PLATFORM=linux/arm64 docker import -c 'ENTRYPOINT ["/init", "androidboot.hardware=redroid"]' - redroid

# 卸载镜像文件
sudo umount system vendor
```

### 测试运行

测试容器运行

**把本机的 Docker 镜像，通过 SSH 直接“传送并导入”到另一台服务器**。

```shell
docker save redroid | ssh root@rock.huji.show docker load
```

本地运行不行的，本地的Ubuntu是X86，所以运行会失败，如果是X86的Redroid，就可以用如下命令启动：

```shell
docker run -d -p 5555:5555 -v ~/redroid-data:/data --name redroid --privileged redroid androidboot.redroid_height=1920 androidboot.redroid_width=1080
```

**最后的测试结果是无法使用scrcpy连接屏幕，需要进行系统定制修改。**

> [!CAUTION]
>
> 检查内核模块
>
> lsmod | grep binder
> lsmod | grep ashmem
>
> 如果缺失，加载模块
>
> sudo modprobe binder_linux
> sudo modprobe ashmem_linux

### 推送到Github与DockerHub

登录 Docker Hub（只用一次）

```shell
docker login
```

本地镜像打标签

```shell
docker tag redroid:latest name/redroid:12-arm64
```

注意打标签的规则：name/redroid:12-arm64前者是DockerHub的用户名，后者是镜像打包上传的名称。

如图：

![image-20260114174047473](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260114174047473.png)

推送到 Docker Hub

```shell
docker push name/redroid:12-arm64
```

正在推送：

![image-20260114174132452](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260114174132452.png)

推送成功后，你的镜像地址就是：

```html
https://hub.docker.com/r/name/redroid
```

创建一个Github仓库，然后编写如下文件：

![image-20260114195847165](./%E5%9F%BA%E4%BA%8ERK3588%20Soc%20%E7%BC%96%E8%AF%91Redroid%E4%BA%91%E6%89%8B%E6%9C%BA.assets/image-20260114195847165.png)









