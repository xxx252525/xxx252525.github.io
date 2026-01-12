---
icon: /assets/icon/鱼板.svg
category:
  - 博客
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-07-07
---


# Swap分区介绍

Swap分区是什么？Linux中Swap（即：[交换分区](https://www.vpsgo.com/tag/交换分区)），类似于Windows的虚拟内存，就是当内存不足的时候，把一部分硬盘空间虚拟成内存使用，从而解决内存容量不足的情况。

Swap分区的作用是什么？它的功能就是在内存不够的情况下，操作系统先把内存中暂时不用的数据，存到硬盘的交换空间，腾出内存来让别的程序运行

# 创建Swap分区

查看当前系统是否存在Swap分区

```shell
free -m 
```

如果不存在返回内容如下：

```shell
               total        used        free      shared  buff/cache   available
内存：      15966        4664        6424         341        4876       10722
交换：          0           0           0
```

如果我们Swap分区设置的不合理（太小），并且VPS本身的物理内存也不够用，那么就会出现[Linux Swap占用很高](https://www.vpsgo.com/tag/linux-swap占用很高)，甚至Swap分区全部占满的情况，一般来说，根据Linux内存的大小不同，我们可以按照下面的对应关系设置[Swap分区大小](https://www.vpsgo.com/tag/swap分区大小)：

1. 内存 <= 4g：Swap 至少 4G
2. 内存 4~16G：Swap 至少 8G
3. 内存 16G~64G：Swap 至少 16G
4. 内存 64G~256G：Swap 至少 32G

关闭swap分区，如果没有就不存在这一步骤

```shell
sudo swapoff -a
```

创建Swap分区

```shell
sudo dd if=/dev/zero of=/root/swapfile bs=1M count=8192
```

建立 Swap 的文件系统（格式化为 Swap 分区文件）

```shell
#设置权限
sudo chmod 600 /root/swapfile
sudo mkswap /root/swapfile
```

启用 Swap 分区

```shell
sudo swapon /root/swapfile
```

查看交换分区是否成功创建,如果有 Swap 就说明创建成功了

```shell
free -m
#或者
free -h
```

设置开启启动，在 /etc/fstab 文件中加入一行代码

```shell
echo '/root/swapfile swap swap defaults 0 0' | sudo tee -a /etc/fstab
```

## Swap开关设置

查看swap交换分区

```shell
swapon -s
```

开启swap交换分区

```shell
swapon -a
```

关闭swap交换分区

```shell
swapoff -a
```

重启swap交换分区

```shell
swapoff -a && swapon -a
```

## Swap的优先级

#### 优先级的范围

Swap优先级的数值范围是从-1到32767。数值越高，优先级越高。当内核需要使用swap空间时，它会优先使用优先级最高的swap区域。

#### 默认优先级

如果没有为swap区域设置优先级，Linux内核会默认为它分配一个优先级。通常，内核会根据swap分区的设备号来分配一个默认的优先级，通常是0。对于使用`mkswap`命令创建的swap文件或分区，如果没有指定优先级，它们通常会获得相同的默认优先级。

#### 设置优先级

可以使用`swapon`命令的`-p`或`--priority`选项来设置swap区域的优先级。以下是设置swap文件优先级的示例：

```
sudo swapon -p 1000 /path/to/swapfile
```

上述命令将swap文件的优先级设置为1000。

























