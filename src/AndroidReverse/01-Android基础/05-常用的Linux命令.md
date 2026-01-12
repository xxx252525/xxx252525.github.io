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


# 05-Android基础扫盲与Linux命令

## Android系统架构

以下这张图片我们从下网上看：

<img src="./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015161300285.png" alt="image-20241015161300285" style="zoom:80%;" />

### Linux内核层

首先，最底层是Linux Kernel，也就是Linux内核层，由于Android系统是基于Linux内核进行开发的，所以底层上会有一些相似之处。例如常见的各种驱动都是被封装在内核层里面的，后来由于各种厂商要进行定制化，部分厂商会吧驱动放在专门定制的区域。

而这个shell就在Linux内核层的外面，为用户和内核提供了一个接口，用户使用shell命令去解释，在发送到Linux内核，shell接收到系统的回应做出对应的输出，这就是Linux shell。



### 系统运行库层

这一层通过一些C/C++库为Android系统提供了主要的特性支持。

1. 如SQLite库提供了数据库的支持，
2. OpenGL|ES库提供了3D绘图的支持，
3. Webkit库提供了浏览器内核的支持等。

在这一层还有Android运行时库，它主要提供了一些核心库，允许开发者使用Java语言来编写Android应用。Android运行时库中还包含了Dalvik虚拟机（5.0系统之后改为ART运行环境），它使每一个Android应用都能运行在独立的进程中，并且拥有一个自己的虚拟机实例。相较于Java虚拟机，Dalvik和ART都是专门为移动设备定制的，它针对手机内存、CPU性能有限等情况做了优化处理。



### 应用框架层

构建应用程序时可能用到的各种API，Android自带的一些核心应用就是使用这些API完成的，开发者可以使用这些API来构建自己的应用程序。比如说常见的活动管理、窗口管理、包管理、视图管理等



### 应用层

所有安装在手机上的应用程序都是属于这一层的，比如系统自带的联系人、短信等程序，或者是你从Google Play上下载的小游戏，当然还包括你自己开发的程序。



## Android系统版本

首先回答三个问题：

什么是按照系统版本？什么是系统版本代号？什么是API接口？



### Android系统版本

Android系统版本是指Google开发的Android操作系统的具体发布版本。每个版本通常都会带来新的功能、改进的用户界面、性能提升和安全性更新。Android系统版本通常用数字和点号来表示，例如Android 4.4、Android 5.0、Android 6.0等。

<img src="./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015164009168.png" alt="image-20241015164009168" style="zoom: 80%;" />

如图，这台手机的Android版本是Android12，相应的下面还有版本号。



### Android系统版本代号

Android系统版本代号是Google为了便于记忆和区分不同的Android版本而赋予的名称。例如：

- KitKat (Android 4.4)
- Lollipop (Android 5.0 - 5.1.1)
- Marshmallow (Android 6.0 - 6.0.1)
- Nougat (Android 7.0 - 7.1.2)
- Oreo (Android 8.0 - 8.1)
- Pie (Android 9)
- Q (Android 10)
- R (Android 11)
- S (Android 12 - 12L)
- T (Android 13)

### API接口

Android API接口是Android平台提供的一系列编程接口，允许开发者访问Android系统的功能和服务。这些API接口定义了如何与Android操作系统进行交互，包括但不限于以下方面：

- **界面布局**：用于创建和管理应用程序的用户界面。
- **系统服务**：如通知、位置、相机、传感器等系统级服务的访问。
- **数据管理**：如文件存储、数据库访问、网络请求等。
- **多媒体**：如音频、视频播放和录制。

---

下表列出了代号、对应的版本号以及关联的 API 级别。

| 代号               | 版本          | API 级别/NDK 版本  |
| :----------------- | :------------ | :----------------- |
| Android13          | 13            | API 级别 33        |
| Android12L         | 12            | API 级别 32        |
| Android12          | 12            | API 级别 31        |
| Android11          | 11            | API 级别 30        |
| Android10          | 10            | API 级别 29        |
| Pie                | 9             | API 级别 28        |
| Oreo               | 8.1.0         | API 级别 27        |
| Oreo               | 8.0.0         | API 级别 26        |
| Nougat             | 7.1           | API 级别 25        |
| Nougat             | 7.0           | API 级别 24        |
| Marshmallow        | 6.0           | API 级别 23        |
| Lollipop           | 5.1           | API 级别 22        |
| Lollipop           | 5.0           | API 级别 21        |
| KitKat             | 4.4 - 4.4.4   | API 级别 19        |
| Jelly Bean         | 4.3.x         | API 级别 18        |
| Jelly Bean         | 4.2.x         | API 级别 17        |
| Jelly Bean         | 4.1.x         | API 级别 16        |
| Ice Cream Sandwich | 4.0.3 - 4.0.4 | API 级别 15，NDK 8 |
| Ice Cream Sandwich | 4.0.1 - 4.0.2 | API 级别 14，NDK 7 |
| Honeycomb          | 3.2.x         | API 级别 13        |
| Honeycomb          | 3.1           | API 级别 12，NDK 6 |
| Honeycomb          | 3.0           | API 级别 11        |
| Gingerbread        | 2.3.3 - 2.3.7 | API 级别 10        |
| Gingerbread        | 2.3 - 2.3.2   | API 级别 9，NDK 5  |
| Froyo              | 2.2.x         | API 级别 8，NDK 4  |
| Eclair             | 2.1           | API 级别 7，NDK 3  |
| Eclair             | 2.0.1         | API 级别 6         |
| Eclair             | 2.0           | API 级别 5         |
| Donut              | 1.6           | API 级别 4，NDK 2  |
| Cupcake            | 1.5           | API 级别 3，NDK 1  |
| （无代号）         | 1.1           | API 级别 2         |
| （无代号）         | 1.0           | API 级别 1         |



