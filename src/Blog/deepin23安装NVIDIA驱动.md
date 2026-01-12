---
icon: /assets/icon/鱼板.svg
category:
  - 博客
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-12-05
---

# deepin23安装NVIDIA驱动

## 安装驱动

查看默认的源中是否存在NVIDIA驱动依赖和安装包

```shell
sudo apt list | grep nvidia
```

![img](./deepin23%E5%AE%89%E8%A3%85NVIDIA%E9%A9%B1%E5%8A%A8.assets/image-20241205210340370-uzuc-1768188564031-1.png)

安装环境依赖

```shell
sudo apt install gcc g++ dkms
sudo apt install mesa-utils
```

安装NVIDIA闭源驱动

```shell
sudo apt-get install bumblebee-nvidia nvidia-driver nvidia-settings nvidia-detect
```

启动NVIDIA显卡的守护进程

```shell
sudo systemctl status bumblebeed.service 
sudo systemctl enable bumblebeed 
```

用户添加到`bumblebee`组看情况添加(如果用户启动又问题的时候才使用)

```shell
sudo usermod -aG bumblebee $USER
```

重启电脑。



## 驱动调用

如何跑满N 卡驱动？

列出系统PCI总线上的所有设备及其相关信息

```shell
lspci | grep -i nvidia
```

检查当前使用的是开源GPU还是闭源GPU 驱动

```shell
lsmod | grep nouveau
```

如果没有返回值，表示默认使用的是闭源的GPU。

查询当前显卡功率限制(BIOS设置决定的策略)

```shell
sudo nvidia-smi -q | grep "Power Limit"
```

结果如图：

![img](./deepin23%E5%AE%89%E8%A3%85NVIDIA%E9%A9%B1%E5%8A%A8.assets/image-20241205210059686-1768188595826-4.png)

安装显卡切换插件：

![img](./deepin23%E5%AE%89%E8%A3%85NVIDIA%E9%A9%B1%E5%8A%A8.assets/image-20241205210149434-1768188603137-7.png)

查看默认使用的GPU驱动

```shell
glxinfo | grep renderer
# 或者
DRI_PRIME=0 glxinfo | grep "OpenGL renderer"
```

默认调用结果如下：

![img](./deepin23%E5%AE%89%E8%A3%85NVIDIA%E9%A9%B1%E5%8A%A8.assets/image-20241205210904943-1768188730918-10.png)

安装GPU监视器

```shell
sudo apt install -y nvtop
```

目前推荐手动调用N 卡驱动，防止出现问题，不推荐直接换原来的默认驱动盒选项。

重启电脑之后，我们右键软件，点击prime-run运行，这个操作运行之后会默认调用NVIDIA驱动：

![img](./deepin23%E5%AE%89%E8%A3%85NVIDIA%E9%A9%B1%E5%8A%A8.assets/%E5%BD%95%E5%B1%8F_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20241205212020-1768188744751-13.gif)

### **性能释放**

如何调整性能？

打开NVIDIA X f服务设置：

![img](./deepin23%E5%AE%89%E8%A3%85NVIDIA%E9%A9%B1%E5%8A%A8.assets/image-20241205212233585-1768188753909-16.png)

点击到PowerMizer选项中，在下面选择性能选项，默认是Auto设置，我们需要改成`Prefer Maximum Performance`选项：

![img](./deepin23%E5%AE%89%E8%A3%85NVIDIA%E9%A9%B1%E5%8A%A8.assets/%E5%BD%95%E5%B1%8F_nvidia-settings_20241205212353-1768188760780-19.gif)

启动MC 之后，使用nvtop查看GPU的调用。

游戏中：

![img](./deepin23%E5%AE%89%E8%A3%85NVIDIA%E9%A9%B1%E5%8A%A8.assets/image-20241205212721774-1768188768257-22.png)

GPU调度：

<img src="./deepin23%E5%AE%89%E8%A3%85NVIDIA%E9%A9%B1%E5%8A%A8.assets/1733405368086-1768188775431-25.png" alt="img" style="zoom:50%;" />





## 卸载驱动

```shell
sudo apt autoremove nvidia-*
sudo apt purge nvidia-driver nvidia-kernel-dkms nvidia-*
```



**如下内容是用于科学计算的Cuda，普通用户不需要安装。**

## 安装cuda

安装cuda Toolkit

```shell
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.1-1_all.deb
sudo dpkg -i cuda-keyring_1.1-1_all.deb
sudo apt-get update
sudo apt-get -y install cuda-toolkit-12-6
```

安装cuda驱动依赖

- 安装开源驱动

```shell
sudo apt-get install -y nvidia-open
```

- 安装旧的(稳定的)驱动

```shell
sudo apt-get install -y cuda-drivers
```

- 安装全部

```shell
sudo apt install -y nvidia-cuda*
```



## 卸载cuda

卸载cuda Toolkit

```shell
sudo apt-get --purge remove "*cuda*" "*cublas*" "*cufft*" "*cufile*" "*curand*"  "*cusolver*" "*cusparse*" "*gds-tools*" "*npp*" "*nvjpeg*" "nsight*" "*nvvm*"
sudo apt-get autoremove --purge -V
```