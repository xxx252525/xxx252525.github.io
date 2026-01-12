---
icon: /assets/icon/鱼板.svg
category:
  - 博客
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2025-03-11
---


# Rust环境部署教程

Rust下载地址如下：

- Windows 32：https://static.rust-lang.org/rustup/dist/i686-pc-windows-msvc/rustup-init.exe
- Windows 64：https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe



## Windows安装

### 安装Rust环境

双击安装`rustup-init.exe`程序进行安装。然后会进入到如下界面：

![image-20250311210023669](./Rust%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.assets/image-20250311210023669.png)

这里有三个选项，第一个是标准安装，第二个是自定义安装，第三个是退出安装。

这里我们输入1，直接进行标准安装，如图：

![image-20250311210240498](./Rust%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.assets/image-20250311210240498.png)

> [!IMPORTANT]
>
> 下载过程如下，注意这个取决于网络速度和连接镜像源的网络延时。建议使用国际网络下载，并且测试连接延时，如果网络延迟过高，那么一样下载很慢。如何使用国际网络？我们需要有网络代理工具和国际网络节点，至于怎么操作，这里就不讲解，不在讲解范围内。

如果您不会使用国际网络，我们可以使用二号方案进行安装。

#### 换源安装

我们使用清华的镜像源进行安装，首先要替换环境变量，我们需要使用Windows terminal进行操作，因为Windows Terminal会自动使用powershell命令行，Windows11自带，Windows10需要手动下载，Windows10也可以使用win+r快捷键，在输入框中输入powershell进入到powershell命令行进行操作。

```powershell
$env:RUSTUP_DIST_SERVER="https://mirrors.ustc.edu.cn/rust-static"
$env:RUSTUP_UPDATE_ROOT="https://mirrors.ustc.edu.cn/rust-static/rustup"
```

执行这条命令切换到清华源。

![image-20250311213431094](./Rust%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.assets/image-20250311213431094.png)

然后再执行`rustup-init.exe`进行安装。此时的下载速度得到了提升**(实际上也快不了多少，体验还是一般，南方极爱难以用中科大的源)**，如图：

![image-20250311213727345](./Rust%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.assets/image-20250311213727345.png)

默认情况下，Windows 上的 `rustup` 将 Rust 配置为以 MSVC ABI 为目标，我们可以通过 `rustup set default-host` 或在安装过程中更改此行为。

例如，要显式选择 32 位 MSVC 主机：

```powershell
rustup set default-host i686-pc-windows-msvc
```

或者选择 64 位 GNU 工具链：

```powershell
rustup set default-host x86_64-pc-windows-gnu
```

检查是否安装成功：

```powershell
rustc --version
```

### 安装Visual Studio

我们需要要将程序编译成 exe 文件，Rust 需要链接器、库和 Windows API 导入库。 对于目标，可以通过 Visual Studio 获取这些目标。我们需要去下载Visual Studio。

下载地址如下：

https://c2rsetup.officeapps.live.com/c2r/downloadVS.aspx?sku=community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030:3df07fa0b16140f7885917f936cc1477

双击下载好的安装程序，进入如下界面：

![image-20250311174734998](./Rust%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.assets/image-20250311174734998.png)

然后会进行安装：

![image-20250311174821146](./Rust%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.assets/image-20250311174821146.png)

完成此作后，您可以选择要安装的组件。 在这里，我们使用“工作负载”选项卡选择“使用 C++ 进行桌面开发”工作负载。 这将包括 Rust 所需的所有组件：

![选择 C++ 工作负载](./Rust%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.assets/step3.png)

#### 安装仅需要的组件

如果您想要更简单的安装（并且不会进行 C++ 开发），那么您可以使用“单个组件”选项卡仅选择基本组件，它们是：

- MSVC v143 - VS 2022 C++ x64/x86 生成工具（最新）
- Windows 11 软件开发工具包 

![image-20250311175423493](./Rust%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.assets/image-20250311175423493.png)

![image-20250311175528864](./Rust%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.assets/image-20250311175528864.png)

安装过程如图：

![image-20250311175603829](./Rust%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.assets/image-20250311175603829.png)



## Linux安装

Rust的官方安装工具是rustup，这是一个命令行工具，用于管理Rust版本和相应的工具链。

安装`curl`和`wget`工具

curl安装脚本进行安装：

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

wget安装：

```shell
wget https://sh.rustup.rs -O rustup.sh
sh rustup.sh
```

安装完成后，重新启动终端，或者运行以下命令将Rust添加到环境变量：

```shell
source $HOME/.cargo/env
```

检查是否安装成功：

```shell
rustc --version
cargo --version
```

### 配置Rust

安装完成后，你可能需要进行一些配置：

**更新Rust工具链**：你可以通过以下命令来更新Rust：

```shell
rustup update
```

**切换Rust版本**：如果你想使用特定的Rust版本，可以使用以下命令：

```shell
rustup install stable
rustup default stable
```

或者对于夜版（nightly）：

```shell
rustup install nightly
rustup default nightly
```

**配置`cargo`**：`cargo`的配置文件位于`$HOME/.cargo/config`。你可以在这里设置别名、默认的构建选项等。

**安装Rust组件**：例如，你可以安装Rust的文档：

```shell
rustup component add rust-docs
```

**检查Rust环境**：运行以下命令来检查你的Rust安装环境：

```shell
rustc --print cfg
```



## 升级

如果以前安装过 `rustup`，可以执行 `rustup update` 来升级 Rust。



## 卸载 Rust

在任何时候如果想卸载 Rust，可以运行 `rustup self uninstall`进行卸载操作。







