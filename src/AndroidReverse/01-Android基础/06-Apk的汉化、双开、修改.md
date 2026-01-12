---
icon: /assets/icon/android.svg
category:
  - Android逆向
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-10-16
---


# 06-Apk的汉化、双开、修改-特别篇

## 软件准备

![image-20240708171143960](./06-Apk%E7%9A%84%E6%B1%89%E5%8C%96%E3%80%81%E5%8F%8C%E5%BC%80%E3%80%81%E4%BF%AE%E6%94%B9.assets/image-20240708171143960.png)

## Apk的目录结构

我们如果需要对一个软件进行双开、或者汉化修改，我们就必须了解Apk的目录结构，只有了解目录结构，对每个文件目录了如指掌，就知道这个应该如何去修改。

以Geekbench6的软件包为例，在Google商店下载的包格式是Apks，在其他渠道下载的是Apk，这有什么区别呢？

### Apk、Apks、Xapk的区别

**APK (Android Application Package)**:

APK是Android设备上安装应用程序的标准格式，包含Android应用程序的所有组件，如代码、资源、配置文件等。，用户可以直接安装APK文件。

**APKS (Split APKs)**:

APKS文件实际上是多个APK文件的集合，也称为“split APKs”，它是Google为应对应用程序大小增长而引入的一种解决方案，允许将一个应用程序拆分为多个APK文件，每个文件负责应用程序的一部分。在安装时，这些APK文件被一起安装，但在设备上被视为一个单一的应用程序。这种方式可以优化应用程序的更新过程，用户只需下载更改过的部分，而不是整个应用程序。

**XAPK (OBB Data File with APK)**:

XAPK文件是一种扩展的APK文件格式，通常与APK文件一起使用。包含了APK文件和一个或多个OBB（Opaque Binary Blob）文件。OBB文件通常包含应用程序的大文件，如纹理、音效等，它们被存储在设备的扩展存储中，如SD卡。XAPK文件不能直接安装，需要使用特定的应用程序安装器。这个包格式并不常见，所以我们也不讲这种扩展APK文件格式。

### Apk的目录结构

<img src="./06-Apk%E7%9A%84%E6%B1%89%E5%8C%96%E3%80%81%E5%8F%8C%E5%BC%80%E3%80%81%E4%BF%AE%E6%94%B9.assets/image-20240708111941830.png" alt="image-20240708111941830" style="zoom:80%;" /><img src="./06-Apk%E7%9A%84%E6%B1%89%E5%8C%96%E3%80%81%E5%8F%8C%E5%BC%80%E3%80%81%E4%BF%AE%E6%94%B9.assets/image-20240708112039719.png" alt="image-20240708112039719" style="zoom:80%;" />

---

以上面两个软件包为例，可以看出差别很大，小米相机有更多的目录和文件，但是主要的目录并不会改变。

| 文件目录            | 注释                                                         |
| ------------------- | ------------------------------------------------------------ |
| assets              | 存放APK的静态资源文件、视频、图片、音频等，与res不同的是文件不需要编译 |
| lib                 | 应用程序的库文件，常见子目录为架构目录如`armeabi-v7a`、`arm64-v8a`、`x86`等 |
| META-INF            | Apk签名信息存放目录，用于校验APK文件的完整性，身份验证       |
| res                 | 应用程序的资源文件，包括图像、音频，但是这些资源常常被用于程序的编译 |
| AndoridManifest.xml | APK的核心文件，定义了程序的名称、版本、权限、引用的库文件等信息 |
| classes.dex         | 程序的所有可执行代码，apk运行的主要逻辑，这是由Java源码编译的Dalvik可执行文件（Java字节码文件） |
| resources.arsc      | 编译后的二进制文件，相当于一个映射表，包含了所有资源的ID和对应的信息，可以快速查找资源 |
| 其他                | 例如小米相机里面其他的文件和目录                             |

其他的目录详解：

- `Kotlin`目录表明该软件是用Kotlin编写的，现在大部分的APP都是由Kotlin，Kotlin的Java的超集，是google和Jetbrains在Java的基础上进行一些改进，设计上与Java是兼容的，比Java更高效、更安全。
- `okhttp3`是一个用于 Android 和 Java 应用程序的 HTTP 和 HTTP/2 客户端。非常流行的网络请求库，因为它提供了简洁的 API、高效的性能和良好的扩展性。
- `google`目录里面存放了谷歌相关的资源文件和服务。比如谷歌广告。
- `org` 目录通常包含了应用程序的业务逻辑代码，里面存放着域名等开放的网站信息，一般是和APP的业务相关，比如apache、nginx、openresty等。
- `license` 通常指的是应用程序所使用的第三方库或资源的许可证信息。

### Apks的目录结构