## Linux命令

### 认识命令提示符号

当我们进入Android shell之后，我们会看到如下提示符号：

![image-20241015164852079](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015164852079.png)

这就是命令提示符号，是可以进行自定义的。这个`redroid_arm64`指的就是Android设备的名称，`:`就是一个分隔符号；`/`指的是目录路径；`$`符号指的是权限符号，如果你处于超级用户权限中，显示的符号就是`#`。



### 根目录

根目录就是`/`，只要看到`/`那么都表示你处于根目录中，如果是`~`符号，那么表明你在用户目录中。其他的目录都是挂载到根目录下的，`/`和`~`开始的路径都是绝对路径。



### 相对路径与绝对路径

#### pwd

什么是绝对路径？使用pwd命令即可查看当前目录的绝对路径

![image-20241015165641219](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015165641219.png)

以上图片表示我处于根目录中，再来：

![image-20241015165724457](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015165724457.png)

以上图片表示我正处于sdcard目录中，这个目录中存放这用户的基础文件。

我们说绝对路径是`/`符号，那么相对路径是什么呢？如下图：

![image-20241015170327112](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015170327112.png)

相对路径就是你跑到了你隔壁的目录或者是隔壁隔壁的目录。这样跳转走的路就是绝对路径；当你下班直接走到对应的目录，那么这个路径就是绝对路径。相对路径的符号一般是`./`和`../`。

`./`表示当前目录，`../`表示上一级目录，相对路径的常用情况在目录切换和写代码的时候指定文件的路径。



### 目录切换

#### cd

使用cd命令实现路径的切换，例如：

![image-20241015170941895](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015170941895.png)

我们如果要切换到上一级目录直接使用如下命令：

![image-20241015171048885](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015171048885.png)

当然如果你所处的目录很深，你可以使用多个`../`来进行返回上一级目录，但是我们一般使用绝对路径去跳转比较深的目录，相邻的目录我们会使用`./`和`../`快速切换，例如：

从根目录切换到/storage/emulated/0/NP目录下：

```shell
redroid_arm64:/ $ cd /storage/emulated/0/NP/
redroid_arm64:/storage/emulated/0/NP $ pwd
/storage/emulated/0/NP
redroid_arm64:/storage/emulated/0/NP $
```

查看上一级目录有哪些目录，并且任意切换到一个目录中：

```shell
redroid_arm64:/storage/emulated/0/NP $ cd ../
redroid_arm64:/storage/emulated/0 $ ls
Alarms   Audiobooks  Documents  MT2     Music  Notifications  Podcasts    Ringtones
Android  DCIM        Download   Movies  NP     Pictures       Recordings  share
redroid_arm64:/storage/emulated/0 $ cd ./Download/
redroid_arm64:/storage/emulated/0/Download $ pwd
/storage/emulated/0/Download
```

向上返回三层目录：

```shell
cd ../../../
```



### 一切皆是文件

在Linux系统中，Linux一切皆是文件，硬件、文件、命令等都可以算是文件。Linux的我呢间默认是没有拓展名的，我们一般是人为的去添加后缀名，方便识别。

```shell
无后缀名：
test

有后缀名：
test.php
test.txt
test.backup
```



### 文件类型查看

#### file

使用file命令可以查看文件的类型和参数

```shell
redroid_arm64:/system/bin $ file ls
ls: symbolic link to toybox
redroid_arm64:/system/bin $ file cd
cd: cannot open: No such file or directory
redroid_arm64:/system/bin $ file pwd
pwd: symbolic link to toybox
redroid_arm64:/system/bin $ file /
/: directory
```

![image-20241015172819632](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015172819632.png)

这个命令非常重要，他可以识别合成的文件，去检查文件是否沾染恶意代码。

