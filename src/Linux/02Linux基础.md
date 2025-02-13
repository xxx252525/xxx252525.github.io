---
title: Linux基础
icon: /assets/icon/linux.svg
category:
  - 运维基础
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
---


# Linux基础

## Linux简介

前面我们介绍了什么是操作系统，里面有提到Linux，现在我们就正式来介绍下Linux。

Linux是一个开源的操作系统，是基于Unix打造的，优秀的性能让其在嵌入式领域、服务器领域非常出众。

Linux有很多类型的发行版，例如：

- Arch
- Ubuntu
- Kali
- Debian
- CentOS
- Rocky
- Fedora
- Kylin
- deepin

其中deepin和Kylin都是基于Ubuntu打造的国改自主化操作系统，尤其是deepin是开源的Linux操作系统，优秀的界面设计和操作逻辑可以很快让人上手，其次deepin还有商业化的操作系统，叫做UOS；而Kylin是银河麒麟操作系统，是商业化的操作系统，其开源社区版本为OpenKylin。

---

> Linux操作系统的组成是怎么样的呢？

Linux操作系统主要由内核（Kernel）和用户界面（UserInterface）两部分组成。内核是操作系统的核心，负责管理系统的资源和与硬件交互。用户界面则是用户与操作系统进行交互的界面，包括命令行界面（CLI）和图形用户界面（GUI）。如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208143541326.png" alt="image-20250208143541326" style="zoom: 80%;" />

----

> Linux是如何运行的？
>

1. **引导：**当计算机启动时，BIOS（基本输入输出系统）会读取硬盘上的引导程序（如GRUB），并将控制权传递给引导程序。引导程序会加载Linux内核到内存中，并将控制权传递给内核。
2. **内核启动：**内核启动后，会进行一些初始化操作，包括设置系统时钟、初始化硬件资源（如内存、设备等）、建立系统调用接口等。此过程中，内核会加载必要的内核模块和驱动程序。
3. **用户界面：**内核启动完成后，会启动用户界面。用户界面可以是命令行界面（CLI），也可以是图形用户界面（GUI）。在命令行界面下，用户可以通过输入命令来与操作系统进行交互；而在图形用户界面下，用户可以通过窗口、图标等可视化方式来与操作系统进行交互。
4. **应用程序运行：**用户可以通过命令行或图形界面启动应用程序。应用程序在运行时，会通过系统调用接口与内核进行交互，以获取硬件资源（如内存、文件等）和管理系统服务（如进程管理、文件系统等）。
5. **系统资源管理：**Linux 在运行过程中，会不断地进行系统资源管理，包括内存管理、进程管理、文件系统管理等。这些管理操作都是通过内核来实现的。



## Linux内核

Linux内核是Linux操作系统的核心部分，它是负责管理硬件资源、提供系统服务、调度任务和处理外来请求的程序。

Linux内核具有可移植性、高度化定制、安全稳定、模块化、开源等特点，Android的内核就是基于Linux内核打造的。

Linux内核的组成如下：

1. 进程管理：负责进程的创建、调度、同步和终止。
2. 内存管理:管理物理内存和虚拟内存，进行内存分配和回收。
3. 文件系统:支持多种文件系统，如EXT4、XFS、Btrfs等，负责数据的存储和检索。
4. 设备驱动：允许内核与各种硬件设备进行交互。
5. 网络：实现了丰富的网络协议栈，支持各种网络通信。
6. 安全：包括SELinux、AppArmor等多种安全模块。
7. 系统调用接口：提供用户空间程序与内核交互的接口。

### Linux内核版本

Linux的内核版本主要由：版本号、次版本号、末版本号、打包版本号、厂商版本组成。

大致如图：

![image-20250208145503756](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208145503756.png)

大致解读如下：

- <系统类型>：你的操作系统类型，比如Linux、unix等
- <主机名>：这是你的计算机名称
- <内核版本>：这是Linux的内核版本号，格式为x.v.z，其中x表示主版本，v表示此版本，z表示修订版本，版本号中的偶数表示稳定版本，基数表示测试版
- <发行版>：Linux发行版的名称
- <架构>：基于硬件架构和指令集的类型。例如i386、X86_X64、ARM、RISC-V、LoongArch等
- <处理器>：表示你的处理器型号
- <版本号>：表示处理器的版本号



## 操作系统的安装

由于Linux系统的广泛性，在一块开发板上面也是能跑起来的，所以操作系统的系统配置要求不高，随便使用一台电脑即可。

准备环境如下：

