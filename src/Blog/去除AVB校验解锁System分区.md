---
icon: /assets/icon/鱼板.svg
category:
  - 博客
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-12-24
---


# 去除AVB校验解锁system分区

要去除AVB2.0检验，就要修改/vendor/etc/fstab.qcom文件，删除里面的avb字样的代码，就可以了。但是，再没解锁system分区的时候，是无法修改/vendor/etc/fstab.qcom文件的，而要解锁system分区，就是要修改/vendor/etc/fstab.qcom文件。所以，似乎陷入了一个死循环？

所以，要解决这个问题，就只能把vendor分区提取出来，修改，然后再刷回去，就可以了，同理我们需要提取system.img分区，使用下面一样的方法进行操作。

> [!WARNING]
>
> 刷机有风险，即使是按照教程操作也容易变砖，没有救砖能力不要刷机。



## 提取vendor.img

根据手机的分区情况来进行提取，是a就提取a，是b就提取b。

```shell
dd if=/dev/block/mapper/vendor_a of=/sdcard/vendor.img
dd if=/dev/block/mapper/vendor_b of=/sdcard/vendor.img
```

查看分区进入fastboot模式，执行如下

```
fastboot getvar current-slot
```



## 解包

### Termux安装DNA

推荐在Termux或者ubuntu上面执行。如果是termux记得给应用文件读写权限。

```shell
bash <(curl -s https://gitee.com/sharpeter/proot-ubuntu/raw/master/onekey_install_dna.sh)
```

安装好之后如图：

<img src="./%E5%8E%BB%E9%99%A4AVB%E6%A0%A1%E9%AA%8C%E8%A7%A3%E9%94%81System%E5%88%86%E5%8C%BA.assets/image-20241222111048501.png" alt="image-20241222111048501" style="zoom:67%;" />

新建工程，输入0，然后输入工程名字进入到如图：

![image-20241222111207206](./%E5%8E%BB%E9%99%A4AVB%E6%A0%A1%E9%AA%8C%E8%A7%A3%E9%94%81System%E5%88%86%E5%8C%BA.assets/image-20241222111207206.png)

备份vendor.img文件到工程目录下面，目录路径为：/data/data/com.termux/files/home/ubuntu/root/DNA2/你的工程目录名/

这个Errors_img就是你刚刚新建出来的工程名字。

设置文件权限为666或者777：

```shell
chmod 666 /data/data/com.termux/files/home/ubuntu/root/DNA2/Errors_img/vendor.img
```

查看权限：

```shell
ls -l /data/data/com.termux/files/home/ubuntu/root/DNA2/Errors_img/vendor.img
返回如下
-rw-rw-rw- 1 root root 1740910592 2024-12-22 11:02 /data/data/com.termux/files/home/ubuntu/root/DNA2/Errors_img/vendor.img
```

解包vendor，输入04，如果termux中执行有问题，请使用ubuntu进行操作。

这里就不续写步骤了，因为和Ubuntu的操作类似。错误的原因就是ubuntu的文件权限不能执行，目录名要改成DNA，DNA2会无法识别，目录权限不足。





## Ubuntu22安装DNA

安装依赖环境

```shell
sudo apt install git cpio aria2 brotli android-sdk-libsparse-utils openjdk-11-jre p7zip-full -y
sudo apt install zip unzip gawk sed curl wget -y
```

安装DNA

```shell
git clone https://gitee.com/sharpeter/DNA.git --depth 1
```

进入目录执行

```shell
cd DNA && python3 run.py
```

复制文件到工程目录下

![image-20241222113937464](./%E5%8E%BB%E9%99%A4AVB%E6%A0%A1%E9%AA%8C%E8%A7%A3%E9%94%81System%E5%88%86%E5%8C%BA.assets/image-20241222113937464.png)

在工程目录下赋予读写权限：

```shell
sudo chmod 777 vendor.img
```

![image-20241222114320005](./%E5%8E%BB%E9%99%A4AVB%E6%A0%A1%E9%AA%8C%E8%A7%A3%E9%94%81System%E5%88%86%E5%8C%BA.assets/image-20241222114320005.png)

修改`vendor/etc/fstab.qcom`文件，去掉里面的avb字样代码，删除所有avb含有值的内容，例如：`avb=vbmeta_system`，即可去除avb2.0检验

![image-20241222120305582](./%E5%8E%BB%E9%99%A4AVB%E6%A0%A1%E9%AA%8C%E8%A7%A3%E9%94%81System%E5%88%86%E5%8C%BA.assets/image-20241222120305582.png)

修改之后合成打包即可，输入06

![image-20241222120726740](./%E5%8E%BB%E9%99%A4AVB%E6%A0%A1%E9%AA%8C%E8%A7%A3%E9%94%81System%E5%88%86%E5%8C%BA.assets/image-20241222120726740.png)

用adb工具刷入：
进入fastboot模式，用fastboot reboot fastboot进入fastbootd模式，再用命令fastboot flash vendor_a 你打包出来的那个img文件



