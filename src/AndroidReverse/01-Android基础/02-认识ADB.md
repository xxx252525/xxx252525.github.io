---
icon: /assets/icon/android.svg
category:
  - Android逆向
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-10-31
---


# 02-认识adb

## 什么是adb

adb是一种命令行工具，用于和Android设备进行通信。全名叫做`Android Debug Bridge`，根据英文名字就可以知道，ADB主要还是用来进行Android设备调试的工具。`adb` 提供对 Unix shell（可用来在设备上运行各种命令）的访问权限。



## adb的作用

adb的作用主要有以下几点：

设备控制、应用安装与调试、文件传输、shell命令执行、查看系统状态、控制网络、按键模拟、屏幕录制、备份与恢复、访问数据库、获取root权限等。



## adb的构成

adb的构成如下：

- client端（客户端），在电脑上发送adb调试命令
- daemon守护进程adbd（守护进程），负责接受和执行adb命令
- server端（服务端），负责管理客户端和守护进程之间的通信

原理图如下：

![adb工作原理.drawio](./02-%E8%AE%A4%E8%AF%86ADB.assets/adb%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86.drawio-1728220514903-3.png)



# 配置adb

## 配置环境变量

我们需要在电脑上安装adb，下载地址为：https://developer.android.google.cn/tools/releases/platform-tools?hl=zh-cn；如果你是Windows的操作系统，请下载第一个：

![image-20241006201751142](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241006201751142.png)

### Windows手动安装

下载好之后如下：

![image-20241006202758374](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241006202758374.png)

解压到你创建好的目录中，例如我这里在C盘创建了一个ADB的目录，并且将其解压到了该目录下

<img src="./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241006203537511.png" alt="image-20241006203537511" style="zoom:80%;" />

#### 创建环境变量

在系统设置中，找到高级系统设置，然后点击环境变量：

<img src="./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241006203639582.png" alt="image-20241006203639582" style="zoom:80%;" />

修改用户变量和系统变量：

<img src="./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241006203748526.png" alt="image-20241006203748526" style="zoom:80%;" />

点击新建，把adb的路径输入，然后保存退出：

<img src="./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241006203844839.png" alt="image-20241006203844839" style="zoom:80%;" />

进入操作系统的终端，输入以下命令查看是否能使用adb命令：

![image-20241006204008464](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241006204008464.png)



### Linux手动安装

下载适用于Linux的`platform-tools-latest-linux.zip`。

解压下载的文件到某个目录下。

将解压后的目录添加到你的`PATH`环境变量中。例如，如果你解压到了`/home/rk3588s/adb`，则可以在你的`~/.bashrc`或`~/.zshrc`文件中添加以下行：

```
export PATH=$PATH:/home/rk3588s/adb
```

保存文件后，运行以下命令使变量生效：

```
source ~/.bashrc
```

或者如果你使用的是zsh：

```
source ~/.zshrc
```

运行`adb version`来验证ADB是否已正确安装。

![image-20241006204050640](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241006204050640.png)



### Linux命令安装

如果你是Linux操作系统，那么可以直接使用shell命令安装更方便快捷，无需手动配置环境。如下：

基于Debian的系统：

```shell
sudo apt install -y adb
```

基于RPM的系统：

```shell
sudo yum install -y android-tools
sudo dnf install -y android-tools
```

基于Arch的系统：

```shell
sudo pacman -S android-tools
```

使用命令安装好之后不在需要进行任何配置



# 手机连接PC调试

## 打开开发者模式

我这里以原生Google的Android系统做演示，国内其他手机类似。

> Android原生

打开手机设置--->关于手机--->版本号点击7次即可：

<img src="./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241006205704413.png" alt="image-20241006205704413" style="zoom: 70%;" />

> 小米手机：MIUI or HyperOS

打开手机设置--->点击我的设备--->点击全部参数与信息--->点击MIUI版本或者OS版本7次