- 操作系统：Fedora39-Server
- 运行环境：VmwareWorkstation17(虚拟机）、OracleVirtualBox(虚拟机)、电脑主机

操作系统有Desktop（桌面端）、Server（服务端）、Iot（嵌入式）、Cloud（云）等区分，区别如下：

- Desktop（桌面端）：有图形化操作界面，配带图形化管理工具和应用，外观和功能可以进行深度定制
- Server（服务端）：服务器专用版本，性能优化最好的版本，带有Web管理平台（网站）
- Iot（嵌入式物联网）：嵌入式专用版本，在低功耗设备上有极好的优化，常应用在电视盒子、网关中枢、智能家居上面
- Cloud（云）：云服务器专用版本，有良好的虚拟化和容器性能

注意：所有的版本都是可以安装桌面的，只不过只有Desktop会自带桌面。如果追求优秀的外观，可以选择deepin操作系统，或者对桌面进行定制。

我这里讲解Server端，我会从虚拟机环境安装和物理机环境安装两个方面来讲解。

### 虚拟机环境安装

首先我们需要下载Fedora39的操作系统镜像和VMware应用程序。

**Fedora39下载地址：https://www.ilanzou.com/s/9h1071OP**

**Vmware下载地址：https://www.ilanzou.com/s/G9B07X1Y**

---

#### 安装VMware

下载好Vmware的安装包之后，双击安装即可，推荐安装在非系统盘。安装好之后桌面会有一个图标，如图：

![Vmware](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208161929215-1739094311334-1.png)

然后双击打开Vmware即可，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208162052047.png" alt="image-20250208162052047" style="zoom:67%;" />

接下来就是操作系统的安装步骤。

#### 创建Fedora虚拟机

我们点击创建新的虚拟机，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208165026827.png" alt="image-20250208165026827" style="zoom:67%;" />

然后我们选择自定义高级选项，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208165106847.png" alt="image-20250208165106847" style="zoom:80%;" />

然后直接点击下一步即可，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208165452718.png" alt="image-20250208165452718" style="zoom: 80%;" />

我们稍后安装系统，直接下一步，如图操作：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208165539086.png" alt="image-20250208165539086" style="zoom:80%;" />

然后我们勾选Linux选项，选择Fedora 64位，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208165628107.png" alt="image-20250208165628107" style="zoom:80%;" />

然后我们设置好虚拟机的名称和存储位置，下一步。

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208165753837.png" alt="image-20250208165753837" style="zoom:80%;" />

我们在选择处理器配置的时候根据自身电脑情况进行选择，如果是电脑4核心处理器，推荐设置处理器为1核心，如果是电脑5-8核心处理器，推荐设置2核心，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208170015235.png" alt="image-20250208170015235" style="zoom:80%;" />

我们在选择内存的时候也要根据自身的电脑内存进行选择，如果是16GB/24GB电脑内存，推荐4GB，更大电脑内存的可以更多，8GB内存的推荐1-2GB就可以了，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208170146018.png" alt="image-20250208170146018" style="zoom:80%;" />

然后我们选择NAT网络，当然你也可以选择桥接，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208170446157.png" alt="image-20250208170446157" style="zoom:80%;" />

然后我们一直点击下一步，点击三次，如图：

![image-20250208170609634](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208170609634.png)

然后我们创建磁盘大小的时候我们存储为但个文件，，磁盘大小根据自己电脑情况进行选择，推荐50GB，如果电脑可用空间超过150GB，可以更大，但不推荐，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208170929622.png" alt="image-20250208170929622" style="zoom:80%;" />

然后如图操作：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208171023427.png" alt="image-20250208171023427" style="zoom: 80%;" />

然后我们选择下载好的ISO文件，也就是Fedora的镜像文件，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208171130822.png" alt="image-20250208171130822" style="zoom:80%;" />

最后点击关闭，点击完成，就会创建一个窗口，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208171229720.png" alt="image-20250208171229720" style="zoom:67%;" />

这样，就创建好了Fedora虚拟机窗口，但是并没有创建好完整的虚拟机，因为我们还没有进行系统安装。

#### 安装Fedora39

我们点击开启此虚拟机，然后就会进入到操作系统的安装界面。

![image-20250208171426853](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208171426853.png)

**注意，从此处开始物理主机的步骤和下面操作是一样的。**

进入之后我们选择Install Fedora 39选项，然后按住Enter键，如图：<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209165353911.png" alt="image-20250209165353911" style="zoom:67%;" />

启动之后等待一段时间，进入如图界面：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209170244147.png" alt="image-20250209170244147" style="zoom: 50%;" />

我们选择简体中文，然后点击下一步，首先我们先选择安装目标位置，点击如图地方：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209170500598.png" alt="image-20250209170500598" style="zoom: 67%;" />

新手推荐直接选择自动，然后点击完成即可如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209170609963.png" alt="image-20250209170609963" style="zoom:67%;" />

接下来设置网络和主机名，我们点击网络和主机名选项即可，进入如图界面：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209170911573.png" alt="image-20250209170911573" style="zoom:55%;" />

接下来我们点击软件选择这个选项，进入如图界面：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209171106190.png" alt="image-20250209171106190" style="zoom:55%;" />

**注意：如果你需要有Web控制界面的，推荐第一个Fedora Server选项。**

接下来我们点击Root账户选项，进入如图界面：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209171225160.png" alt="image-20250209171225160" style="zoom:55%;" />

最后来创建用户，点击创建用户选项，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209171406546.png" alt="image-20250209171406546" style="zoom:55%;" />

完成之后，点击开始安装，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209171455295.png" alt="image-20250209171455295" style="zoom:80%;" />

正在安装系统，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209171525822.png" alt="image-20250209171525822" style="zoom:80%;" />

安装完成之后，我们点击右下角的重启系统即可进入操作系统。如图：

![image-20250209172022518](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209172022518.png)

重启之后如图：

![image-20250209172219450](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209172219450.png)

这样我们的Fedora操作系统就安装好了，我们可以登陆操作系统，如图：

![image-20250209172600173](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209172600173.png)

---



### 电脑主机安装

#### 环境准备

电脑主机安装唯一的不同就是我们需要使用U盘或者TF内存卡（配合读卡器）来烧录系统到U盘或者是TF内存卡。

TF卡就是我们常见的手机内存卡、行车记录仪内存卡。如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209131903974.png" alt="image-20250209131903974" style="zoom:50%;" />

我们需要使用工具`balenaEtcher`来进行系统烧录。

软件下载地址如下：https://www.ilanzou.com/s/Wkk077qM

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208162637439.png" alt="image-20250208162637439" style="zoom: 80%;" />

如果你想使用便携版本，也就是放在u盘里面就能使用，那么请下载解压版本。这里我使用安装版本，双击即可自动安装，期间不需要进行其他操作。安装成功之后会自动启动，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208162851434.png" alt="image-20250208162851434" style="zoom:67%;" />

#### 系统烧录

首先我们要启动`balenaEtcher`，然后我们点击从文件烧录，选择我们需要烧录的镜像。

![image-20250208164424403](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208164424403.png)

然后选择目标磁盘，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208164459763.png" alt="image-20250208164459763" style="zoom: 67%;" />

勾选已经识别到的U盘或者读卡器，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208164541969.png" alt="image-20250208164541969" style="zoom:67%;" />

最后点击开始烧录即可，如图：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250208164609143.png" alt="image-20250208164609143" style="zoom:67%;" />

烧录完成之后，我们拔掉U盘，然后将U盘插到需要安装的电脑上面，然后关机。

上面操作完成之后，我们开机，然后狂按F2、或者F8、F10、F12、ESC进入BIOS，注意，不同的电脑进入BIOS或者UEFI的按键不一样，这个可以去问官方厂商或者去搜索，实在不行还可以挨个试一试。

进入系统之后的安装步骤和上述虚拟机安装步骤一样。





## 系统初始化配置

### 系统更新

登陆用户后，我们输入如下内容升级操作系统和相关依赖组件。

```shell
sudo dnf update
```

如图：

![image-20250209172758630](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209172758630.png)



### 命令行远程连接

如果你想在Windows的电脑终端中去进行Linux虚拟机中的操作，那么只需要安装`OpenSSH`软件即可实现连接。

在终端中使用如下命令进行安装：

```shell
sudo dnf install -y openssh-server
```

安装成功如下：

![image-20250209173137296](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209173137296.png)

然后我们要启动这个远程连接服务，并且让他开机自启动，方便我们使用，操作如下。

```shell
sudo systemctl start sshd.service
sudo systemctl enable sshd.service
```

我们需要远程连接还需要一个非常重要的东西，也就是IP地址，我们在Linux中输入如下内容：

```shell
ifcondig
```

![image-20250209173505785](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209173505785.png)

接下来我们打开Windows的终端，如图：

![image-20250209173525239](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209173525239.png)

然后我们在终端中输入如下命令进行连接。

```powershell
ssh miui@192.168.48.101 -p 22
```

**解读：注意这里的miui是你需要登陆的账户，也就是前面自己创建的miui账户，后面输入的密码也是你设置好的账户密码；192.168.48.101是你是用ifconfig查看到的网络IP地址**

然后按住Enter键开始连接，第一次连接会要求在本地电脑保存一个密钥，我们输入yes即可，如图：

![image-20250209173738874](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209173738874.png)

然后输入我们的账户密码进行连接即可，如图：

![image-20250209173843884](./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209173843884.png)

### 关机

我们可以使用Vmware进行强制关机，也可以使用系统自带的命令进行关机，如下：

<img src="./02Linux%E5%9F%BA%E7%A1%80.assets/image-20250209174151130.png" alt="image-20250209174151130"  />

在终端中，输入如下命令即可关机。

```shell
sudo shutdown
或者
sudo poweroff
```

