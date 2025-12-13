---
icon: /assets/icon/linux.svg
category:
  - 运维基础
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2025-02-18
---


# 04-shell变量

在Shell脚本编程中，变量是用来存储和使用数据的内存位置。Shell变量可以是数字、文本字符串或者文件名等。这里我们不讲解shell编程，shell编程我们会专门开一个内容板块来学习，请跳转到此处学习：https://xxx252525.github.io/Shell/。

## 变量的类型

在shell变量中我们有几种类型，分别是：

- 环境变量：这个变量是全局的，打开的每个Shell中都是有效的。例如，HOME、PATH、PWD 等。
- 局部变量：这些变量仅在它们被定义的Shell会话中有效。它们通常用于脚本的局部作用域。
- 位置变量：这些变量与脚本的参数有关，例如 $0（脚本名称）、$1 - $9（脚本参数）。
- 特殊变量：带有$与其他分数符号的特殊变量。
- 预定义变量:是Bash中已经定义好的变量，变量名不能自定义，变量作用也是固定的

| 变量分类           | 名称   | 作用   | 内容   |
| ------------------ | ------ | ------ | ------ |
| 用户自定义变量     | 自定义 | 自定义 | 自定义 |
| 用户自定义环境变量 | 自定义 | 自定义 | 自定义 |
| 系统自带环境变量   | 确定   | 确定   | 自定义 |
| 位置参数变量       | 确定   | 确定   | 自定义 |
| 预定一变量         | 确定   | 确定   | 自定义 |



## 变量的定义

在Shell中定义变量通常不需要声明类型，只需直接赋值即可。

变量一般是我们自己定义的，或者是开发者在系统定义好的变量。我们在应用变量的时候一般毁在前面添加`$`符号，例如前面的`echo $PATH`输出环境变量的路径。

变量定义有以下注意事项：

- 变量名和等号之间不能有空格。
- 变量名通常是大写的，但这不是强制的（特别是对于局部变量）。
- 引用变量值时，通常要在变量名前加上美元符号（$）。

例如：

```shell
VARIABLE="value"
```

用法如下：

![变量的使用](./04shell%E5%8F%98%E9%87%8F.assets/image-20250217144836651.png)

常见的shell环境变量

| 环境变量    | 描述                                           |
| :---------- | :--------------------------------------------- |
| `HOME`      | 用户的家目录路径。                             |
| `PATH`      | 执行命令时要搜索的目录列表。                   |
| `PWD`       | 当前工作目录的路径。                           |
| `USER`      | 当前登录的用户名。                             |
| `HOSTNAME`  | 当前机器的主机名。                             |
| `SHELL`     | 用户的登录Shell的路径。                        |
| `TERM`      | 终端的类型。                                   |
| `LANG`      | 系统的语言环境设置。                           |
| `LANGUAGE`  | 用户的语言环境设置。                           |
| `LC_ALL`    | 覆盖所有LC_*变量的值。                         |
| `LS_COLORS` | ls命令使用的颜色设置。                         |
| `MAIL`      | 用户邮箱文件的路径。                           |
| `MAILCHECK` | Shell检查新邮件的间隔时间（秒）。              |
| `OPTARG`    | 获取getopts命令的选项参数。                    |
| `OPTIND`    | getopts命令的下一个选项的索引。                |
| `PS1`       | 主提示符，即命令行提示符。                     |
| `PS2`       | 次提示符，用于续行提示。                       |
| `IFS`       | 内部字段分隔符，默认是空白字符。               |
| `HISTFILE`  | 历史命令存储的文件路径。                       |
| `HISTSIZE`  | 历史命令列表的最大行数。                       |
| `RANDOM`    | 每次引用时都会生成一个0到32767之间的随机整数。 |
| `UID`       | 当前用户的用户ID。                             |
| `EUID`      | 当前用户的有效用户ID。                         |
| `GROUPS`    | 当前用户所属组的数组。                         |
| `HOSTTYPE`  | 主机类型。                                     |
| `MACHTYPE`  | 硬件-CPU-操作系统类型。                        |
| `OSTYPE`    | 操作系统类型。                                 |

### 变量叠加

变量叠加语法如下：

```shell
变量名x="$变量名x"叠加的值
变量名x=${变量名x}叠加的值
```

