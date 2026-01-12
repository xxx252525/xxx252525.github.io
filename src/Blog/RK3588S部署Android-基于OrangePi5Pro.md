---
icon: /assets/icon/鱼板.svg
category:
  - 博客
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-07-07
---

# RK3588部署Android云手机

Android云手机实际上有个专门的称呼：Redroid。Redroid是一台在Docker容器中虚拟的手机。



## 硬件环境

硬件设备：Orange Pi 5 Pro(RK3588S)或者其他RK3588系列开发板

操作系统：Ubuntu Rockchip 22

网络环境：以太网(有线网络连接)



## 软件环境准备

安装Docker环境

```shell
sudo apt install -y docker docker-ce docker-ce-cli containerd.io
```

检查是否安装成功

```shell
docker --verion
```

虚拟环境检查工具安装

```shell
sudo apt install cpu-checker
```

检查系统是否支持虚拟化

```shell
kvm-ok
```

结果如下：

```shell
   ~  kvm-ok                                                            
INFO: /dev/kvm exists
KVM acceleration can be used
```

检查系统内核是否为5.10.160，DDK版本是否是g18p0

```shell
dmesg | grep DDK  
uname -srv  
```

显示结果如下:

```shell
dmesg | grep DDK                                                              
[    7.354410] mali fb000000.gpu: Kernel DDK version g18p0-01eac0
uname -srv                                                                    
Linux 5.10.0-1007-rockchip #7-Ubuntu SMP Wed Jun 5 22:50:55 UTC 2024
```



## Android云手机部署

适用于具有多种功能的 RK3588 的 Redroid 映像

Github克隆镜像

```shell
git clone https://github.com/CNflysky/redroid-rk3588.git --depth 1
```

 成功案例如下（建议使用国际网络下载）：

```shell
正克隆到 'redroid-rk3588'...
remote: Enumerating objects: 14, done.
remote: Counting objects: 100% (14/14), done.
remote: Compressing objects: 100% (13/13), done.
remote: Total 14 (delta 0), reused 6 (delta 0), pack-reused 0
接收对象中: 100% (14/14), 51.29 KiB | 211.00 KiB/s, 完成.
```

切换到rk3588目录

```shell
cd redroid-rk3588
```

安装docker-compose

```
sudo apt install docker-compose -y
```

成功案例如下：

![image-20240707114257017](./RK3588S%E9%83%A8%E7%BD%B2Android-%E5%9F%BA%E4%BA%8EOrangePi5Pro.assets/image-20240707114257017.png)

赋予quickstart.sh 执行权限，用于拉去Android镜像到系统。

```shell
sudo chmod +x ./quickstart.sh 
```

执行脚本拉取Android镜像到本地

```shell
./quickstart.sh 
```

成功案例如下：

```shell
redroid-rk3588 仓库已存在。
有 Docker, 好!
咱看看你本地有没有这个镜像...
有可能让你输入密码, 之类的.
看起来你没有这个镜像, 咱给你拉一份. 你要哪个版本?
1) Android 12(12.0.0-latest)
2) Android 13(13.0.0-latest)
1 还是 2? 1
12.0.0-latest: Pulling from cnflysky/redroid-rk3588
ea32bdfcb840: Retrying in 1 second
error pulling image configuration: download failed after attempts=6: dial tcp 192.133.77.189:443: i/o timeout
咱给你启动一个容器.
参数是:
usage: sudo -h | -K | -k | -V
usage: sudo -v [-ABknS] [-g group] [-h host] [-p prompt] [-u user]
usage: sudo -l [-ABknS] [-g group] [-h host] [-p prompt] [-U user] [-u user] [command]
usage: sudo [-ABbEHknPS] [-r role] [-t type] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R directory] [-T
            timeout] [-u user] [VAR=value] [-i|-s] [<command>]
usage: sudo -e [-ABknS] [-r role] [-t type] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R directory] [-T
            timeout] [-u user] file ...
"docker stop" requires at least 1 argument.
See 'docker stop --help'.

Usage:  docker stop [OPTIONS] CONTAINER [CONTAINER...]

Stop one or more running containers
看起来你的系统包含 GPU 内核驱动, 注意一下版本是否为 g18p0.
[    7.354410] mali fb000000.gpu: Kernel DDK version g18p0-01eac0
看起来 mali 固件在它该呆的地方。
看起来你的系统包含 GPU 内核驱动, 注意一下版本是否为 g18p0.
[    7.354410] mali fb000000.gpu: Kernel DDK version g18p0-01eac0
看起来 mali 固件在它该呆的地方。
mali 固件已经整到 /lib/firmware/ 里了。
不是 armbian 呢. 得靠你自己辣.
```

