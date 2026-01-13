---
icon: /assets/icon/鱼板.svg
category:
  - 博客
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-09-15
---


# Windows Start FTP Service
## 使用PowerShell启用IIS和FTP

**注意：以下操作都需要在管理员模式下运行！！！**

或者，您可以使用以下PowerShell命令来启用IIS和FTP功能：

```powershell
# 启用IIS
Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServerRole

# 启用FTP
Enable-WindowsOptionalFeature -Online -FeatureName IIS-FTPServer
```

请注意，这些命令可能需要一些时间来执行，并且可能需要重启计算机才能完成安装。

## 检查FTP服务是否已安装

确保FTP服务已经安装在您的系统上。你可以通过以下命令来检查：

```powershell
Get-WindowsFeature Web-FTP-Server
```

如果返回的状态不是“已安装”，则需要先安装FTP服务角色：

```powershell
Install-WindowsFeature Web-FTP-Server
```

## 检查服务状态

检查FTP服务的当前状态，看它是否已经启动或者是否有其他依赖服务未启动：

```powershell
Get-Service ftpsvc
```

## 启动依赖服务

如果FTP服务依赖于其他服务，确保所有依赖服务都已启动：

```powershell
# 例如，IISADMIN服务是FTP服务的一个依赖
Start-Service IISADMIN
```

### 开启FTP服务

首先，确保FTP服务在您的系统上已经安装并启动。

```powershell
# 开启FTP服务
Start-Service -Name "FTPSVC"
```

### 创建FTP用户账户和密码

现在，我们将创建一个新的本地用户账户，该账户将用于FTP身份验证。

```powershell
# 设置用户名和密码
$Username = "FTPUser"$Password = "SecurePassword123!"

# 将密码转换为一个安全的字符串
$SecurePassword = ConvertTo-SecureString -String$Password -AsPlainText -Force

# 创建新的本地用户
New-LocalUser -Name $Username -Password$SecurePassword -Description "FTP User Account"

# 将新用户添加到IIS_IUSRS组，这样用户就可以访问FTP
Add-LocalGroupMember -Group "IIS_IUSRS" -Member $Username
```

### 创建FTP共享文件夹

接下来，我们创建一个文件夹，并将其共享为FTP站点的一部分。

```powershell
# 设置FTP共享文件夹路径
$FTPPath = "C:\inetpub\ftproot"

# 创建文件夹（如果它不存在的话）
if (-not (Test-Path -Path $FTPPath)) {
    New-Item -ItemType Directory -Path $FTPPath
}

# 设置文件夹权限，允许FTP用户访问
$acl = Get-Acl -Path $FTPPath
$AccessRule = New-Object System.Security.AccessControl.FileSystemAccessRule($Username, "Read,Write", "ContainerInherit,ObjectInherit", "None", "Allow")
$acl.SetAccessRule($AccessRule)
Set-Acl -Path $FTPPath -AclObject $acl
```

### 配置FTP站点

最后，我们需要配置FTP站点，使其使用我们创建的共享文件夹。

```powershell
# 导入IIS模块
Import-Module WebAdministration

# 创建一个新的FTP站点
$FTPSiteName = "MIUIFTPSite";$FTPBinding = "21: "
New-Item -Path "IIS:\Sites\$FTPSiteName" -bindings @{protocol="ftp";bindingInformation="$FTPBINDING: "} -PhysicalPath $FTPPath

# 设置FTP站点的用户隔离模式为“无”
Set-ItemProperty -Path "IIS:\Sites\$FTPSiteName\ftpServer" -Name "userIsolationMode" -Value "None"

# 为FTP站点添加授权规则，允许我们创建的用户访问
Add-WebConfiguration -Filter "/system.ftpServer/security/authorization" -PSPath "IIS:\" -Location $FTPSiteName -Value @{accessType="Allow"; roles=""; users="$Username"}
```