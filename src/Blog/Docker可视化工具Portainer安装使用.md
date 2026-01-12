---
icon: /assets/icon/鱼板.svg
category:
  - 博客
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-07-09
---


# Portainer介绍

Docker的可视化管理工具有DockerUI、Shipyard、Rancher、Portainer等，本文使用Portainer工具对Docker环境进行管理。

Portainer是一个轻量级的docker环境管理UI，可以用来管理[docker](https://www.kubernetes.org.cn/tags/docker)宿主机和docker swarm集群。他的轻量级，轻量到只要个不到100M的docker镜像容器就可以完整的提供服务。直接启动即可，异常方便。

##  部署Portainer服务器

检查Dcoker版本

```shell
sudo docker version
```

运行结果如下：

![image-20240708232721096](./Docker%E5%8F%AF%E8%A7%86%E5%8C%96%E5%B7%A5%E5%85%B7Portainer%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8.assets/image-20240708232721096.png)

检查docker是否在运行

```shell
sudo sysytemctl status docker
```

运行结果如下：

![image-20240708233001537](./Docker%E5%8F%AF%E8%A7%86%E5%8C%96%E5%B7%A5%E5%85%B7Portainer%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8.assets/image-20240708233001537.png)

搜索Portainer

```shell
sudo  docker search portainer
```

结果如下：

![image-20240708220006846](./Docker%E5%8F%AF%E8%A7%86%E5%8C%96%E5%B7%A5%E5%85%B7Portainer%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8.assets/image-20240708220006846.png)

下载安装portainer镜像

```shell
sudo docker pull portainer/portainer-ce 
```

安装成功如图：

![image-20240708233039097](./Docker%E5%8F%AF%E8%A7%86%E5%8C%96%E5%B7%A5%E5%85%B7Portainer%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8.assets/image-20240708233039097.png)

### 部署portainer-ce

创建portainer的数据卷

```shell
sudo docker volume create portainer_data
```

创建portainer-ce容器

```shell
sudo docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

命令注释：

- -d #容器在后台运行
- -p 9000:9000# 宿主机9000端口映射容器中的9000端口
- -v /var/run/docker.sock:/var/run/docker.sock # 把宿主机的Docker守护进程(docker daemon)默认监听的Unix域套接字挂载到容器中
- -v /root/portainer:/data # 把宿主机目录 /root/portainer 挂载到容器 /data 目录；
- –name dev-portainer # 指定运行容器的名称；

查看docker运行状态

```shell
 sudo docker ps -a
```

运行状态如下：

![image-20240708234448142](./Docker%E5%8F%AF%E8%A7%86%E5%8C%96%E5%B7%A5%E5%85%B7Portainer%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8.assets/image-20240708234448142.png)

检查日志有没有错误

```shell
sudo docker logs portainer
```



## 进入portainer

使用域名:9000或者IP:9000的方式访问Web端，注册账号后进入即可：

![image-20240709123719347](./Docker%E5%8F%AF%E8%A7%86%E5%8C%96%E5%B7%A5%E5%85%B7Portainer%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8.assets/image-20240709123719347.png)





