![变量叠加](./04shell%E5%8F%98%E9%87%8F.assets/image-20250217150448840.png)

这就是变量叠加。

### 变量行为查看

我们如果要查看变量的属性和行为怎么办？我们需要用到`set`命令。使用用set命令可以查看所有的变量属性变量。常用选项：

```shell
-u		如果设定此选项，调用未声明变量时会报错（默认无任何提示）
-X		如果设定此选项，在命令执行之前会把命令先输出一次
-t		读取并执行一个命令之后退出。
-a		标记修改的或者仓创建的变变量为导出变量。
-e		如果任何命令返回非零状态（即失败），则立即退出。
```

在shel编程中，不存在的变量和变量值为空的时候调用出来都是空的，为了更好区分二者，使用`set -u`后不存在的变量就会报错，但是这是临时生效的，例如：

![严格模式](./04shell%E5%8F%98%E9%87%8F.assets/image-20250217171841640.png)

- **set -u**：启用严格模式，任何未设置的变量都会导致错误。 
- **PROMPT_START**: 未绑定的变量：因为 PROMPT_START 未被绑定，所以在严格模式下会抛出错误。
- **PROMPT_DIR_COLOR: 未绑定的变量**：`PROMPT_DIR_COLOR` 也未被绑定，因此会抛出错误。

`set -u` 是一个常用的选项，它告诉 Bash 在脚本执行过程中，如果遇到了未定义的变量（即未被赋值的变量），就立即退出并报错。这样可以避免因为变量未定义而导致脚本出现意外行为。

### 变量删除

我们创建了变量，那么如何删除变量呢？

要删除变量，我们需要使用`unset`命令，语法如下：

```shell
unset 变量名
```

例如：

![删除变量](./04shell%E5%8F%98%E9%87%8F.assets/image-20250217173202915.png)



## shell的基本功能

### 优先级

shll的优先级如下：

- 第一顺位执行用绝对路径或相对路径执行的命令。
- 第二顺位执行别名。
- 第三顺位执行Bash的内部命令。
- 第四顺位执行按照$PATH环境变量定义的目录查找顺序找到的第一个命令。

### 多命令执行符

我们shell中主要有三大特殊符号，分别是`;`、`&&`、`||`，前面我们介绍了分号的用法，就是用于多命令执行，这里我们再讲解一次。

#### ;

语法如下：

```shell
commend1 ; commend2
```

我们只需要在不同的命令之间添加分号即可，这个分号之间的空格没有限制，最好是>1。如果多条命令中存在错误的命令，这个不会影响执行，因为每一条命令之间没有逻辑关系。

如图：

![错误命令执行](./04shell%E5%8F%98%E9%87%8F.assets/image-20250217174256049.png)

#### &&

前面我们做计算机基础知识扫盲的时候讲到过`&&`符号，这是一种逻辑符号，在计算机的编程中几乎也是通用的含义：逻辑与运算。

语法如下：

```shell
commend1 && commend
```

逻辑与会产生命令之间的逻辑关系，但是也有所区别，原有的含义是只要有一个假的就是假的，而在这里有所区别，如果某一条命令出现错误，那么后面的命令将不会再执行。如图：

![逻辑与](./04shell%E5%8F%98%E9%87%8F.assets/image-20250217175330906.png)

#### ||

逻辑或在这里的含义也有所区别，当第一个命令被正确执行之后，第二个命令就不会执行；当第一个命令执行不正确的时候，第二个命令才回去执行。

语法如下：

```shell
commend1 || commend2
```

如图：

![逻辑或](./04shell%E5%8F%98%E9%87%8F.assets/image-20250217180229193.png)

### 特殊符号

特殊符号如下：

| 符号 | 作用                                                         |
| ---- | ------------------------------------------------------------ |
| ‘’   | 单引号在单引号中所有的特殊符号，如“$"和+“”（反引号）都没有特殊含义,所有的符号都会失去意义 |
| “”   | 双引号在双引号中特殊符号都没有特殊含义，但是"$”、“~"和"\"是例外，拥有“调用变量的值”、“引用命令"和"转义符"的特殊含义 |
| ``   | 反引号括起来的内容是系统命令，在Bash中会先执行它             |
| $()  | 和反引号作用一样，用来引用系统命令                           |
| ()   | 用于一串命令执行时，()中的命令会在子Shell中运行              |
| {}   | 用于一串命令执行时，{}中的命令会在当前Shel中执行。t也可以用于变量变形与替换 |
| []   | 用于变量的测试                                               |
| $    | 用于调用变量的值，如需要调用变量name的值时，需要用$name的方式得到的变量的值 |
| \    | 转义符，跟在之后的特殊符号将失去特殊含义，变为普通字符。如$将输出“$"符号，而不当做是变量引用 |
| #    | 在shell脚本里面表示注释                                      |