<img src="./06-Apk%E7%9A%84%E6%B1%89%E5%8C%96%E3%80%81%E5%8F%8C%E5%BC%80%E3%80%81%E4%BF%AE%E6%94%B9.assets/image-20240708135851030.png" alt="image-20240708135851030" style="zoom:80%;" />

---

这是来自谷歌商店的Geekbench6软件包，包的格式是apks，可以看完，目录结构和apk是完全不一样的。

| 目录文件                   | 注释                                                         |
| -------------------------- | ------------------------------------------------------------ |
| base.apk                   | 这是最基本的APK文件，里面包含了APK的核心代码和资源           |
| Split APKs                 | Split APKs就是Split_xxx.apk等APK文件，如下面四个apk          |
| split_config.arm64_v8a.apk | 针对ARM64处理器优化的APK，拥有更好的性能，例如骁龙、联发科等芯片 |
| split_config.xxxhdpi.apk   | 针对特定屏幕密度的分拆 APK 文件，确保应用程序在不同设备上的显示效果xxxhdpi密度大约是480dpi |
| split_config.zh.apk        | 针对特定语言区域（在这里是中文）的分拆 APK 文件              |

所以在APKs的安装包中，更新的时候一般是base.apk文件。其他的文件都是固定辅助base.apk主要apk文件的。在Split APKs等APK包下面都是存在`META-INF`、`res`、`lib`等文件目录的。

## 应用双开原理

**修改包名：**将应用程序的apk包名更改为一个新的、独一无二的标识符，这样系统就会将其视为一个与原应用不同的新应用。

**修改Framwork：**对 Android 操作系统的底层代码进行修改。例如小米双开。

**虚拟化：**虚拟Framwork层、文件系统、模拟安卓等，在设备上创建一个虚拟环境，在这个环境中可以运行应用程序。

**插件机制运行：**利用反射替换，动态代理，Hook系统大部分与system-server进程通信的函数，欺骗系统，让系统以为只有一个apk在运行。

## 汉化APK

APK 汉化是指将 Android 应用程序的 APK 文件中的资源文本、界面元素、提示信息等从原始语言翻译成中文，通过资源提取、翻译、修改、回写等一系列操作使APK汉化。

**汉化流程如下：**

<img src="./06-Apk%E7%9A%84%E6%B1%89%E5%8C%96%E3%80%81%E5%8F%8C%E5%BC%80%E3%80%81%E4%BF%AE%E6%94%B9.assets/1720423899948-c794991f-3ef4-4844-9f19-7f2bf0160778.jpeg" alt="img" style="zoom:60%;" />

**流程图制作：语雀**

## APK基础修改

前面我们说了`AndoridManifest.xml`文件是整个程序的信息描述文件，包含了程序的名称、版本、权限、引用的库文件等信息，其中还包括一些组件的信息，每一个apk的目录下都有一个`AndoridManifest.xml`文件，并且这个我呢间名称是不能修改的，优点类似于Linux俺还在那个软件的环境依赖程序（各种libxxx程序包），从逆向的角度来说AndoridManifest.xml文件就变相的成为了暴露信息的文件，他们各自实现的类和各种功能、数据处理等都是透明的，当然普通用户是不在意这些的。

![image-20240708163036895](./06-Apk%E7%9A%84%E6%B1%89%E5%8C%96%E3%80%81%E5%8F%8C%E5%BC%80%E3%80%81%E4%BF%AE%E6%94%B9.assets/image-20240708163036895.png)

![image-20240708162747831](./06-Apk%E7%9A%84%E6%B1%89%E5%8C%96%E3%80%81%E5%8F%8C%E5%BC%80%E3%80%81%E4%BF%AE%E6%94%B9.assets/image-20240708162747831.png)

| 属性                                  | 定义                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| versionCode                           | 版本号                                                       |
| versionName                           | 版本名                                                       |
| users-permission android:name=" "     | 应用权限                                                     |
| android:label="@string/app_name"      | 应用名称                                                     |
| android:icon="@mipmap/ic_launcher"    | 应用图标路径                                                 |
| android:debuggable="true"             | 是否开启debug权限                                            |
| android:compileSdkVersion="33"        | SDK版本                                                      |
| android:compileSdkVersionCodename="13 | SDK对应安卓版本代号，指的是 Android 33 版本的代号（对应Android13） |
| package="com.android.camera"          | 应用包名                                                     |
| platformBuildVersionCode="33"         | 平台版本代码，33版本代码对应Android14版本                    |
| platformBuildVersionName="13"         | 平台版本名称，Android 12 的版本名称是 “S”（Swan），Android 13 的版本名称是 “T”（Tiramisu），依此类推。 |

> [!CAUTION]
>
> 注意：Android 版本的代号是用于标记开发版本（Preview）的，它们通常以数字 “13”、“14” 等形式出现， Android 33 版本的代号，这一点可以在AndroidStudio中下载Android SDK的时候就可以看到。













