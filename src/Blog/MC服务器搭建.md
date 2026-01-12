---
icon: /assets/icon/鱼板.svg
category:
  - 博客
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-12-31
---


# MC服务器搭建

## 环境准备

演示环境

- Linux OS：Ubuntu Rockchip
- Kernel：5.10.0-1012
- 架构：ARM64(aarch64)
- CPU Core：8核心
- RAM：16GB
- 磁盘存储：512GB

以上是我使用的环境，请根据自身情况来进行搭建，这里演示Linux环境的搭建。



## 安装Mcsmanager

**MCSManager 面板**（简称：MCSM 面板）是一款免费，开源，分布式，轻量级，快速部署，支持 Minecraft 和 Steam 游戏服务器的 Web 管理面板。

此软件在 和其他游戏社区内中已有一定的流行程度，它可以帮助你集中管理多个物理服务器，实现在任何主机上创建游戏服务器，并且提供安全可靠的多用户权限系统，可以很轻松的帮助你管理多个服务器，一直在为 ， 和 游戏服务器的管理员，运维人员和个人开发者提供健康的软件支持。`Minecraft``Minecraft``Terraria``Steam`

![panel-image](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/panel-image.png)

---

1. 支持一键开服！轻松部署 Java 版/基岩版游戏服务器。`Minecraft`
2. 兼容大部分 游戏服务器，列如 ，， 和 等。`Steam``幻兽帕鲁``战术小队``僵尸毁灭工程``泰拉瑞亚`
3. 网页支持拖拽式的小卡片布局，打造自己喜欢的界面布局。
4. 支持 上的所有镜像，支持多用户，支持商业服务。`Docker Hub`
5. 支持分布式，一个网页即可同时管理数台机器。
6. 技术栈简单，仅需擅长 Typescript 即可完成整个 MCSManager 开发！
7. 更多...

