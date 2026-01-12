---
icon: /assets/icon/鱼板.svg
category:
  - 博客
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-09-23
---


# 环境准备

系统环境如下：

```shell
Linux fedora 6.8.5-301.fc40.x86_64 #1 SMP PREEMPT_DYNAMIC Thu Apr 11 20:00:10 UTC 2024 x86_64 GNU/Linux
```

我这里使用的Fedora Linux操作系统，属于RHEL系列，Debian系列的使用的命令有所区别。准备一台Linux操作系统就行，最好翻墙的准备，国内的docker源不完整，无法实现完整的docker服务。

![image-20240923103744219](./Docker%E6%90%AD%E5%BB%BA%E9%9D%B6%E5%9C%BA.assets/image-20240923103744219.png)

# 安装docker

更新环境依赖

```shell
sudo dnf update
```

![image-20240923103504918](./Docker%E6%90%AD%E5%BB%BA%E9%9D%B6%E5%9C%BA.assets/image-20240923103504918.png)

输入y完成下载和更新，如图：

![image-20240923103927542](./Docker%E6%90%AD%E5%BB%BA%E9%9D%B6%E5%9C%BA.assets/image-20240923103927542.png)

查看docker依赖包，安装我们需要的依赖包：

![image-20240923104339082](./Docker%E6%90%AD%E5%BB%BA%E9%9D%B6%E5%9C%BA.assets/image-20240923104339082.png)

docker-ce和docker-compose是不可缺少的依赖很明显，这里没有docker-ce



```shell
sudo dnf install dnf-plugins-core
```

![image-20240923104716550](./Docker%E6%90%AD%E5%BB%BA%E9%9D%B6%E5%9C%BA.assets/image-20240923104716550.png)

设置docker仓库

```shell
sudo dnf config-manager \
    --add-repo \
    https://download.docker.com/linux/fedora/docker-ce.repo
```

安装完整的docker环境

```shell
sudo dnf install -y docker docker-compose
或者
sudo dnf install -y docker-ce docker-compose
```

**建议使用国际网络下载，国内的docker-ce环境不完整，能找到完整的更好。**CE是开源免费的版本。如果原版docker有问题就使用docker-ce，没有问题就安装docker就可以了。

安装完成如下：

![image-20240923105609676](./Docker%E6%90%AD%E5%BB%BA%E9%9D%B6%E5%9C%BA.assets/image-20240923105609676.png)

启动docerk

```shell
sudo systemctl start docekr
```

设计开机自启动

```shell
sudo systemctl enable docker
```

查看运行状态

```shell
sudo systemctl status docker
```

![image-20240923110053503](./Docker%E6%90%AD%E5%BB%BA%E9%9D%B6%E5%9C%BA.assets/image-20240923110053503.png)



# 搭建靶场

转换成root用户进行以下操作，或者使用root权限命令sudo执行。

## DVWA

#### 获取DVWA镜像

打开命令行工具，使用以下命令从Docker Hub拉取DVWA的官方镜像：

```
docker pull securityoverride/dvwa
```

#### 启动DVWA容器

拉取镜像完成后，使用以下命令启动DVWA容器：

```
docker run -d -p 80:80 securityoverride/dvwa
```

这里，`-d`表示在后台运行容器，`-p 80:80`表示将容器的80端口映射到宿主机的80端口。

#### 访问DVWA

在浏览器中输入`http://localhost`，您应该能够看到DVWA的登录页面。默认的用户名是`admin`，密码是`password`。

#### 配置DVWA

如果您需要配置DVWA，例如更改安全级别，可以进入容器内部进行操作。首先，找到正在运行的DVWA容器的ID：

```
docker ps
```

然后，使用以下命令进入容器：

```
docker exec -it 容器ID /bin/bash
```

在容器内部，您可以找到DVWA的配置文件进行修改。