案例如下：

![特殊符号案例](./04shell%E5%8F%98%E9%87%8F.assets/image-20250217205509738.png)



## 父子shell

什么是父shell，什么是子shell，看看下面这张图片，当我们使用pstree命令的时候，我我们可以看到这个命令是在shell的进程下面，这里为什么有两个bash，是因为我们在命令行界面运行了bash，他就要单独开了一个bash在父shell下面，所以前面的bash就是父shell，后面的bash就是子shell，当前进入子shell后，你的历史命令就会消失。

![image-20250217205644604](./04shell%E5%8F%98%E9%87%8F.assets/image-20250217205644604.png)

请看如下操作（**#后面灰色的内容是注释，不是命令**）：

```shell
# 我们使用如下方式来查看当前的进程
miui@Fedora:~$ ps --forest
    PID TTY          TIME CMD
   1160 pts/0    00:00:00 bash
   1185 pts/0    00:00:00  \_ ps
   
# 进入子shell，当前进程中多了一个\_bash
miui@Fedora:~$ bash
miui@Fedora:~$ ps --forest
    PID TTY          TIME CMD
   1160 pts/0    00:00:00 bash
   1186 pts/0    00:00:00  \_ bash
   1208 pts/0    00:00:00      \_ ps

# 再在进入一个子shell，当前进程多了一个\_sh
miui@Fedora:~$ sh
sh-5.2$ ps --forest
    PID TTY          TIME CMD
   1160 pts/0    00:00:00 bash
   1186 pts/0    00:00:00  \_ bash
   1209 pts/0    00:00:00      \_ sh
   1210 pts/0    00:00:00          \_ ps
   
# 退出子shell
sh-5.2$ exit
exit
miui@Fedora:~$ ps --forest
    PID TTY          TIME CMD
   1160 pts/0    00:00:00 bash
   1186 pts/0    00:00:00  \_ bash
   1211 pts/0    00:00:00      \_ ps
   
# 退出子shell
miui@Fedora:~$ exit
exit
miui@Fedora:~$ ps --forest
    PID TTY          TIME CMD
   1160 pts/0    00:00:00 bash
   1212 pts/0    00:00:00  \_ ps
```

我们来分析下上面的操作，首先我们当前有一个bash shell，我们在当前的bash shell中有新开了一个bash，这个时候我们可以吧原来的bash shell看作是父shell，而新开的shell看作是子shell；然后我们新开的sh可以看作是第二个bash的子shell。

创建子shell的时候有些注意事项，如下：

- ()执行一串命令时，需要重新开一个子shel进行执行；
- {}执行一串命令时，是在当前shell执行；
- ()和}都是把一串的命令放在括号里面，并且命令之间用;号隔开；
- ()最后一个命令可以不用分号；
- {}最后一个命令要用分号；
- {}的第一个命令和左括号之间必须要有一个空格；
- ()里的各命令不必和括号有空格；
- ()和0中括号里面的某个命令的重定向只影响该命令，但括号外的重定向则影响到括号里的所有命令；

例如：

```shell
miui@Fedora:~$ name=xxx252525.github.io
miui@Fedora:~$ echo $name
xxx252525.github.io
miui@Fedora:~$ (name=1; echo $name)
1
miui@Fedora:~$ echo $name
xxx252525.github.io
```

我们来看看上面的代码，我们在shell里定义了一个name，我们使用小括号的时候输出的内容就变了，这是为什么呢？这不是覆盖了前面的值，这是在小括号里面的命令开启了一个子shell，命令在子shell中运行，输出的也是子shell的值，我们当前的shell就可以看作是父shell，所以再次执行的时候，显示的是当前父shell的值。

----

当我们使用大括号的时候，他执行的命令就是在父shel里面执行的，而且必须注意的是，命令前后必须空格，否者就会像最后一行一样，语法是错误的。

