---
icon: /assets/icon/鱼板.svg
category:
  - 博客
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-12-20
---

# 真姬Root教程

目前能使用的Root工具主要有三个，分别是：Magisk、Apatch、KernelSu。由于KernelSu仅支持5.10以上的内核，所以我这里只讲解Magisk、Apatch两种root方式。话不多说，直接搞姬。记得三连+关注。

演示环境：

手机机型：Redmi K40

手机系统：MIUI14 (Android13)

如何查看内核版本：设置 – 我的设备 - 全部参数 - 内核版本

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb.jpeg)

## 获取boot.img

> Android 13 的设备，通用 ramdisk 将从 boot 映像中移除，并放置在单独的 init_boot 映像中。此更改会使 boot 映像仅保留 GKI 内核。
>
> 对于继续使用 Android 12 或更低版本内核的升级设备，通用 ramdisk 将保留在原位置，不需要新的 init_boot 映像。
>
> 如需构建通用 ramdisk，请将特定于供应商的资源移出 ramdisk，以使通用 ramdisk 仅包含第一阶段 init 以及一个带时间戳信息的属性文件。
>
> **这个不用管，如果没有init_boot使用boot也是可以的。**

如何获取boot.img或者init_boot.img文件，我们需要到ROM包里面去获取，线刷包里面含有boot.img，卡刷包需要借助工具提取。**注意：boot映像文件必须和系统版本一致，比如MIUI14.0.8只能使用MIUI14.0.8的boot.img。**

直接解压线刷包获取boot.img

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768187885740-3.jpeg)

卡刷包boot提取工具下载，蓝奏云专享：https://www.ilanzou.com/s/8JByP3kq

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768187899028-6.jpeg)

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768187943700-9.jpeg)

手机插电脑，文件传输模式，复制init_boot.img或者boot.img到手机 Download目录

adb工具下载：

https://googledownloads.cn/android/repository/platform-tools-latest-windows.zip

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768187982053-12.jpeg)

下载解压之后配置环境变量

![thumb.png](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768187993232-15.png)

## 配置adb

如果你没有配置adb，那么上一篇文章的内容刷机使用的adb也无法使用。

检查是配置成功

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768188008857-18.jpeg)

## Magisk Root方法

蓝奏云专享下载地址：https://www.ilanzou.com/s/FfhyP3UI

### 修补镜像文件

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768188034287-21.jpeg)

手机插电脑，打开文件传输模式，把 **magisk.img** 复制到电脑目录

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768188053336-24.jpeg)

手机进入 Bootloader 模式，再插入电脑。

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768188073613-27.jpeg)

或者：

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768188085666-30.jpeg)

打开终端输入如下命令：

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768188085667-31.jpeg)

### 刷入boot

显示下面这三行代码，就是成功刷入了。再使用指令 fastboot reboot 重启手机。

> Sending 'boot' (131072 KB) OKAY [ 3.105s]
>
> Writing 'boot' OKAY [ 0.404s]
>
> Finished. Total time: 3.556s

重启手机 （开机有震动基本没问题了） 耐心等手机开机。（显示 Magisk 的版本，就是刷好了的）

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768188097583-36.jpeg)

温馨提示:

如果刷入 **magisk.img** 不能开机，可以把前面提取的 **boot.img** 通过 **fastboot** 刷回去，恢复原 boot，一般都能正常开机！**boot.img** 保留一份在电脑，避免出问题了可以自救下！还原 boot 指令

打开zygisk：

![img](./%E7%9C%9F%E5%A7%ACRoot%E6%95%99%E7%A8%8B.assets/thumb-1768188097583-37.jpeg)

这样你的手机就可以获取root权限了。

Apatch的刷入和Magisk是一样的，多个超级密钥，密钥自己设置就OK了，最好自己记得住密码，因为重启之后进入Apatch需要密码验证之后开启。