运行（两种运行方式二选一）：

```shell
# 使用docker-ce运行
sudo docker compose up -d
# 手动运行
sudo docker run -d -p 5555:5555 -v ~/redroid-data:/data --name redroid --privileged cnflysky/redroid-rk3588:12.0.0-latest androidboot.redroid_height=1920 androidboot.redroid_width=1080 androidboot.redroid_fps=60 androidboot.redroid_magisk=1
```

> 2024/11/12更新以下内容：

以上内容为旧版，新版的命令如下，最新版是基于lineageOS做的，旧版基于AOSP构建的已经不再维护，请及时升级，建议升级的时候清除掉原本的数据目录，使用旧的数据可能会出现问题！！！

```shell
sudo docker run -d -p 5555:5555 -v ~/redroid13-data:/data --restart unless-stopped --name redroid --privileged cnflysky/redroid-rk3588:lineage-20 androidboot.redroid_height=2160 androidboot.redroid_width=1080
```

如果你的内核缺少mac80211_hwsim模块，我们就需要单独构建它：

```shell
# 仅限 Armbian 用户
sudo apt install linux-headers-legacy-rk35xx
cd mac80211_hwsim
make
sudo cp mac80211_hwsim.ko /lib/modules/`uname -r`/kernel/drivers/net/wireless
sudo depmod
echo "mac80211_hwsim" | sudo tee /etc/modules-load.d/redroid.conf
# 重新启动主板。
```

`mali_csffw.bin` 文件是必需将其放在主机的 `/lib/firmware` 目录下

```shell
sudo docker cp redroid:/vendor/etc/firmware/mali_csffw.bin /lib/firmware/
sudo docker restart redroid
```



## 云手机其他参数

| 参数                                                    | 描述                         |
| ------------------------------------------------------- | ---------------------------- |
| `androidboot.redroid_fps=60`                            | 设置刷新率, 取值范围 (1,120) |
| `androidboot.redroid_magisk=1`                          | 启用 Magisk                  |
| `androidboot.redroid_fake_wifi=1`                       | 启用虚假 WiFi                |
| `androidboot.redroid_fake_wifi_ssid=FakeWiFi`           | 设置虚假 WiFi ssid           |
| `androidboot.redroid_fake_wifi_bssid=66:55:44:33:22:11` | 设置虚假 WiFi bssid          |
| `androidboot.redroid_fake_wifi_mac=11:22:33:44:55:66`   | 设置虚假 WiFi mac 地址       |
| `androidboot.redroid_fake_wifi_speed=866`               | 设置虚假 WiFi 速度(Mbps)     |
| `androidboot.redroid_virt_wifi=1`                       | 启用虚拟 WiFi (已废弃)       |

查看运行状态

```shell
sudo docker ps -a
```

![image-20240707161514457](./RK3588S%E9%83%A8%E7%BD%B2Android-%E5%9F%BA%E4%BA%8EOrangePi5Pro.assets/image-20240707161514457.png)



# 连接Redroid

## 安装ws-scrcpy

从Gigub克隆仓库

```shell
git clone https://github.com/NetrisTV/ws-scrcpy.git
```

成功案例如下：

![image-20240707163531883](./RK3588S%E9%83%A8%E7%BD%B2Android-%E5%9F%BA%E4%BA%8EOrangePi5Pro.assets/image-20240707163531883.png)