```shell
miui@Fedora:~$ name=xxx252525.github.io

# 正确写法
miui@Fedora:~$ { name=2;echo $name; }
2

# 错误写法
miui@Fedora:~$ { name=2;echo $name }
> ^C
miui@Fedora:~$ {name=2;echo $name;}
-bash: 未预期的记号 "}" 附近有语法错误
```

> [!CAUTION]
>
> 注意：大括号前后都有空格，命令后面都有分号，如果没写对就会报错，如上代码。

查看当前是否使用了子shell还可以使用echo$BASH_SUBSHELL。

例如：

```shell
miui@Fedora:~$ pwd ; ls ; echo $BASH_SUBSHELL
/home/miui
xxx252525.github.io
0
```

**注意：当echo$BASH_SUBSHELL的值是O的时候表示没有创建子shell来执行这些命令，如果输出的是1，表示创建了子shell来执行命令。**

### 高效的子shell

#### 后台模式

一种高效的子shell用法就是后台模式，在命令的末尾加上&就会将命令至于后台模式。演示后台模式的命令是sleep，进程睡眠，该命令在shell脚本中常用于引l入一段暂停时间。

请看下面的例子：

```shell
# 将它放置在后台十秒钟，然后使用ps查看当前的进程
miui@fedora:~$ sleep 10&
[1] 4267
miui@fedora:~$ ps -f
UID          PID    PPID  C STIME TTY          TIME CMD
miui        3837    3830  0 17:52 pts/1    00:00:00 -bash
miui        4267    3837  0 19:58 pts/1    00:00:00 sleep 10
miui        4268    3837 99 19:58 pts/1    00:00:00 ps -f
miui@fedora:~$
[1]+  已完成               sleep 10

# 使用jobs可以查看当前的后台信息，jobs -l可以查看更多的信息
miui@fedora:~$ sleep 10&
[1] 4291
miui@fedora:~$ jobs
[1]+  运行中               sleep 10 &
miui@fedora:~$ jobs -l
[1]+  4291 已完成               sleep 10
```

> [!CAUTION]
>
> 注意：进入睡眠模式的时候的ID号和ps进程中睡眠模式的ID号是一样的。

我们还可以把进程列表放置到后台。请看下面的例子：

```shell
miui@fedora:~$ ( sleep 2 ; echo $BASH_SUBSHELL ; sleep 2 )&
[1] 4337
miui@fedora:~$ 1

[1]+  已完成               ( sleep 2; echo $BASH_SUBSHELL; sleep 2 )
```

#### 协程

协程是一种程序组件，它允许多个入口点用于暂停和恢复执行的函数，可以在单个线程内实现多任务的并发执行。在Bash shell中，`coproc`命令可以用来在后台运行命令，同时允许前台继续执行其他操作，但这并不是创建一个子shell，而是创建一个协作进程。

请看下面的案例：

```shell
miui@fedora:~$ coproc sleep 10
[1] 4365
miui@fedora:~$ ps
    PID TTY          TIME CMD
   3837 pts/1    00:00:00 bash
   4365 pts/1    00:00:00 sleep
   4366 pts/1    00:00:00 ps
miui@fedora:~$
[1]+  已完成               coproc COPROC sleep 10
```

> [!CAUTION]
>
> 注意：协程是一种编程结构，它允许函数在某个点暂停执行，并在后续的时间点恢复执行，而不需要创建新的线程或进程。协程通常用于协作式多任务处理，它们在单个线程内运行，并且可以通过编程语言提供的特定机制来控制。协程不是后台任务，它们是前台任务的一部分，可以在程序的控制下进行交互和切换。
>
> 后台模式是将命令放入后台执行，这样前台就可以继续进行交互。通过在命令后面加上&，命令会在后台运行，不会阻塞命令行。合理的运用子shell可以让我们事半功倍，后台在运行其他操作的时候不影响我们在主要的命令行进行其他操作。

我们每一次运行携程，这个进程的ID都是不一样的，例如这里是4404，上面是4365：

```shell
miui@fedora:~$ coproc sleep 10
[1] 4404
miui@fedora:~$ jobs
[1]+  运行中               coproc COPROC sleep 10 &
miui@fedora:~$ jobs -l
[1]+  4404 运行中               coproc COPROC sleep 10 &
miui@fedora:~$
[1]+  已完成               coproc COPROC sleep 10
```