**注意：控制面板可运行在 与 平台，无需安装数据库，只需安装 环境和几个用于解压缩的命令。`Windows Linux Node.js`必须使用 [Node.js 16.20.2](https://nodejs.org/en) 以上，推荐使用最新版本 LTS 版本。**



### 搭建开发环境

使用如下命令进行安装`nodejs`：

```shell
sudo apt install -y nodejs
```

![image-20241224144126629](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224144126629.png)

版本不对应也不慌，后面使用脚本安装的时候会构建对应的版本。

更新`nodejs`到最新版本

```shell
sudo apt update && sudo apt update
```

安装Java17+，如下命令安装Java运行环境：

```shell
sudo apt install -y openjdk-17-jdk openjdk-17-jre
sudo apt install -y openjdk-21-jdk openjdk-21-jre
```



### Linux命令快速安装

使用如下命令快速安装

```shell
sudo su -c "wget -qO- https://script.mcsmanager.com/setup_cn.sh | bash"
```

安装过程截图如下：

![image-20241224150734972](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224150734972.png)

![image-20241224150748405](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224150748405.png)

控制台的一些操作

```shell
# 开启web控制台
systemctl start mcsm-{daemon,web}.service
# 关闭web控制台
systemctl stop mcsm-{daemon,web}.service
# 重启web控制台
systemctl restart mcsm-{daemon,web}.service
```

- 脚本仅适用于 `Ubuntu/Centos/Debian/Archlinux`。
- 面板代码与运行环境自动安装在 目录下。`/opt/mcsmanager/`



### Linux 手动安装

- 若一键安装不起作用，则可以尝试此步骤手动安装。

```shell
# 切换到安装目录。如果不存在，请提前用'mkdir /opt/'创建它。
cd /opt/
# 下载运行时环境（Node.js）。如果你已经安装了Node.js 16+，请忽略此步骤。
wget https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz
# 解压档案
tar -xvf node-v20.11.0-linux-x64.tar.xz
# 添加程序到系统环境变量
ln -s /opt/node-v20.11.0-linux-x64/bin/node /usr/bin/node
ln -s /opt/node-v20.11.0-linux-x64/bin/npm /usr/bin/npm

# 准备好安装目录
mkdir /opt/mcsmanager/
cd /opt/mcsmanager/

# 下载MCSManager
wget https://github.com/MCSManager/MCSManager/releases/latest/download/mcsmanager_linux_release.tar.gz
tar -zxf mcsmanager_linux_release.tar.gz

# 安装依赖库
./install.sh

# 请打开两个终端或screen

# 先启动节点程序
./start-daemon.sh

# 启动网络服务(在第二个终端或screen)
./start-web.sh

# 为网络界面访问http://localhost:23333/
# 一般来说，网络应用会自动扫描并连接到本地守护进程。
```

这样就可以进行访问了。访问你本机的IP地址和端口进行访问，端口默认是23333，记得关闭防火墙或者开启防火墙对应的端口。

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224151148331.png" alt="image-20241224151148331" style="zoom:50%;" />

**注意：登陆的时候记得创建账户和密码。**

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224151231785.png" alt="image-20241224151231785" style="zoom:50%;" />

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224151254832.png" alt="image-20241224151254832" style="zoom:50%;" />





### 1panel部署

如果你已经使用Linux命令进行快速安装或者手动安装，请跳过这个步骤。

安装1panel面板，然后在应用商店进行安装，注意网络环境必须保证docker访问外网。

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224145714090.png" alt="image-20241224145714090"  />

安装的时候记得勾选端口外部访问。

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224145758046.png" alt="image-20241224145758046" style="zoom: 50%;" />

这样就可以进行访问了。访问你本机的IP地址和端口进行访问，端口默认是40056。

**注意：登陆的时候记得创建账户和密码。**这里使用1panel搭建的面板版本较低，所以支持较低版本的`nodejs`。1panel面板安装的版本是10.1.0，官方已经更新到了10.4.3，如果要使用最新版，请使用上面的命令快速安装，新版本操作比较简便。版本有差距的原因是没有对docker仓库进行更新。推荐使用命令安装。

![image-20241224150104090](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224150104090.png)

![image-20241224151330112](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224151330112.png)

注意1Panel面板部署的旧版本需要自己搭建远程节点，而使用命令安装的最新版是不需要手动搭建远程节点的。

#### 搭建远程节点

在节点管理里面新建远程节点，如图

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224151748533.png" alt="image-20241224151748533" style="zoom: 67%;" />

docker的IP和端口在这里查看：

![image-20241224152019523](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224152019523.png)

密钥在这地方查看，打开文件看到key的内容，

![image-20241224152113927](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224152113927.png)

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224152225777.png" alt="image-20241224152225777"  />

成功之后如下：

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224152246567.png" alt="image-20241224152246567" style="zoom: 80%;" />



## 快速搭建MC服务端

下载服务端压缩包和必要版本的运行程序

1. 服务端下载地址：

    https://www.ilanzou.com/console/files/27826198?title=%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%89%88%E6%9C%AC&status=1

2. paper-1.18下载地址：

    https://api.papermc.io/v2/projects/paper/versions/1.18.2/builds/388/downloads/paper-1.18.2-388.jar



### 创建实例

我们的整合包一般都是Java版本，所以我们在创建的时候要选择Java版。

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224153148506.png" alt="image-20241224153148506" style="zoom: 67%;" />

后面多是图片演示，文本叙述较少。

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224153359910.png" alt="image-20241224153359910" style="zoom: 67%;" />

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224221600553.png" alt="image-20241224221600553" style="zoom:67%;" />

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231151700079.png" alt="image-20241231151700079" style="zoom: 67%;" />

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241224221733254.png" alt="image-20241224221733254" style="zoom:67%;" />

然后进入控制台：

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231151859768.png" alt="image-20241231151859768" style="zoom:67%;" />

点击开启即可运行，如图：

![image-20241231151931472](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231151931472.png)



## Frp代理

如果你使用的是公网服务器，那么可以跳过该步骤。

我们可以使用第三方的Frp来实现，也可以通过自己的公网服务器进行Frp代理（公网服务器性能不够的使用），这里我使用SakuraFrp来进行演示。

樱花Frp地址如下：

https://www.natfrp.com/user/

注册登陆后，这是你的可用密钥和账户信息：

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231152215696.png" alt="image-20241231152215696" style="zoom:67%;" />

创建隧道：

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231152244205.png" alt="image-20241231152244205" style="zoom:67%;" />

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231152314297.png" alt="image-20241231152314297" style="zoom: 50%;" />

选择节点：

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231152342813.png" alt="image-20241231152342813" style="zoom: 67%;" />

创建隧道信息：

<img src="./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231152419674.png" alt="image-20241231152419674" style="zoom: 67%;" />

下载frp运行程序：

![image-20241231152520862](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231152520862.png)

压缩包里面的文件如下：

![image-20241231152646149](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231152646149.png)

解压到本地，把frpc上传到Linux服务器中，之后，我们需要到Linux终端中去进行配置，进入到你上传到的目录中，例如：

![image-20241231152859559](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231152859559.png)

给文件执行权限：

```shell
sudo chmod +x frpc
```

然后运行

```shell
./frpc
```

运行之后会车进行配置，如图：

![image-20241231153144189](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231153144189.png)

获取访问密钥

![image-20241231153200849](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231153200849.png)

右键粘贴到里面，然后会车登陆进入如图界面：

![image-20241231153258385](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231153258385.png)

按空格键或者会车启用会变成绿色，如图：

![image-20241231153332483](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231153332483.png)

然后Ctrl+C退出，启用配置

![image-20241231153435531](./MC%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.assets/image-20241231153435531.png)然后进入MC输入这里面返回的IP地址和端口即可访问到