查看当前目录下的所有类型：

![image-20241015173103872](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015173103872.png)



### 查看目录文件

#### ls

使用ls命令就可以查看当前目录下面的文件，例如：

![image-20241015171910618](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015171910618.png)

使用参数可以查看更多的信息，以下是常见的用法：

![image-20241015173548381](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015173548381.png)

可以看见`ls -l`不简单是以列表的形式展现文件目录，而是以列表的形式展示文件相关信息。

例如文件权限、文件大小、文件创建时间、文件所属用户等信息。

![image-20241015173820239](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015173820239.png)

`ls -h`可以当前显示文件目录的大小。

#### 命令选项组合

我们还可以吧参数合并起来使用达到更好的效果：

![image-20241015173957378](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015173957378.png)

还可以使用简写的方式，`ls -alh`

![image-20241015174055024](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015174055024.png)

**注意：命令的选项和参数是区分大小写的！！！**



### 打印文件内容

#### cat

使用cat命令可以查看文件的详细内容：

![image-20241015174351641](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015174351641.png)



### 输出文本信息

#### echo

我们可以受用echo命令在命令行中打印我们需要输出表达的信息，例如：

![image-20241015174624555](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015174624555.png)

我们还可以通过echo命令来输出主机名字：

![image-20241015174809433](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015174809433.png)

`$HOSTNAME`表示的意思是变量，这个变量里面存储着主机名字的信息，我们通过echo可以将其打印出来查看，还可以打印环境变量等变量，变量这个内容涉及到shell编程，在Linux中使用更为广泛，我们在Android里面最多就是做一个调试。

写入数据到文件，例如：

![image-20241015175228796](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015175228796.png)



### 输入输出重定向

#### 输出重定向

`>`符号表示重定向中的覆盖文件的意思，`>>`表示把字符串追加到文件末尾，例如：

![image-20241015175552758](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015175552758.png)

注意：输出重定向是已经接收了用户的输入，不会将文件的信息打印出来。重定向命令列表如下：

| n > file  | 将文件描述符为 n 的文件重定向到 file。             |
| --------- | -------------------------------------------------- |
| n >> file | 将文件描述符为 n 的文件以追加的方式重定向到 file。 |
| n >& m    | 将输出文件 m 和 n 合并。                           |

#### 输入重定向

注意：区别输出重定向，这个相反，这里输入重定向不是接受用户的输入，而是从文件里面进行读取内容。

`<`用于文件读取输出，`<<`用于从命令行提供多行文本信息，`<<<`用于从命令行提供单行文本信息。

例如：

![image-20241015181246775](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241015181246775.png)

##### Here Document

`Here Document`是 Shell 中的一种特殊的重定向方式，用来将输入重定向到一个交互式 Shell 脚本或程序。

它的基本的形式如下：

```shell
command << delimiter
    document
delimiter
```

注意：

- 结尾的delimiter 一定要顶格写，前面不能有任何字符，后面也不能有任何字符，包括空格和 tab 缩进。
- 开始的delimiter前后的空格会被忽略掉。

例如：

```shell
redroid_arm64:/ $ cat << EOF
> Welcaome to China
> Hello World!
> EOF
Welcaome to China
Hello World!
```

![image-20241016100541514](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016100541514.png)



##### Here String

`<<<`用于从命令行提供单行文本信息。这个`<<<`就是Here String的用法。

**由于Android shell中没有bash**，所以无法使用 `<<<` 来传递字符串到命令的标准输入只能使用以下方式来进行替代：

```shell
echo "This is a single line of text." << EOF
EOF
或者
echo "This is a single line of text."
```



### 创建

#### touch

touch用于进行创建空文件和更新文件，例如：

![image-20241016101547189](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016101547189.png)

同时创建多个文件

![image-20241016101816512](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016101816512.png)

#### mkdir

mkdir命令可以创建目录，例如：

![image-20241016102001059](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016102001059.png)

还可以同时创建多个目录，例如：

![image-20241016102132437](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016102132437.png)

还可以递归创建子目录，例如：

![image-20241016102419500](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016102419500.png)

我们通过使用-p选项，实现目录的多级递归创建，这样就能实现创建具体层级的目录。



### 删除

#### rmdir

rmdir命令只能删除空目录，例如：

![image-20241016104251033](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016104251033.png)

#### rm

使用rm命令可以实现对文件的删除，rm命令不仅能删除文件，还能删除目录例如：

![image-20241016102815162](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016102815162.png)

还可以实现多个文件同时删除，例如：

![image-20241016102932892](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016102932892.png)

可以通过-f选项实现文件强制删除，例如：

![image-20241016103041665](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016103041665.png)

rm还可以实现整个目录的递归删除。例如：

![image-20241016103749407](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016103749407.png)