我们还可以给进程起名字，这里我们的名字被修改成了myjob1：

```shell
miui@fedora:~$ bash
miui@fedora:~$ coproc myjob1 { sleep 10; } &
[1] 4429
miui@fedora:~$ jobs
[1]+  运行中               coproc myjob1 { sleep 10; } &
```

当我们进程没有结束的时候开启新的进程的时候，旧的进程依然会运行，直到它结束。

```shell
miui@fedora:~$ coproc sleep 10
[1] 4437
miui@fedora:~$ ps
    PID TTY          TIME CMD
   3837 pts/1    00:00:00 bash
   4437 pts/1    00:00:00 sleep
   4438 pts/1    00:00:00 ps
miui@fedora:~$ coproc sleep 10
-bash: 警告：execute_coproc: 副进程 [4437:COPROC] 仍然存在
[2] 4439
miui@fedora:~$
[1]-  已完成               coproc COPROC sleep 10
miui@fedora:~$ coproc sleep 10
-bash: 警告：execute_coproc: 副进程 [4439:COPROC] 仍然存在
[3] 4440
[2]   已完成               coproc COPROC sleep 10
```

我们第二次执行`coproc sleep 10`的时候，第一个协作进程(协程)还没有完成，仍然存在，第一个协程就在作为副进程继续运行，后面1进程完成了，我们开启第三个的时候，第二个仍然在执行。

我们还可以结合协程与进程列表使用，如下：

```shell
miui@fedora:~$ coproc ( sleep 5 ; sleep 3 )
[1] 4460
miui@fedora:~$ ps --forest
    PID TTY          TIME CMD
   3837 pts/1    00:00:00 bash
   4460 pts/1    00:00:00  \_ bash
   4461 pts/1    00:00:00  |   \_ sleep
   4462 pts/1    00:00:00  \_ ps

miui@fedora:~$ ps --forest
    PID TTY          TIME CMD
   3837 pts/1    00:00:00 bash
   4459 pts/1    00:00:00  \_ ps
[1]+  已完成               coproc COPROC ( sleep 5; sleep 3 )
```

从这两组信息可以看出，在我们运行协程和进程列表的时候，会再开一个bash子shell，然后再里面运行sleep进程列表，运行完成之后bash子sheli会自动关闭，留下一个完成的信息。

上一节讲了shell命令，有一些细节没有讲解，这里讲一下。至于函数、保留字、我们会在shell编程中去讲解。

#### Shell内置命令

内置命令是Shell自身的一部分，它们由Shell直接执行，不需要调用外部程序。内置命令通常用于控制Shell自身的行为或者执行一些基本的文件操作。

#### 外部命令

外部命令也叫文件系统命令，外部命令是存在于Shell之外的独立程序，当执行外部命令时，Shell会创建一个新的进程来运行该命令。这取决与你的Linux发行版，不同的Linux存在差异。

例如这是Fedora返回的结果：

```shell
miui@fedora:~$ which ps
/usr/bin/ps
miui@fedora:~$ which pwd
/usr/bin/pwd
miui@fedora:~$ which cd
/usr/bin/cd
```

下面这个是Kali Linux的结果：

![Kali](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218211658016.png)

在Fedora Linux中，cd是外部命令，而kali Linux是内部命令。这就是不同Linux之间的区别。

当执行外部命令的时候就会创建一个子进程，这种操作叫做衍生。

```shell
miui@fedora:~$ ps
    PID TTY          TIME CMD
   3837 pts/1    00:00:00 bash
   4523 pts/1    00:00:00 ps
miui@fedora:~$ ps -f
UID          PID    PPID  C STIME TTY          TIME CMD
miui        3837    3830  0 17:52 pts/1    00:00:00 -bash
miui        4538    3837  0 21:17 pts/1    00:00:00 ps -f
```

为什么之前查看进程的时候每次都能看到ps，因为他是一个外部的命令，调用的时候会衍生子进程，在子进程里面执行外部命令，注意他们的PID号是不一样的。当出现进程衍生的时候就会消耗时间和资源来设置新的子进程环境，所以外部命令的开销较高。

#### 内建命令

内建命令与外部命令不同，它们不需要创建子进程来执行，他们和shel编译成了一体，作为shell的组成部分存在。