<img src="./02-%E8%AE%A4%E8%AF%86ADB.assets/K40.jpg" alt="K40" style="zoom: 33%;" />

<img src="./02-%E8%AE%A4%E8%AF%86ADB.assets/K60.jpg" alt="K60" style="zoom: 25%;" />



## 打开USB调试

在设置中搜索开发者模式或者开发者选项，进入之后找到USB调试，将其打开：

<img src="./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241006210340775.png" alt="image-20241006210340775" style="zoom:70%;" />



## 打开WIFI调试

在开发者模式中找到无线调试，将其打开，或者使用第三方工具打开，例如wirelessADB工具。



# Phone的shell控制台

使用`adb shell`命令就可以进入到手机的shell控制台，并且可以使用Linux shell命令。

![image-20241006211153883](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241006211153883.png)

在Android的shell控制台中是可以使用Linux的命令的，因为Android的内核是基于Linux的内核的，里面存放了一些内置的Linux shell基本命令。

![image-20241007140845554](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241007140845554.png)

![image-20241007140911372](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241007140911372.png)



# 常用的adb命令

> **adb**

```shell
adb version									--显示adb版本
adb start-server							--启动server
adb kill-server								--停止server
adb device									--显示连接设备列表
adb install <name>.apk						--安装APP
adb install -r <name>.apk					--覆盖安装
adb uninstall								--卸载APP
adb push <PC/PATH> <Android/PATH>			--推送文件到手机
adb pull <Android/PATH> <PC/PATH>			--拉取手机文件到电脑
adb shell									--进入手机shell控制台
adb -s <device> shell						--进入指定的设备shell
adb reboot bootloader						--重启到bootloader模式
```

查看帮助：

```shell
adb
adb help
adb --help
```

使用`adb -help`和`adb -h`是错误的。



> **fastboot**

```shell
fastboot devices					--加载设备
fastboot getvar product				--查看设备型号
fastboot reboot						--重启设备
fastboot flash boot PATH			--刷写boot
fastboot getvar all					--获取设备所有信息
fastboot flashing unlock			--解锁bootloader
fastboot flashing lock				--重新锁定bootloader
fastboot reboot-bootloader			--重启到bootloader模式
```



> 常见操作：

覆盖安装APP

```shell
adb install -r xxx.apk
```

----

当有多个设备连接电脑的时候我们需要连接指定的设备进行操作，否则直接使用`adb shell`会报错，例如：

```shell
adb -s SERIAL shell
```

![image-20241007134937401](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241007134937401.png)

`SERIAL`是什么？SERIAL就是设备编码，设备编码如何查看？

![image-20241007134611644](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241007134611644.png)

----

发送文件到手机：

```shell
adb push D:\apk\MixFile-release-1.5.0.apk /storage/emulated/0 
```

这里前面是Windows或者Linux、MAC的路径，后面是Android手机的目录路径。

注意：如果要修改文件名字到Android系统，那么只需要在路径后面修改文件名即可

```
adb push D:\apk\MixFile-release-1.5.0.apk /storage/emulated/0/MixFile-1.5.0.apk
```

---

拉取手机文件到电脑：

```shell
adb pull /storage/emulated/0/Download/MixFile-release-1.5.0.apk D:\apk\
```

如果没有指定PC端的目录，那么就会放在当前目录下。

**注意：手机APP的数据文件和下载的文件都在storage/emulated/0/的目录下面，如果没有Root权限，就无法访问更上级的目录，例如storage/emulated/0。**

![image-20241007140202019](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241007140202019.png)

---

使用超级权限进入Android控制台：

```shell
adb root
```

如果需要执行设备，在adb之后添加-s和串口通信的设备码即可。

![image-20241007141442455](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241007141442455.png)

如果显示adbd已经是启动的，并且是root模式，那么当我们使用adb连接设备的时候会直接进入到root用户下，如上图一条命令返回结果，反之就是第二条结果。

![image-20241007141725644](./02-%E8%AE%A4%E8%AF%86ADB.assets/image-20241007141725644.png)