部署Nodejs、node-gyp环境

```shell
# 安装nodejs和npm
sudo apt install -y nodejs npm
# 安装node-gpy
npm install -g node-gyp
```

安装成功如图：

![image-20240707165208724](./RK3588S%E9%83%A8%E7%BD%B2Android-%E5%9F%BA%E4%BA%8EOrangePi5Pro.assets/image-20240707165208724.png)

失败如图：

![image-20240707165228613](./RK3588S%E9%83%A8%E7%BD%B2Android-%E5%9F%BA%E4%BA%8EOrangePi5Pro.assets/image-20240707165228613.png)

### 构建启动

```shell
cd ws-scrcpy
# 安装
sudo npm install
# 修复漏洞
sudo npm audit fix
# 运行
sudo npm start
```



## 安装scrcpy

安装scrcpy客户端依赖

```shell
sudo apt install ffmpeg libsdl2-2.0-0 adb wget \
                 gcc git pkg-config meson ninja-build libsdl2-dev \
                 libavcodec-dev libavdevice-dev libavformat-dev libavutil-dev \
                 libswresample-dev libusb-1.0-0 libusb-1.0-0-dev
```

去Github克隆仓库

```shell
git clone https://github.com/Genymobile/scrcpy
```

安装scrcpy

```shell
cd scrcpy
./install_release.sh
```

安装成功的效果图如下：

![image-20240707170319838](./RK3588S%E9%83%A8%E7%BD%B2Android-%E5%9F%BA%E4%BA%8EOrangePi5Pro.assets/image-20240707170319838.png)

> 注意：
>
> 当新版本发布时，请更新存储库并重新安装：
>
> ```shell
> git pull
> ./install_release.sh
> ```
>
> 卸载：
>
> ```shell
> sudo ninja -Cbuild-auto uninstall
> ```

启动scrcpy进入Android

```shell
scrcpy
```

运行成功如下：

![0aebb2fe4e90b5d487a50b53fa7267cb](./RK3588S%E9%83%A8%E7%BD%B2Android-%E5%9F%BA%E4%BA%8EOrangePi5Pro.assets/0aebb2fe4e90b5d487a50b53fa7267cb.jpg)

### 使用示例

以 H.265（更好的质量）捕获屏幕，将大小限制为 1920，将帧速率限制为 60fps，禁用音频，并通过模拟物理键盘来控制设备：

```shell
scrcpy --video-codec=h265 --max-size=1920 --max-fps=60 --no-audio --keyboard=uhid
scrcpy --video-codec=h265 -m1920 --max-fps=60 --no-audio -K  # short version
```

将 H.265 的 1920x1080（和麦克风）相机录制到 MP4 文件：

```shell
scrcpy --video-source=camera --video-codec=h265 --camera-size=1920x1080 --record=file.mp4
```

捕获设备前置摄像头并将其作为网络摄像头在计算机上公开（在 Linux 上）：

```shell
scrcpy --video-source=camera --camera-size=1920x1080 --camera-facing=front --v4l2-sink=/dev/video2 --no-playback
```

通过模拟物理键盘和鼠标（不需要USB调试）来控制设备，而无需镜像：

```shell
scrcpy --otg
```



## Escrcpy

以下内容为2026年1月12日新增

**使用图形化的 scrcpy 显示和控制你的安卓设备**

![image-20260112134143368](./RK3588S%E9%83%A8%E7%BD%B2Android-%E5%9F%BA%E4%BA%8EOrangePi5Pro.assets/image-20260112134143368.png)

> 软件下载地址如下：
>
> https://github.com/viarotel-org/escrcpy
>
> 为了防止原作者的库丢失，这是我的备份库地址：
>
> https://github.com/xxx252525/escrcpy

我们知道Orange Pi 5 Pro的IP地址即可连接操作，在左下角输入IP:端口即可

![image-20260112134904370](./RK3588S%E9%83%A8%E7%BD%B2Android-%E5%9F%BA%E4%BA%8EOrangePi5Pro.assets/image-20260112134904370.png)