当-r和-f的参数同时使用的时候，在删除多级目录和多文件的情况下，可以跳过询问，直接进行删除，一般需要root授权

```shell
rm -rf 目录名字
```



### 复制

#### cp

cp命令可以实现对目录文件的复制操作，并且重命名，例如：

![image-20241016104837996](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016104837996.png)

如果不想重命名，直接末尾就不需要新的文件名，但是不能在统一目录下，因为不能出现同名文件，例如：

![image-20241016105259945](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016105259945.png)

复制多个文件到其他目录，例如：

![image-20241016105426595](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016105426595.png)

复制当前目录下所有文件到别的目录，例如：

![image-20241016105758093](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016105758093.png)

复制整个目录，重命名，并且复制下面的文件，例如：

![image-20241016104652781](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016104652781.png)

如果不适用-r参数就复制，就会进行报错，比如上面那条命令`cp doc1 doc2`，这是错误的用法。注意如果当前目录下有目录存在，如果逆向复制所有文件目录到当前目录下面的一个目录这个做法是不可取的，只能复制到其他目录。如下图：

![image-20241016105928941](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016105928941.png)

在复制的过程中，其他目录下出现同名目录是可取的：

![image-20241016110548789](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016110548789.png)



### 移动

#### mv

mv命令可以移动文件目录和重命名文件目录，不仅能在移动过程中命名，并且能在不移动文件的情况下重命名，例如：

![image-20241016110810676](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016110810676.png)

![image-20241016110946960](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016110946960.png)

我们可以通过mv命令移动文件或者目录，例如：

![image-20241016111317327](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016111317327.png)

还可以移动之后重命名文件目录，例如：

![image-20241016111623184](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016111623184.png)



### 管道

#### grep

grep命令，用于过滤一些信息，可以快速查找我们需要的信息，例如：

![image-20241016163136684](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016163136684.png)

在命令的末尾添加`./*`表示当前目录去寻找所有的文件目录，里面包含这个字符信息的文件，并显示文件中的文本信息。

![image-20241016163329958](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016163329958.png)

如果为我们要忽略字母的大小写进行查找呢？只需要在命令后面添加参数-i即可，如图

![image-20241016163758691](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016163758691.png)

如果我们要递归查找怎么办呢？只需要在面命令后面添加参数-r即可，例如：

![image-20241016164011146](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016164011146.png)

如果我们要找对应的文件，那么直接在选项中添加-l即可，过滤文件的操作如下：

```shell
grep -irl cn                                
grep -irl tiangesec                                      
```

![image-20241016162529332](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016162529332.png)

可以看见我们使用grep过滤出来了文件，并且给出了路径就在当前目录下面，如果想要搜索指定的目录，只需要在搜索信息的寿面添加目录即可，例如：

```shell
grep -ril Hello ./*
```

这里表示的就是在当前目录下面进行过滤。

管道的命令常常用于信息的过滤，我们还可以利用这个特性进行组合，利用管道来实现。

#### |

这个是竖线`|`，不是大写的英文字母I，也不是小写的英文字母l，管道符号就是`|`，可以和命令搭配只用，实现不同的效果。使用`|`符号可以把后面的命令作为数据源传给前面的命令，以此来进行输出值。

例如：列出hello的文件详细信息。

![image-20241016164336132](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016164336132.png)

还可以与进程查看共同使用，例如：

![image-20241016164419887](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016164419887.png)

我们通过过滤qq这个名字，来找到相关的进程。



### 文件查找

#### find

find命令用于查找文件，语法：

```shell
find PATH -name filename
```

![image-20241016171227821](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016171227821.png)

指定对应的路径去寻找文件，例如：

![image-20241016171350655](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016171350655.png)

![image-20241016171547637](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016171547637.png)

他会自动的递归的去寻找文件。注意，路径在前，选项和参数在后面。



### 历史命令与清屏

#### history

我们可以使用history命令来查看自己已经使用过的命令，例如：

![image-20241016135839626](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016135839626.png)

在Linux Bash中可以使用选项，但是在这个Android sh中是无法使用未被定义的选项的，只能使用history。

#### clear

使用clear命令之后会清除当前命令行的的所有文本信息，如图：

![image-20241016135945617](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016135945617.png)

结果如下：

![image-20241016135958161](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016135958161.png)



### 进程查看

#### ps

ps命令可以用来查看当前Android系统正在运行的服务和软件，例如：

![image-20241016164610264](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016164610264.png)

但是我们必须跟上选项-A才能查看全部的进程，因为默认的ps只能看到当前的shell和命令进程，例如：

![image-20241016164724027](./05-%E5%B8%B8%E7%94%A8%E7%9A%84Linux%E5%91%BD%E4%BB%A4.assets/image-20241016164724027.png)