有些命令既有内建命令也有外部命令，例如pwd和echo。使用type-a即可看见他们所有的路径。

```shell
miui@fedora:~$ type -a pwd
pwd 是 shell 内建
pwd 是 /usr/bin/pwd
miui@fedora:~$ type -a echo
echo 是 shell 内建
echo 是 /usr/bin/echo
miui@fedora:~$ type -a cd
cd 是 shell 内建
cd 是 /usr/bin/cd
```

可以看见echo与pwd还有别的路径，他们不仅仅是shell内建命令。而`which`只能看见外部命令

#### 别名

别名是Shell命令的一个快捷方式，它可以用来简化频繁使用的命令或者为命令设置默认参数。查看当前系统可以使用的别名可以使用命令`alias`。选项如下：

```shell
-p		查看所有可以使用的别名
```

请看案例：

![查看所有别名](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218212501236.png)

这是已经内置好的别名，我们如果要设置别名可以这样操作：

```shell
alias 别名='命令操作'
```

请看案例：

```shell
miui@fedora:~$ alias hn='hostname'
miui@fedora:~$ hn
fedora
```

我们把`hostname`命令定义成hn别名，能够直接使用。注意：被定义的别名仅在当前的shell内有效，他是内建命令。

如果要删除别名怎么办？操作如下：

```shell
unalias 别名
```

请看案例：

![取消别名](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218212959412.png)



## 环境变量

Linux 环境变量是在 Linux 操作系统中用来存储系统信息的一组键值对。这些变量可以在不同的程序之间共享信息，并且可以影响程序的运行方式。环境变量通常分为两类：用户环境变量和系统环境变量。

1. **用户环境变量**：这些变量只对当前用户有效，它们通常存储在用户的主目录下的 `.bashrc` 或 `.profile` 文件中。用户可以通过修改这些文件来设置自己的环境变量。
2. **系统环境变量**：这些变量对所有用户都有效，它们通常存储在 `/etc/environment` 文件或 `/etc/profile` 文件中。系统管理员可以通过修改这些文件来设置系统的环境变量。

环境变量的作用包括但不限于：

- 设置路径 (`PATH`) 变量以指定可执行文件的搜索路径。
- 指定默认的编辑器、终端类型等。
- 存储临时数据供脚本或程序使用。

除此之外还存在全局环境变量和局部环境变量的概念。

### 全局环境变量

全局环境变量是对所有用户和所有进程都有效的环境变量。在系统启动时由系统的初始化脚本设置，或者在系统配置文件中设置，如 `/etc/profile`、`/etc/environment` 或 `/etc/profile.d/` 目录下的脚本。全局环境变量会影响系统的每个用户和每个启动的 shell。

例如，`PATH` 是一个全局环境变量，它定义了 shell 查找可执行文件的目录列表。

#### 查看变量

查看全局变量可以使用命令env和printenv，如下图：

![env](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218213710871.png)

![printenv](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218213735305.png)

输出的内容基本上是一致的。但是当要查看个别环境变量的时候就只能使用printenv，请看案例：

![printenv与env的区别](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218213926814.png)

查看当前的环境变量就是前面用过的`echo $PATH`。

#### 设置全局环境变量

语法如下：

```shell、
sudo echo 'export MYVARIABLE="globalvalue"' >> /etc/profile  # 添加到全局配置文件
source /etc/profile  # 使变更生效
```

- 或者，可以在 `/etc/environment` 文件中直接设置全局环境变量，该文件为每个进程设置环境变量。
- **局部环境变量覆盖全局环境变量**： 如果在用户的局部环境中设置了与全局环境变量同名的变量，那么局部环境变量将覆盖全局环境变量。
- **查看环境变量**： 使用 `printenv` 或 `env` 命令可以查看当前 shell 的环境变量。使用 `export` 命令可以查看已导出的局部环境变量。
- **环境变量的作用域**： 全局环境变量的作用域是整个系统，而局部环境变量的作用域仅限于当前的 shell 会话或脚本。



### 局部环境变量

局部环境变量只对当前 shell 会话或当前用户的特定进程有效。它们通常在用户的启动脚本中设置，如 `~/.bashrc` 或 `~/.profile`。局部环境变量不会影响其他用户的 shell 会话或同一用户的其他 shell 会话。

