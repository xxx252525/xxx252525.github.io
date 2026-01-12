---
icon: /assets/icon/鱼板.svg
category:
  - 博客
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2025-08-06
---


# Fedora install Oh-my-posh

> **oh-my-posh与oh-my-zsh的区别**
>
> 首先前者是基于shell进行个性化定制的一个工具，后者是基于zsh这个shell而定制的个性化定制工具，前者比后者更自由，支持bash、zsh、powershell等等。

## Install Oh-my-posh

使用如下命令下载脚本进行自动化安装

```shell
sudo curl -s https://ohmyposh.dev/install.sh | bash -s
```

检查是否安装成功，使用命令检测安装的版本号

```shell
oh-my-posh --version
```

## Install Font

接下来安装字体，我们需要安装meslo家族的字体，使用如下命令安装

```shell
# 选择字体安装，自定义类型
oh-my-posh font install
# 安装指定的字体，例如Meslo
oh-my-posh font install meslo
```

## Enable Upgrade

设置自动更新，使用如下命令让oh-my-posh自动更新

```shell
oh-my-posh enable upgrade
```

## Download Themes

下载oh-my-posh的主题文件，使用git进行拉取，注意保持网络环境是能够访问Github的

```shell
sudo dnf install -y git
git clone https://github.com/JanDeDobbeleer/oh-my-posh
mkdir ~/.themes
# 把下载好的配置文件剪切到.themes目录中，可以使用图形化操作，记得打开文件管理器的英藏文件显示才能看到.themes目录，或者使用如下命令进行操作
sudo mv /oh-my-posh/themes/* ~/.themes/
```

该操作会拉取整个项目目录，我们只需要里面的themes配置文件，我们可以直接访问https://github.com/JanDeDobbeleer/oh-my-posh去下载自己喜欢的主题。配置文件如下：

![image-20250806120028300](./Linux%E5%AE%89%E8%A3%85OyMyPosh.assets/3417053-20250806121920314-745597075.png)

## Setting Shell

检查当前的shell环境是什么，方便进行后面的环境配置，使用如下命令来查看，返回的值就是当前使用的shell。

```shell
oh-my-posh get shell
```

大部分Linux一般默认使用的是bash，只有极少数会使用其他的shell,例如Kali使用的就是zsh。

修改`.bashrc`文件，将oh-my-posh的配置添加进去，操作如下：

```shell
# 为了防止出现错误，建议先备份一次默认文件
sudo cp .bashrc .bashrc.backup
# 使用vim编辑器编辑文件
vim ~/.bashrc
# 在英文输入模式下，在文件的末尾输入i插入文本，例如
eval "$(oh-my-posh init bash --config ~/.themes/blueish.omp.json)"
# 最后使用英文的“：”输入wq保存退出，然后进行如下操作让配置生效
source .bashrcc
```

> 随机主题模式：
>
> 如果想实现随机主题，那么可以进行如下操作：
>
> ```shell
> # 为了防止出现错误，建议先备份一次默认文件
> sudo cp .bashrc .bashrc.backup
> # 使用vim编辑器编辑文件
> vim ~/.bashrc
> # 在英文输入模式下，在文件的末尾输入i插入文本，例如
> THEME_DIR="$HOME/.themes"
> RANDOM_THEME=$(find "$THEME_DIR" -name "*.omp.json" | shuf -n 1)
> 
> if [ -n "$RANDOM_THEME" ]; then
>  echo "🌈 Using Oh My Posh theme: $(basename "$RANDOM_THEME")"
>  eval "$(oh-my-posh init bash --config "$RANDOM_THEME")"
> fi
> # 最后使用英文的“：”输入wq保存退出，然后进行如下操作让配置生效
> source .bashrcc
> ```

实现效果大致如下：

![image-20250806120400358](./Linux%E5%AE%89%E8%A3%85OyMyPosh.assets/3417053-20250806121923053-1298082713.png)

## Setting Terminal

要想实现上面的效果我们还需要配置终端，我这里演示的是KDE+wayland桌面环境的终端配置，如果使用的是GNOME+X11的桌面环境，大致操作也是类似，只需要修改终端的字体即可。

![image-20250806120707836](./Linux%E5%AE%89%E8%A3%85OyMyPosh.assets/3417053-20250806121925764-1089348348.png)

