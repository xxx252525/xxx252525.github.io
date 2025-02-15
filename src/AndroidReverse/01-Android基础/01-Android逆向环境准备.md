---
icon: /assets/icon/android.svg
category:
  - Android逆向
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
---


# 01-Android逆向环境准备

## root环境

首先我们要学习Android逆向我们就必须要有最高级的Root权限，方便我们后面在后面的学习阶段有更高的权限做事情。

### 如何获取root权限

这里有两种方式，一是使用Android模拟器来做为实验环境，二是使用真机来作为实验环境。

Android模拟器我推荐使用雷电模拟器，下载链接如下：

https://www.123pan.com/s/LjEDVv-ylMZ3.html

Android手机推荐使用Xiaomi、Redmi、Oneplus、魅族等系列，root操作比较简单，如果你没有救砖能力那么请不要使用物理手机来进行学习，很容易变砖，这里我会以雷电模拟器作为教学例子来教大家Root。

工具下载链接：

https://www.123pan.com/s/LjEDVv-Q7MZ3.html

<img src="./01-Android%E9%80%86%E5%90%91%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87.assets/image-20240705150246331.png" alt="image-20240705150246331" />

#### 雷电模拟器root教程

安装雷电模拟器

> 解压-->绿化-->运行

<img src="./01-Android%E9%80%86%E5%90%91%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87.assets/%E5%AE%89%E8%A3%85%E9%9B%B7%E7%94%B5%E6%A8%A1%E6%8B%9F%E5%99%A8.gif" alt="安装雷电模拟器" />

开启root权限

> 进入雷电模拟器-->设置-->设置磁盘共享为system.vmdk可写入-->其他-->开启root权限-->重启

![开启root上](./01-Android%E9%80%86%E5%90%91%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87.assets/%E5%BC%80%E5%90%AFroot%E4%B8%8A.gif)

安装magisk debug for 雷电模拟器（下载链接里面的app-debug.apk），将软件从电脑拖动到电脑模拟器里面即可

> 打开magisk delta-->允许授予永久root权限-->点击安装-->允许访问文件和目录-->退出magisk-->再次进入magisk-->安装-->勾选两个选项进行下一步-->安装到系统分区-->重启雷电模拟器-->进入magisk开启zygisk-->重启雷电模拟器

<img src="./01-Android%E9%80%86%E5%90%91%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87.assets/%E5%AE%89%E8%A3%85magisk%EF%BC%8C%E8%8E%B7%E5%8F%96root.gif" alt="安装magisk，获取root" />

至此雷电模拟器就获取到了root权限。

## LSposed模块

LSPosed Framework LSPosed 框架。LSPosed工作原理是在Android系统的核心层面上进行修改，从而为用户提供更深层次的系统控制权。它通过在系统服务中注入自定义的Java代码来实现这一目的，这使得用户可以自定义系统的各个方面，包括界面、功能和性能。通过LSPosed，用户可以安装定制rom，改变系统设置，以及进行各种其他的系统级别的修改。

### 安装Lsposed模块

创建共享文件夹

> 点击雷电模拟器的更多-->点击共享文件夹-->点击高级-->选择共享目录(存放安卓逆向学习)后重启

安装Lsposed模块

> 打开magisk-->点击模块，从本地安装-->点击左上角的多选-->点击文件管理器-->找到pictures目录，进入选择模块

<img src="./01-Android%E9%80%86%E5%90%91%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87.assets/%E5%AE%89%E8%A3%85Lsposed.gif" alt="安装Lsposed" />