#### 设置局部环境变量

语法如下：

```shell
export MYVARIABLE="localvalue"  # 在当前 shell 会话中设置局部环境变量
```

这个变量 `MYVARIABLE` 只在当前的 shell 会话中有效。

> [!CAUTION]
>
> 注意环境变量与自定义变量的区别是什么？
>
> 环境变量和用户自定义变量最主要的区别在于，环境变量是全局变量，而用户自定义变量是局部变量。用户自定义变量只在当前的Shellr中生效，而环境变量会在当前Shel和这个Shell的所有子Shell当中生效。

变量可以自定义，但是对系统生效的环境变量名和变量作用是固定的；当我们执行脚本的时候就需要指明脚本的路径，绝对路径或者是相对路径，如果向直接使用脚本命令就需要将该文将放入bin目录或者是将该文件目录添加到环境变量中去。

常用的环境变量如下：

```shell
HOSTNAME：主机名
SHELL:当前的shell
TERM:终端环境
HISTSIZE：历史命令条数
SSH_CLIENT：当前操作环境是用ssh连接的，这里记录客户端ip
SSH_TTY:ssh连接的终端时pts/1
USER：当前登灵录的用户
```

### PS1环境变量

PS1变量是一种命令提示符设置，可以定义自己喜欢的提示符。也就是我们之前说的前面的这个东东：

![PS1环境变量](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218214618726.png)

我们可以进行自定义，语法如下：

```shell
export PS1=' [\选项...\选项] '
```

注意：目录前面有空格，[]外有空格。

常用的选项如下：

```shell
\d：显示日期，格式为“星期月日”
\h：显示简写主机名。如默认主机名"1ocalhost”
\H:显示完整的主机名。如默认主机名"'Localhost..localdomain”
\t：显示24小时制时间，格式为HH：MM：SS”
\T：显示12小时制时间，格式为“HH：MM：SS”
\A：显示24小时制时间，格式为“HH：MM
\u：显示当前用户名
\W：显示当前所在目录的完整名称
\W：显示当前所在目录的最后一个目录
\$：提示符。如果是r0ot用户会显示提示符为“#”，如果是普通用户会显示提示符为“$”
\A：显示24小时制时间，格式为“H：MM”
@：显示l2小时制时间，格式为“HH：MMam/pm”
\u:显示当前用户名
\v：显示Bash的版本信息
\#：执行的第几个命令
```

我们可以输出PS1环境变量，如下：

![输出PS1环境变量](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218214910131.png)

在Linux中系统登录是主要生效的环境变量配置文件有以下五个：

