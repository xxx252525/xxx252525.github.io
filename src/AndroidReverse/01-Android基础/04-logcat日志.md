---
icon: /assets/icon/android.svg
category:
  - Android逆向
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
date: 2024-10-10
---


# 04-日志logcat

`logcat` 是 `adb` 命令中的一个重要组成部分，它是用于在Android设备上查看实时系统日志的命令。通过 `logcat`，开发者可以监控应用程序的运行情况，查看系统消息、调试信息、警告和错误等。

```shell
adb logcat								--查看日志
adb logcat -c							--清除日志
adb logcat -g							--显示缓冲区的大小
adb logcat -G 256M						--修改缓冲区的大小
adb logcat -v time						--设置不同的显示格式
adb logcat -v color						--带颜色显示
adb logcat -s <messages>				--g根据tag过滤日志
```

任何程序在运行的时候都会产生日志文件，如果没有日志文件，我们就无法对软件的BUG和安全问题进行修复，所以开发者在开发的时候会编写这个功能，如果没有该功能，说明你不是一个合格的开发者。

Android系统是存在系统日志的，在开发者模式里面就可以设置日志记录缓冲区的缓存大小，如下：

<img src="./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241008195659165.png" alt="image-20241008195659165" style="zoom: 80%;" />

---

使用logcat命令即可查看系统日志和软件日志。

> 例如：

查看当前的系统日志

```
adb logcat 
```

![PixPin_2024-10-08_20-59-33](./04-logcat%E6%97%A5%E5%BF%97.assets/PixPin_2024-10-08_20-59-33.gif)

---

清除系统日志

```shell
adb logcat -c
```

![PixPin_2024-10-08_21-00-44](./04-logcat%E6%97%A5%E5%BF%97.assets/PixPin_2024-10-08_21-00-44.gif)

可以看见我们的日志从9点17秒开始记录的，之前的日志全部清除了。

----

查看日志缓冲区

```
adb logcat -g
```

可以看见默认设置的是256KB

![image-20241009112329314](./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241009112329314.png)

----

正常情况下，256KB太小了，很快就写满了，我们可以将其修改大一点

```
adb logcat -G 1M  
```

![image-20241009112800268](./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241009112800268.png)

将参数改为G，然后后面跟上大小，即可实现更改，可以看见我们把缓冲区的大小设置成了1MB。

---

注意默认情况下是没有高亮的，我上面有高亮是因为我是用的终端对数字有配色：

![image-20241009113125497](./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241009113125497.png)

如果想要更明显，使用颜色高亮，我们需要带颜色显示内容，使用以下命令来实现：

```
adb logcat -v color
```

![PixPin_2024-10-09_15-35-23](./04-logcat%E6%97%A5%E5%BF%97.assets/PixPin_2024-10-09_15-35-23.gif)

可以看见，日志的信息有了颜色区分，这样更方便信息的浏览，同一颜色观感是很难受的。

---

我们还可以更改日志的输出格式，例如我们可以吧时间信息提前

```
adb logcat -v time
```

这是原来的日志输出格式：

![image-20241009153738643](./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241009153738643.png)

这是更改后的格式：

![image-20241009153858923](./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241009153858923.png)

可以看见我们的进程ID和PID这些信息没有了，只有时间相关的信息被放在最前面，其次是日志的级别，进程和进程的ID、日志的内容等。



## 日志过滤

我们日常分析的额时候不可能查看大量的日志，我们需要定点分析，所以我们要对日志的信息进行过滤，以方便我们分析软件的bug和漏洞。

### tag过滤

首先我们可以通过tag来过滤日志，因为在日志输出中，每条日志都有一个标记tag，用于指示日志的来源。

使用以下命令进行日志过滤：

```
adb logcat -s string
```

string可以是任何字符串，比如QQ、WeChat、bilibili等相关程序名称的信息，利用这些字符串就可以进行过滤。



### PID过滤

还可以使用PID和ID等信息来进行过滤，例如：

```
Linux：
adb logcat | grep 80

Windows：
adb logcat | findstr 80
```

比如上面这条命令，表示我要查看PID进程的值为80的日志信息。



### 自定义过滤

根据日志内的信息进行过滤

```
adb logcat | grep setting
```

过滤信息如图：

![image-20241009155940777](./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241009155940777.png)



## 在AndroidStudio中使用logcat

在Android Studio中，我们可以通过可视化的界面来查看系统的日志，如图：

![PixPin_2024-10-09_16-10-51](./04-logcat%E6%97%A5%E5%BF%97.assets/PixPin_2024-10-09_16-10-51.gif)

我们可以在AndroidStudio中的左下角，点击小猫咪，这个小猫咪就是logcat，然后我们可以选择对应的设备，在右边输入要查找的日志信息、进程ID、PID、tag等，可以快速的查找日志，并且简洁美观，很方便我们进行日志分析。



### 过滤Running Processes

如果我们要过滤当前正在运行的进程，怎么办呢？只需要在搜索栏目里面搜索package:mine即可。

如图：

![image-20241009161901645](./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241009161901645.png)

#### 过滤Debug

只需要搜索level:debug即可

![image-20241009162034237](./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241009162034237.png)

#### 过滤错误

只需要搜索level:error即可

![image-20241009162442939](./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241009162442939.png)

不同的等级过滤出来的信息是不同的，下级是无法查看到上级的信息的，等级规则如下：

1. **V** – Verbose（详细）
2. **D** – Debug（调试）
3. **I** – Info（信息）
4. **W** – Warn（警告）
5. **E** – Error（错误）
6. **F** – Fatal（致命）
7. **S** – Silent（静默）

从上而下，上面会看到更多的信息，下面看到的信息更少，更直接，很多时候我们看到不是详细的信息，更多的是调试、警告、错误、致命等信息。S级别是看不到任何日志的，因为屏蔽了所有的日志。

----

我们还可以通过日志里面信息文本来进行过滤：

![image-20241009163028372](./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241009163028372.png)

#### 多重过滤

我们可以通过过滤信息的组合实现更精细的过滤，找到我们想要的答案，例如

![image-20241009163835483](./04-logcat%E6%97%A5%E5%BF%97.assets/image-20241009163835483.png)

类似的用法，大家可以只有探索，或者翻阅官方文档！