- /etc/profile
- /etc/profile.d/*.sh
- ~/.bash_profile
- ~/.bashrc
- /etc/bashrc

### 环境变量持久化

#### 全局环境变量持久化

对于所有用户都有效的全局环境变量，我们可以通过以下步骤进行设置和持久化：

1. 使用 `/etc/environment`

   这个文件包含了系统级的全局环境变量。任何在这个文件中设置的变量对所有的用户都是有效的。例如，要为整个系统设置一个叫做 `MY_GLOBAL_VAR` 的环境变量，可以在该文件的末尾添加如下一行：

   ```shell
   MY_GLOBAL_VAR="value"
   ```

   保存更改后，新的环境变量就会在下次系统启动时生效。

2. 使用 `/etc/profile` 或 `/etc/profile.d`

   `/etc/profile` 是一个bash shell的全局配置文件，它会在每个交互式shell启动时读取。我们可以在其中添加或修改环境变量。例如：

   ```shell
   export MY_GLOBAL_VAR="value"
   ```

   另外，`/etc/profile.d` 目录下的脚本也可以用来设置环境变量。这些脚本通常以 `.sh` 结尾，并在用户登录时由 `/etc/profile` 自动执行。

#### 用户级环境变量持久化

对于仅对特定用户有效的环境变量，我们可以通过以下方式实现：

1. 使用 `~/.bash_profile`, `~/.bashrc` 或 `~/.profile`

   这些文件位于用户的家目录下，分别对应不同类型的shell会话。例如，要在当前用户的 `.bashrc` 文件中设置一个环境变量，可以这样做：

   ```shell
   echo 'export MY_USER_VAR="value"' >> ~/.bashrc
   source ~/.bashrc
   ```

   第一行命令将环境变量设置写入 `.bashrc` 文件，第二行命令立即应用更改而不需重启shell。

2. 直接在终端中设置

   有时，你可能想在当前的shell会话中临时设置一个环境变量，但不想将其永久保存在配置文件中。这时可以直接在终端中使用 `export` 命令：

   ```shell
   export MY_TEMP_VAR="temporary value"
   ```

   这种方式设置的环境变量只对当前的shell会话有效，一旦关闭shell窗口，该变量就会失效。

### 系统语序

我们可以通过locale查看和设置本地语序规则，语序就是字符集、地区、国家和语言。例如：

```shell
zh_CN.utf8
zh：表示中文
CN：表示大陆地区
Utf8：表示字符集

de_DE.utf-8@euro
de：表示德语
DE：表示德国

Utf-8：表示字符集
euro：表示按照欧洲习惯加以
```

查询当前使用语序：

![当前语序](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218220025336.png)

> [!CAUTION]
>
> 注意优先级：LC*ALL>LC_*>LANG

查看当前系统语序

```shell
echo $LANG
```

查看Linux支持的所有语序

```shell
locale -a
```

设置系统语序

```shell
#可以修改/etc/profile文件
#修改/etc/profile文件，在最下面增加
export LC_ALL=zh_CN.utf8
export LANG=zh_CN.utf8
#命令行中使用命令source下配置文件，使其生效
#修改/etc/locale.gen文件
#将注释打开即可，修改完成后，执行下 locale-gen 命令使其生效
#en_SG IS0-8859-1
en_US.UTF-8 UTF-8
#en_US IS0-8859-1
#命令行模式
localectl set-locale LANG=en_US.uTF-8
修改/etc/default/locale
#注销一下，使其生效
LANG="en_US.UTF-8"
LANGUAGE="en_US:en"
#创建/etc/Locale.conf文件
LANG=en_AU.UTF-8
LC_COLLATE=C
LC_TIME=en_DK.UTF-8
# 让配置重新加载
source 
```

### 位置参数变量

![位置参数变量](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218220700798.png)

注意：

- $*会把每一个参数看成一个整体
- $@会把每个参数当成独立的个体
- 当使用for循环的时候就可以看出二者明显的差距

### 预定义变量

![预定义变量](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218220822066.png)

案例：

![案例](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218220915827.png)



## 配置文件

- ~/.bash_profile的作用：

  - 调用了~/.bashrc文件，只有用户登陆的时候才执行这个文件。

  - 在PATH变量后面加入了"：$HOME/bin"这个目录。

- /etc/bashrc的作用：

  - PS1变量

  - umask

  - PATH变量

  - 调用/etc/profile.d/*.sh文件

- ~/.bash_logout：
  - 该文件默认是空的，只有当你执行关机的时候进行某种操作才会有内容

- ~/bash_history：

  - 该文件会保存你上次登录终端后使用的历史命令

  - 若要修改历史命令的上限需要在.bashrc和/etc/profile文件中修改
- /etc/profile：
  - 给每个用户设置用户环境。




### source

修改配置文件后使用该命令让文件直接生效，直接让脚本生效都可以，.在做命令使用的时候就是`source`。

语法：

```shell
source 配置文件
# 或者
．配置文件
```





## shell登陆信息

![登陆欢迎信息](./04shell%E5%8F%98%E9%87%8F.assets/image-20250218221358664.png)

本地终端欢迎信息：/etc/issue；远程终端欢迎信息：/etc/issue.net

> [!CAUTION]
>
> 注意：
>
> 转义符在/etc/issue..net文件中不能使用
>
> 是否显示此欢迎信息，由ssh的配置文件
>
> /etc/ssh/sshd_config决定，加入
>
> "Banner/etc/issue.net"行才能显示（记得重启SSH服务）

## 打赏

如果觉得文章写的还不错，可以给作者一个小小的支持嘛？请我喝杯蜜雪冰城可好？

<img src="./04shell%E5%8F%98%E9%87%8F.assets/%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%AC%BE.png" alt="微信收款" style="zoom: 50%;" />

<img src="./04shell%E5%8F%98%E9%87%8F.assets/%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%B6%E6%AC%BE.jpg" alt="支付宝收款" style="zoom:50%;" />

---

