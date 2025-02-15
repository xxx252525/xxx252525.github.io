---
icon: /assets/icon/android.svg
category:
  - Android逆向
contributors: true
lastUpdated: true
pageview: true
isOriginal: true
---


# 08-Android入门开发

## 环境搭建与配置

### 安装Java

我们可以使用Java17或者Java21，推荐使用Java17。

下载地址：

[点击下载：Java SE 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

[点击下载：Java SE 21](https://www.oracle.com/cn/java/technologies/downloads/#jdk21-windows)

选择一个对应的版本即可：

![image-20241025163217689](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025163217689.png)

下载好之后双击无脑安装在默认位置即可，默认位置如下：C:\Program Files\Java

![image-20241025163712026](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025163712026.png)

然后配置系统环境变量，(点击Windows下面的搜索-->高级设置-->点击环境变量-->)

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025162454356.png" alt="image-20241025162454356" style="zoom: 80%;" />

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025162528468.png" alt="image-20241025162528468" style="zoom:80%;" />

然后在高级系统设置里面添加环境变量：![image-20241025163810060](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025163810060.png)



### 安装Android Studio 2024

#### Windows安装

前往官网下载Android，地址如下：[下载 Android Studio 和应用工具 - Android 开发者  | Android Developers](https://developer.android.com/studio?hl=zh-cn)

勾选之后直接下载：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025152136998.png" alt="image-20241025152136998" style="zoom: 50%;" />

下载好之后双击安装即可，如果是第一次安装，直接标准默认安装即可，软件安装很容易，这里主要讲解配置，软件安装很简单，选择一个自己想存放的位置安装即可。

#### Linux安装

官网下载压缩包：[下载 Android Studio 和应用工具 - Android 开发者  | Android Developers](https://developer.android.com/studio?hl=zh-cn)

Ubuntu 64位：安装32库

```shell
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386
```

Fedora 64位：安装

```shell
sudo yum install zlib.i686 ncurses-libs.i686 bzip2-libs.i686
```

将下载好的压缩包解压到指定目录即可，然后运行.sh的文件。





### Android代理配置（关键）

注意我们需要科学上网，请开启VPN或者系统代理使用国际网络：

我们安装Android之后，创建项目之后，进入设置输入proxy进行搜索，勾选：

![image-20241025161749168](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025161749168.png)

当你的电脑开启了VPN系统代理的时候，AndroidStudio就可以访问到谷歌的官网。



### SDK配置

我们需要自定义SDKJ存放目录的时候在进行配置，如下：

![image-20241025161919339](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025161919339.png)

同时我们还需要下载一些SDK依赖和工具，勾选以下内容：

![image-20241025162032095](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025162032095.png)

![image-20241025162056726](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025162056726.png)





### Gradle配置（核心）

这是核心，即使前面的SDK没有配置也不需要慌张，影响你开发体验的是Gradle的配置。

我们需要到官网去下载Gradle文件，官网：[https://gradle.org/releases/](https://gradle.org/releases/)

推荐下载该版本：

![image-20241025162312140](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025162312140.png)

下载好之后将其解压到自己设置好的目录下面：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025162401210.png" alt="image-20241025162401210" style="zoom:80%;" />

然后配置系统环境变量，(点击Windows下面的搜索-->高级设置-->点击环境变量-->)

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025162454356.png" alt="image-20241025162454356" style="zoom: 80%;" />

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025162528468.png" alt="image-20241025162528468" style="zoom:80%;" />

如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025162621068.png" alt="image-20241025162621068" style="zoom:80%;" />

然后创建一个目录用于存放maven和gradle下载的文件等：

![image-20241025162810443](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025162810443.png)

创建环境变量：

![image-20241025162916986](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025162916986.png)

去AndroidStudio中配置gradle的夏至位置：

![image-20241025163035541](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025163035541.png)

**新建项目之后才会**下载gradle和maven、cache等很多文件，会下载很久，从官网上面，如果觉得很慢可以选择换源，我这里不换源的原因是官方源很完整，使用国际网代理的情况下，可能要30-60分钟。

**注意：陪清理电脑的垃圾和缓存的时候不要清理AndroidStudio的缓存，这是很重要的Gradle依赖文件，一旦清理，那么就需要重新下载，影响开发。**

配置文件加速gradle：

![image-20241025165204865](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025165204865.png)



## 新建项目

我们可以创建一个新的项目，创建项目之后才会下载1Gb多的文件，需要等待一段时间。

![image-20241025164224592](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025164224592.png)

我们选择第二个效果如下：

![image-20241025164430167](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025164430167.png)

第一个效果如下：

![image-20241025164516849](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025164516849.png)



### 项目文件介绍

项目目录可以和Android目录相互切换，并且可以奇幻其他形式的目录，如图：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025200955438.png" alt="image-20241025200955438" style="zoom:80%;" />

我们这里只讲项目的目录结构：

app目录存放这app本省的项目源代码，其中包过build目录、src目录和其他的gradle文件，我们对比下不同显示模式的目录：

Android项目目录：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241025201249666.png" alt="image-20241025201249666" style="zoom:80%;" />

project项目目录：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028160641307.png" alt="image-20241028160641307" style="zoom:80%;" />

---

|      | 目录 & 资源类型                                              |
| :--: | ------------------------------------------------------------ |
|  1   | **anim/**定义属性动画的 XML 文件。 它们保存在 res/anim/ 文件夹中，可以从 **R.anim** 类中访问。 |
|  2   | **color/**定义颜色状态列表的 XML 文件。 它们保存在 res/color/ 中并从 **R.color** 类中访问。 |
|  3   | **drawable/**图像文件，如 .png、.jpg、.gif 或 XML 文件，它们被编译成位图、状态列表、形状、可绘制动画。 它们保存在 res/drawable/ 并从 **R.drawable** 类访问。 |
|  4   | **layout/**定义用户界面布局的 XML 文件。 它们保存在 res/layout/ 并从 **R.layout** 类中访问。 |
|  5   | **menu/**定义应用程序菜单的 XML 文件，例如选项菜单、上下文菜单或子菜单。 它们保存在 res/menu/ 并从 **R.menu** 类访问。 |
|  6   | **raw/**以原始形式保存的任意文件。 您需要使用资源 ID（即 *R.raw.filename*）调用 *Resources.openRawResource()* 来打开此类原始文件。 |
|  7   | **values/**包含简单值的 XML 文件，例如字符串、整数和颜色。 例如，以下是您可以在此目录中创建的资源的一些文件名约定 −arrays.xml 用于资源数组，并从 **R.array** 类访问。integers.xml 用于资源整数，并从 **R.integer** 类访问。bools.xml 用于资源布尔值，可从 **R.bool** 类访问。colors.xml 用于颜色值，可从 **R.color** 类访问。dimens.xml 用于尺寸值，并从 **R.dimen** 类访问。strings.xml 用于字符串值，并从 **R.string** 类访问。styles.xml 用于样式，并从 **R.style** 类访问。 |
|  8   | **xml/**可以通过调用 *Resources.getXML()* 在运行时读取的任意 XML 文件。 您可以在此处保存将在运行时使用的各种配置文件。 |



### 日志操作

我们每次进行操作的时候，软件都会金路其对应的日志信息，这是开发中很重要的一环，用户检查软件Bug和软件漏洞，是非常重要的一环，安全人员也会分析日志信息来找到是否有软件进行违规操作。

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);

        Log.v("MainActivity", "onCreate");
        Log.d("MainActivity", "onCreate");
        Log.i("MainActivity", "onCreate");
        Log.w("MainActivity", "onCreate");
        Log.e("MainActivity", "onCreate");
    }

}

```

- `Log.v`：用于记录“verbose”（冗长）级别的日志。
- `Log.d`：用于记录“debug”（调试）级别的日志。
- `Log.i`：用于记录“info”（信息）级别的日志。
- `Log.w`：用于记录“warning”（警告）级别的日志。
- `Log.e`：用于记录“error”（错误）级别的日志。



## 基础布局

### LinearLayout

我们的前端渲染文件是XML，XML不仅用于渲染前端文件，还用于数据传输，我们的布局就是在XML文件中进行编写的。布局文件一般存放在res目录下面的layout目录。

LinearLayout主要用于线性布局，如下：

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    android:orientation="vertical">
	<LinearLayout
        android:orientation="horizontal">
    	<LinearLayout>
            
        </LinearLayout>
    </LinearLayout>
</LinearLayout>
```

XML的语法如上，有线会有一个和HTML一样的文件配置信息，第一行表明的就是使用的XML版本和使用的字符格式。下面的内容就是线性布局的内容，使用`<LinearLayout>    </LinearLayout>`进行包裹。

**注意我们的属性不是写在两个大括号之间的，错误写法如下：**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout>
    android:orientation="vertical"
	<LinearLayout>
    	 android:orientation="horizontal"
    </LinearLayout>
</LinearLayout>
```

上面有三层线性布局，层层递进，而线性布局的常见属性如下：

```xml
android:layout_weight			--设置权重
android:orientation				--设置布局的方向
android:gravity					--设置重心位置
```

我们的`layout_weight`权重的设置就是数字，数值越大，权重越高，一般为0、1、2。

`layout_orientation`用来设置布局方向，比如纵向布局`vertical`，横向布局`horizontal`，当我们传入不同的参数的时候，会进行不同的布局渲染。

`layout_gravity`用于设置控件的位置，比如顶部、居中等，设置视图内部的内容对齐方式。关系图如图：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028101027284.png" alt="image-20241028101027284" style="zoom:80%;" />

例如：

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    android:orientation="vertical"
    android:orientation="horizontal"
    android:layout_weight="1"
    android:gravity="top"
    android:gravity="bottom"
    android:gravity="center"
    android:gravity="bottom|center"
    android:gravity="bottom|center_vertical"
    android:gravity="bottom|left"          
    >
	
</LinearLayout>
```

从上往下依次的意思为：纵向布局、横向布局、权重为1、控件位于顶部、位于底部、控件居中、控件底部居中、底部居中且纵向布局、底部左对齐。



### 通用属性

通用属性主要有以下几个：`layout_width`布局宽度、`layout_height`布局高度、`background`背景、`margin`外部对齐、`padding`内部对齐、`id`、`layout_gravity`。

**注意：layout_gravity 与 gravity 是不同的属性。gravity 属性通常用于设置视图内部的内容对齐方式，而 layout_gravity指定视图（View）或布局（Layout）相对于其父布局的对齐方式。**

```xml
<TextView
    android:id="@+id/text_02"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom|center"
    android:gravity="center"
    android:background="black"
    android:text="@string/CopyrightInformation"
    tools:ignore="MissingConstraints"
     />
```

id后面的值必须是`@+id/id`名字的格式。

layout_width的值有三种类型，分别是match_parent（与外部元素对齐）、wrap_content（以内部元素对齐）、数值（px、dp、sp）。

layout_height的值有三种类型，分别是match_parent（与外部元素对齐）、wrap_content（以内部元素对齐）、数值（px、dp、sp），通过与layout_width的配合实现固定大小的视图区块，数值方式设置的时候推荐使用dp。

background的值可以是英文的颜色、可以是颜色编码格式一般是#FFFFFF之类的，还有一种方式，使用定义好的颜色文件来进行引用值，一般就是`@color/被定义的颜色字符串`，什么是被定义的颜色字符串，例如：

![image-20241028103924489](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028103924489.png)

margin和padding的值都是一样的，使用数值的方式来控制，margin和padding是控制四周的边距，还有固定的属性控制上下左右、开始结束的边距，比如android:layout_marginEnd指的就是结束的边距，android:layout_marginTop、android:layout_paddingEnd等。

在使用内外边距的时候，我们可以像定义颜色一样提前定义号样式，然后直接应用，我们可以通过Style属性来调用，例如：

![image-20241028104348553](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028104348553.png)

我们被定义的样式内容如下：

![image-20241028104511878](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028104511878.png)

> 像素拓展：
>
> px、dp、sp为手机上像素显示的三大显示单位。
>
> px常见的像素单位。
>
> dp，dp指的是dpi的像素，每个手机有不同的分辨率，也就有不同的dpi，dp的值就是控制信息在不同dpi的手机上显示一样大小的信息。
>
> sp，sp和dp有共同之处，唯一不同的就是sp支持系统控制，通过调节系统字体的大小进行变化，dp和px就不支持，我们在写代码的时候，一般文字使用sp，布局使用dp。

![image-20241028104913042](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028104913042.png)



### RelativeLayout相对布局

相对布局是以父容器作为参照物才进行布局的，其中标签的类型也转换成了RelativeLayout，注意和LinearLayout进行区分。

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    >


</RelativeLayout>
```

#### alignParent

alignParent对齐方式，这是一种和父控件进行对齐的一种方式

```xml
android:layout_alignParentTop
android:layout_alignParentBottom
android:layout_alignParentLeft
android:layout_alignParentRight
```

例如：

![image-20241028144352221](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028144352221.png)

如果属性的值为false，他还是会进行显示，只不过会堆叠到左上角而已。注意：左对齐和顶部对齐的显示效果是一样的如图：

![image-20241028144526552](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028144526552.png)

#### center

如何使用居中布局呢？我们可以看到上面的布局并无完善，我们想要使用居中布局，就必须要使用layout_center属性，其中包括了中心属性`android:layout_centerInParent`，水平中心布局属性``android:layout_centerHorizontal`，垂直中心布局属性`android:layout_centerVertical`，即可实现中心的布局。

```xml
android:layout_centerInParent
android:layout_centerHorizonta
android:layout_centerVertical
```

如下图：

![image-20241028150642667](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028150642667.png)

同理，如果值为false，视图会显示在左上角。

#### align

如果同一个视图内，有多个视图，视图与视图之间要进行一个参照物对齐，应该怎么办呢？Android给出的解决方案就是使用align兄弟布局来进行视图的布局。

```
android:layout_alignTop
android:layout_alignBottom
android:layout_alignLeft
android:layout_alignRight
```

使用align来实现内部视图的对齐布局需要借用到id，一般我们写代码的时候习惯性的要加上id，方便调用与识别。如图：

![image-20241028151754212](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028151754212.png)

![image-20241028151827757](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028151827757.png)

![image-20241028151937814](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028151937814.png)

#### above

如果想要这个元素在同层元素的上方呢？如何去写呢？使用above就可以实现：

```
android:layout_above
```

我们只需要在属性的值内天上对应的参照物为值即可：![image-20241028152345795](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028152345795.png)

#### below

**注意：**如果在视图中添加了以下内容：`android:layout_below=" "`，那么属性会告诉Android系统，当前的视图应该被放置在ID为`view1`的视图的下方。这个View1就是layout_below的值。`android:layout_below`：这是一个布局参数，用于指定当前视图应该放置在另一个视图的下方。

```
android:layout_below
```

我们只需要在属性的值内天上对应的参照物为值即可：

![image-20241028152514913](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028152514913.png)

![image-20241028145132356](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028145132356.png)



### FrameLayout帧布局

帧布局最明显的特征就是叠加显示，新的视图内容在旧的视图内容上面进行渲染，从而覆盖掉原来的内容，可以用来设置蚊子叠加效果，帧布局的语法如下：

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    >

</FrameLayout>
```

![image-20241028155950316](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028155950316.png)



### GridLayout网格布局

网格布局就是同时进行行和列的布局，并且支持多行多列。语法如下：

```xml
<?xml version="1.0" encoding="utf-8"?>
<GridLayout>

</GridLayout>
```

我这里编写了四个色块，但是是一排的，如何变成一个田字形呢？

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241106194648830.png" alt="image-20241106194648830" style="zoom:80%;" />

只需要再次编写一个色块就会自动在下一排出现了，为什么会这样呢？我们在`GridLayout`这个里面编写了两个属性分别是`android:columnCount`和`android:rowCount`，这是什么意思呢？第一个属性的意思是纵向排列有多少列，二个个属性指的是横向排列有多少列，我们这里定义的是4，所以只有当第五个色块进行排列的时候才会换到下一行，我们只需要修改行和列的值就能实现换行了，如图：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241106195132271.png" alt="image-20241106195132271" style="zoom: 67%;" />

为什么右边会出现那么大的空白呢？因为我们定义的色块大小是100dp，而父容器的大小是match_parent。所以我们无法填充完父容器，导致右边出现空白。如何解决呢？我们可以使用权重的方式来设置。但是我们使用的属性有所不同，我们使用的是`layout_columnWeight`和`layout_rowWeight`来实现权重的方式，如图：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241106210126010.png" alt="image-20241106210126010" style="zoom: 67%;" />

如果使用的全部是`layout_rowWeight`那么就便宜到窗口外面去了。



### ConstrintLayout约束布局

约束布局是什么？如果我们在开发的过程中，那个视图信息，我们不想针对于线性布局，因为线性布局太死板了，很不自由，而相对布局和帧布局都是用来设置针对性的元素视图的，这个时候我们想要灵活多变，就必须使用约束布局。

约束布局的标签语法如下：

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout >

</androidx.constraintlayout.widget.ConstraintLayout>
```

常用的线性布局的元素如下：

```
app:layout_constraintBottom_toBottomOf			--底部边缘与父布局边缘对齐
app:layout_constraintEnd_toEndOf				--视图的右边与父布局右边对齐
app:layout_constraintVertical_bias				--垂直偏移量
app:layout_constraintHorizontal_bias			--水平偏移量
app:layout_constraintStart_toStartOf			--视图的左边与父布局左边对齐
app:layout_constraintTop_toTopOf				--顶部边缘与父布局顶部对齐
```

显示效果如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241106165936971.png" alt="image-20241106165936971" style="zoom: 67%;" />

使用约束布局我们还可以拖动元素来设置位置，自由程度很高。



### 自定义布局

我们可以自己来编写布局，例如我这里创建了一个title布局：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241108211141270.png" alt="image-20241108211141270" style="zoom:55%;" />

然后我们在layout主文件中引入了我们自己写的title，我们使用`include`标签来实现导入自己编写的xml文件。

**`include`标签就是用来导入文件配置的，自己编写的布局可以进行导入。**

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241108211404313.png" alt="image-20241108211404313" style="zoom:57%;" />



## 基础控件

### 文本显示TextView

在Android中如何显示文本呢？需要用到文本控件TextView，用于显示文本视图信息。语法如下：

```xml
<TextView
          
></TextView>
```

文本显示的属性如下：

```
android:width			--文本视图的宽度
android:height			--文本视图的高度
android:text			--文本的内容
android:textColor		--文本的颜色
android:textSize		--文本的大小
android:layout_margin	--文本视图的外边距
android:padding			--文本视图的内边距
android:gravity			--文本的对齐方式
android:textStyle		--文本的样式
android:draeable		--文本前面添加图片
android:lines			--文本视图行高
android:maxlines		--显示行数
android:ellipsize		--省略文本
```

以上是最基本的用法，揩油一些属性有一些拓展，后面进行演示。一些基础的展示：

![image-20241028175027648](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028175027648.png)

稳重的@string的用法如下，我们在res目录中有一个value目录，里面存放着一些参数值xml文件，可以用来传参调用：

![image-20241028175622618](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028175622618.png)

当文本信息框内容显示不完全，并且不在显示需要省略的时候，我们只需要使用`android:ellipsize="end"`进行结束即可，效果如下：

![image-20241028175915048](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028175915048.png)

如果我们不想显示那么多行数信息，我们可以使用`android:maxLines`来显示最大行数，但是和lines不能同事使用，否则就会以lines为主，lines的优先级比maxlines更高。例如：

![image-20241028180512167](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028180512167.png)

我们还可以设置文字的行间距，文字有行高、字间距，有如下属性可以设置

```
android:lineSpacingExtra			--文本行额外间距
android:letterSpacing				--文字与文字的间距
android:lineSpacingMultiplier		--文本行倍数间距
```

如图：

![image-20241028182034071](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241028182034071.png)



### 按钮Button

按钮除了本身的外观，最主要的还是点击事件，每一次点击会触发什么操作。一般点击事件有三种，分别为`onClick`、`setOnClickListener`、使用activity来实现OnClickListener接口。

语法如下：

```xml
<Button
  
></Button>
```

首先编写XML文件：

![image-20241029101015380](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029101015380.png)

然后我们需要去编写Java或者Kotin代码来实现逻辑和交互，以及信息的响应，这里我以Java代码为例：

```java
public class MainActivity extends AppCompatActivity {

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);
        //创建文本信息
        TextView textView01 = findViewById(R.id.textView01);
        textView01.setText("Copyright © 天阁创客official");

        //创建按钮
        Button button02 = findViewById(R.id.button02);
        Button button01 = findViewById(R.id.button01);
        Button button03 = findViewById(R.id.button03);

        //02按钮setOnClickListener响应事件
        button02.setOnClickListener(new android.view.View.OnClickListener() {
            @Override
            public void onClick(android.view.View view) {
                Toast.makeText(MainActivity.this, "按钮02被点击了", Toast.LENGTH_SHORT).show();
            }
        });
    }

    //01按钮onClick响应事件
    public void MyClickHandler(android.view.View view) {
        Toast.makeText(MainActivity.this, "按钮01被点击了", Toast.LENGTH_SHORT).show();
    }
    
    public void onClick(View view) {
        if (view.getId() == R.id.button03) {
            Toast.makeText(MainActivity.this, "按钮03被点击了", Toast.LENGTH_SHORT).show();
        } else if (view.getId() == R.id.button02) {
            Toast.makeText(MainActivity.this, "按钮02被点击了", Toast.LENGTH_SHORT).show();
        } else if (view.getId() == R.id.button01) {
            Toast.makeText(MainActivity.this, "按钮01被点击了", Toast.LENGTH_SHORT).show();
        }
    }

}
```

根据文章的注释位置来逐一分析。

首先01注释部分：我们在XML文件中定义了一个onClick属性，并且进行了赋值，如图：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029102911479.png" alt="image-20241029102911479" style="zoom:80%;" />

然后我们在Java主程序中，编写了以下代码：

```java
//按钮onClick响应事件
public void MyClickHandler(android.view.View view) {
    Toast.makeText(MainActivity.this, "按钮01被点击了", Toast.LENGTH_SHORT).show();
}
```

创建了和OnClick属性的值一模一样的函数，并且调用Toast方法来打印被点击后返回的信息。最后点击的效果如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029103538449.png" alt="image-20241029103538449" style="zoom: 60%;" />

然后我们说第二个注释，我们首先是创建了一个Button按钮的变量，并且通过findViewById去获取XML文件中的id，然后将值传递进来，然后再创建了一个回调函数用来打印点击后的返回信息，代码如下：

```java
//创建按钮
Button button02 = findViewById(R.id.button02);

//按钮setOnClickListener响应事件
button02.setOnClickListener(new android.view.View.OnClickListener() {
    @Override
    public void onClick(android.view.View view) {
        Toast.makeText(MainActivity.this, "按钮02被点击了", Toast.LENGTH_SHORT).show();
    }
});
```

我们通过这样的方式，就不在需要去XML文件中去定义onClick，只需要有一个id可以传值给Java这边的函数即可，运行效果如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029103950871.png" alt="image-20241029103950871" style="zoom:60%;" />

然后我们看注释03，这是一个多按钮操作，如果存在多个按钮，编写代码的时候会很麻烦，为了方便我们就可以按照下面的方式来写：

```java
public void onClick(View view) {
    if (view.getId() == R.id.button03) {
        Toast.makeText(MainActivity.this, "按钮03被点击了", Toast.LENGTH_SHORT).show();
    } else if (view.getId() == R.id.button02) {
        Toast.makeText(MainActivity.this, "按钮02被点击了", Toast.LENGTH_SHORT).show();
    } else if (view.getId() == R.id.button01) {
        Toast.makeText(MainActivity.this, "按钮01被点击了", Toast.LENGTH_SHORT).show();
    }
}
```

我们的代码变成了这样，此时我们需要修改XML文件，给每一个按钮都添加上OnClick属性：

![image-20241029105210706](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029105210706.png)

我们就可以实现多个按钮的点击响应事件了。



### 文本编辑EditText

EditText标签呢是用来创建输入框的，我们可以在输入框里面传入内容，常见的页面就是账号登陆。最主要的属性就是`hint`、`textColorHint`、`inputType`，大致的效果如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029105625653.png" alt="image-20241029105625653" style="zoom: 60%;" />

常用的属性如下

```
android:autofillHints				--自动填充
android:hint						--提示文本
android:inputType					--输入类型
android:textColorHint				--提示文本颜色
```

举个栗子：

![image-20241029110742292](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029110742292.png)

当页面渲染之后我们就需要写Java源代码去进行一个逻辑交互，如何去实现一个登陆操作，代码如下：

```java
public class MainActivity extends AppCompatActivity {

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);
        TextView textView01 = findViewById(R.id.textView01);
        textView01.setText("Copyright © 天阁创客official");

        //创建按钮
        Button button01 = findViewById(R.id.button01);
        //设置按钮点击事件
        button01.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //获取输入的用户名和密码
                String username = ((EditText) findViewById(R.id.edittext_01)).getText().toString();
                String password = ((EditText) findViewById(R.id.edittext_02)).getText().toString();
                //记录日志信息
                Log.d("MainActivity", "username: " + username);
                Log.d("MainActivity", "password: " + password);
                if (validateCredentials(username, password)) {
                    Toast.makeText(MainActivity.this, "登陆成功", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(MainActivity.this, "登陆失败", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

    //创建一个判定方法
    private boolean validateCredentials(String username, String password) {
        // 在这里，我们使用硬编码的凭据进行验证
        // 在实际应用中，应该从数据库或其他安全存储中获取并验证凭据
        String correctUsername = "admin";
        String correctPassword = "123456";

        return correctUsername.equals(username) && correctPassword.equals(password);
    }
}
```

我们通过以上代码去获取用户的一个输入，并进行一个对比，烂判断用户的输入是否正确，当我们如果在输入框内输入了，空格，如果没有进行一些设置的话就会报错，如图：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029112217614.png" alt="image-20241029112217614" style="zoom:60%;" />

我们如何去解决呢？我们可以在`String username = ((EditText) findViewById(R.id.edittext_01)).getText().toString();`这行代码的末尾添加一个方法名字叫做`trim()`，修改如下：

```Java
//获取输入的用户名和密码
String username = ((EditText) findViewById(R.id.edittext_01)).getText().toString().trim();
String password = ((EditText) findViewById(R.id.edittext_02)).getText().toString().trim();
```

运行结果如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029112701943.png" alt="image-20241029112701943" style="zoom:60%;" />

在写代码的时候推荐还是把空格过滤给加上，防止被恶意代码注入，这样忽略空格是很危险的。



### 图片显示ImageView

图片控件用于显示篇，对应的XML标签为`ImageView`，语法如下：

```xml
<ImageView
           
           
></ImageView>
```

常用属性如下：

```
android:src				--图片
android:scaleType		--图片类型操作
```

例如：

![image-20241029160905170](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029160905170.png)

通过android:scaleType属性我们可以对图片进行操作，比如拉伸、填充、裁剪等操作。

1. **matrix** - 使用矩阵来绘制图片，需要通过 ImageView 的 `setImageMatrix(Matrix)` 方法来设置。
2. **fitXY** - 对图片进行拉伸，使其完全填充 ImageView，可能导致图片变形。
3. **fitStart** - 保持图片的宽高比，将图片缩放至 ImageView 的宽度或高度（取小的一边），图片位于 ImageView 的起始位置。
4. **fitCenter** - 保持图片的宽高比，将图片缩放至 ImageView 的宽度或高度（取小的一边），图片位于 ImageView 的中心。
5. **fitEnd** - 保持图片的宽高比，将图片缩放至 ImageView 的宽度或高度（取小的一边），图片位于 ImageView 的结束位置。
6. **center** - 不对图片进行缩放，将图片放置在 ImageView 的中心。
7. **centerCrop** - 保持图片的宽高比，对图片进行缩放，使得图片能够完全覆盖 ImageView，可能会裁剪图片的某些部分。
8. **centerInside** - 保持图片的宽高比，将图片缩放至能够完整显示在 ImageView 内，图片可能会留有空白区域。
9. **matrix** - 使用 Matrix 类来缩放图片。



### 单选框RadioButton

单选框再创建的时候必须创建组，一个组内有多个选择的按钮，所以，一般情况下，他的语法是组合使用的，单选框语法如下：

```xml
<RadioGroup

        >
        <RadioButton

        ></RadioButton>

        <RadioButton

        ></RadioButton>

</RadioGroup>
```

我们一般是使用`RadioGroup`标签来创建可选择的组，然后再组内创建多个按钮成员`RadioButton`。举个栗子。

我们通过使用RadioGroup和RadioButton实现了一个单选项目，选择不同的语言：![image-20241029205915258](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029205915258.png)

我们的Javav代码如下：

```java
public class MainActivity extends AppCompatActivity {

    public RadioGroup radiogroup;
    public TextView textView02;

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);
        TextView textView01 = findViewById(R.id.textView01);
        textView01.setText("Copyright © 天阁创客official");

        radiogroup = findViewById(R.id.radiogroup);
        textView02 = findViewById(R.id.textView02);

        //设置单选按钮点击事件
        radiogroup.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                if (checkedId == R.id.radio_java) {
                    Log.d("TAG", "Java");
                } else if (checkedId == R.id.radio_python) {
                    Log.d("TAG", "Python");
                } else if (checkedId == R.id.radio_c) {
                    Log.d("TAG", "C");
                }
            }
        });

}
```

我们通过Log函数来记录我们的操作日志，来表明我们是否就选择成功，我们的每一次点击都会被记录：

![image-20241029210143863](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029210143863.png)

可以看见我们的代码成功执行，并且在选择的过程中没有出现错误。



### 多选框CheckBox

常见的还有多选选项，我们使用CheckBox来创建多选框。使用CheckBox标签即可创建多选选项，语法如下：

```xml
<CheckBox
          
></CheckBox>
```

如何创建多个选项呢？代码如下：

![image-20241029214302399](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029214302399.png)

Java交互代码如下：

```java
public class MainActivity extends AppCompatActivity {

    public CheckBox checkbox01, checkbox02, checkbox03;

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);
        TextView textView01 = findViewById(R.id.textView01);
        textView01.setText("Copyright © 天阁创客official");
        
        //设置多选按钮点击事件
        checkbox01 = findViewById(R.id.checkbox01);
        checkbox02 = findViewById(R.id.checkbox02);
        checkbox03 = findViewById(R.id.checkbox03);
        // 设置点击事件监听器
        setCheckboxOnClickListener(checkbox01);
        setCheckboxOnClickListener(checkbox02);
        setCheckboxOnClickListener(checkbox03);

    }

    private void setCheckboxOnClickListener(CheckBox checkbox) {
        checkbox.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // 当复选框被点击时，显示Toast并记录日志
                if (checkbox.isChecked()) {
                    Toast.makeText(MainActivity.this, "选择成功", Toast.LENGTH_SHORT).show();
                    Log.i("test", "选择成功");
                } else {
                    Toast.makeText(MainActivity.this, "取消选择", Toast.LENGTH_SHORT).show();
                    Log.i("test", "取消选择");
                }
            }
        });
    }

    public void onClick(View view) {
        if (view.getId() == R.id.button01) {
            Toast.makeText(MainActivity.this, "请选择你喜欢的操作系统", Toast.LENGTH_SHORT).show();
            Log.i("test", "请选择你喜欢的操作系统");
        } else if (view.getId() == R.id.button02) {
            Toast.makeText(MainActivity.this, "提交", Toast.LENGTH_SHORT).show();
            Log.i("test", "提交");
        }
    }

}
```

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029213635284.png" alt="image-20241029213635284" style="zoom:60%;" />

对应的日志信息如下：

![image-20241029213707187](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241029213707187.png)



### 信息返回Toast

前面我们其实已经用到过很多次Toast了，Toast就是用来打印信息的，当我们进入软件的时候，点击按钮的时候，有一个交互反馈提示人们相关的信息，这就是通过Toast来实现的。这是一个Java的方法，不是XML标签。

例如以下代码：

```java
public void onClick(View view) {
    if (view.getId() == R.id.button01) {
        Toast.makeText(MainActivity.this, "请选择你喜欢的操作系统", Toast.LENGTH_SHORT).show();
        Log.i("test", "请选择你喜欢的操作系统");
    } else if (view.getId() == R.id.button02) {
        Toast.makeText(MainActivity.this, "提交", Toast.LENGTH_SHORT).show();
        Log.i("test", "提交");
    }
}
```

我们在XML中定义了onClick之后，我们来实现多按钮点击的时候我们使用了函数`Toast.makeText`打印文本信息，方法里面的参数分别是调用的Java主运行文件、返回的信息、显示时间，`LENGTH_SHOR`T显示的时间较短，`LENGTH_LONG`显示的时间较长，然后通过`show()`方法来显示返回得信息。



### ProgressBar进度条

进度条一般有很多种样式，我们可以通过`style`属性来进行设置。

设置样式的属性如下：

```
?android:attr/progressBarStyleHorizontal 		-- 水平进度条样式。
?android:attr/progressBarStyleLarge 			-- 大号圆形进度条样式。
?android:attr/progressBarStyleSmall 			-- 小号圆形进度条样式。
?android:attr/progressBarStyle 					-- 默认的进度条样式。
```

其他的设置属性：

```
indeterminate 				-- 设置进度条是否是确定的还是不确定的。
progressDrawable 			-- 设置进度条的背景图片。
indeterminateDrawable 		-- 设置不确定进度条的动画图片。
max 						-- 设置进度条的最大值。
progress 					-- 设置进度条的当前进度。
secondaryProgress 			-- 设置进度条的次要进度，通常用于显示缓冲进度。
```

如图我们创建了一个进度条：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241106213901873.png" alt="image-20241106213901873" style="zoom:80%;" />

然后我们需要编写Java代码来实现逻辑交互，我们需要使用到函数`getVisibility()`和`setVisibility`来获取进度条信息和设置进度条：

```java
public void onClick01(View view) {
    if (view.getId() == R.id.button01) {
        if (progressBar.getVisibility() == View.GONE) {
            progressBar.setVisibility(View.VISIBLE);
            Toast.makeText(this, "登陆中...", Toast.LENGTH_SHORT).show();
        }
    } else if (view.getId() == R.id.button02) {
        if (progressBar.getVisibility() == View.VISIBLE) {
            progressBar.setVisibility(View.GONE);
            Toast.makeText(this, "取消登陆", Toast.LENGTH_SHORT).show();
        }
    }
}
```

运行效果如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241106214139391.png" alt="image-20241106214139391" style="zoom:67%;" />

如何修改进度条的样式？添加以下代码：

```
style="?android:attr/progressBarStyleHorizontal"
android:max="100"
android:secondaryProgress="30"
android:progress="60"
```

Java逻辑代码如下：

```java
public void onClick01(View view) {
    if (view.getId() == R.id.button01) {
        // 检查进度条是否已经达到最大值
        if (progressBar.getProgress() < progressBar.getMax()) {
            // 如果进度条不可见，则设置为可见并显示提示
            if (progressBar.getVisibility() == View.GONE) {
                progressBar.setVisibility(View.VISIBLE);
                Toast.makeText(this, "登陆中...", Toast.LENGTH_SHORT).show();
            }

            // 创建一个Handler来定时更新进度条
            final Handler handler = new Handler();
            Runnable runnable = new Runnable() {
                public void run() {
                    int currentProgress = progressBar.getProgress();
                    // 每次增加10%的进度
                    int increment = progressBar.getMax() / 10;
                    int newProgress = currentProgress + increment;
                    // 确保进度不会超过最大值
                    if (newProgress <= progressBar.getMax()) {
                        progressBar.setProgress(newProgress);
                        // 再次postDelayed(this, 1000)来形成循环
                        handler.postDelayed(this, 1000);
                    } else {
                        // 如果进度达到最大值，可以在这里处理登录成功后的操作
                        progressBar.setVisibility(View.GONE);
                        Toast.makeText(getApplicationContext(), "登录成功", Toast.LENGTH_SHORT).show();
                    }
                }
            };
            // 启动定时任务
            handler.postDelayed(runnable, 1000);
        }
    } else if (view.getId() == R.id.button02) {
        // 取消登录，移除所有的回调和消息
        handler.removeCallbacksAndMessages(null);
        if (progressBar.getVisibility() == View.VISIBLE) {
            progressBar.setVisibility(View.GONE);
            Toast.makeText(this, "取消登陆", Toast.LENGTH_SHORT).show();
        }
    }
}
```

在活动或类的顶部声明`Handler`变量，以便在`onClick01`方法外部使用：

```java
private Handler handler = new Handler();
```

我们创建了一个定时任务接口`Runnable runnable = new Runnable() {...}`，这是一个匿名内部接口；然后使用`handler.postDelayed(runnable, 1000)`在指定的延迟时间后执行；`progressBar.getProgress()`这个方法获取进度条当前的进度值；`progressBar.getMax()`获取进度条的最大值，即进度条的总进度；最后使用`handler.removeCallbacksAndMessages()`方法移除所有由`Handler`安排的回调和消息

运行效果如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241106215417243.png" alt="image-20241106215417243" style="zoom:80%;" />

常见的就是预加载技术，一般出现在游戏资源下载中，比如下载到30%以内，就显示30%，加载到50%~87%就显示87%。



### 对话框AlertDialog

`AlertDialog`是Java中的函数方法，并不是XML中的标签，这一点要记住，我们一般是进行某一个操作时候，才会出现一个对话框，也就是事件响应之后的对话，我们我们编写的是Java主逻辑交互。

编写代码如下：

```java
public class MainActivity extends AppCompatActivity {

    public CheckBox checkbox01, checkbox02, checkbox03;

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);
        TextView textView01 = findViewById(R.id.textView01);
        textView01.setText("Copyright © 天阁创客official");

    }

    public void showNormalDialog(View view) {
        //创建对话框
        AlertDialog alertDialog = new AlertDialog.Builder(MainActivity.this
                ).setTitle("温醒提示")
                .setMessage("是否需要退出登录")
                .setNegativeButton("取消", null)
                .setPositiveButton("确定", null)
                .create();

        //显示对话框
        alertDialog.show();
        Log.i("TAG", "shouNormalDialog: ");
    }

}
```

而我们在XML中只定义了按钮，当按钮被点击的时候会做出一个动作，弹出对话提示：

![image-20241030101418579](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241030101418579.png)

对话提示如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241030101403912.png" alt="image-20241030101403912" style="zoom:60%;" />

然后我们就可以进行一些其他逻辑的编写，比如账号退出啊，页面跳转啊之类的，我们可以创建一个监听器，返回一个内容。修改以下代码即可：

```java
public void showNormalDialog(View view) {
    //创建对话框
    AlertDialog alertDialog = new AlertDialog.Builder(MainActivity.this
            ).setTitle("温醒提示")
            .setMessage("是否需要退出登录")
            .setNegativeButton("取消", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialogInterface, int i) {
                    Toast.makeText(MainActivity.this, "取消退出登录", Toast.LENGTH_SHORT).show();
                }
            })
            .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialogInterface, int i) {
                    Toast.makeText(MainActivity.this, "退出登录成功", Toast.LENGTH_SHORT).show();
                }
            })
            .create();

    //显示对话框
    alertDialog.show();
    Log.i("TAG", "shouNormalDialog: ");
}
```

我们通过使用`setNegativeButton`和`setPositiveButton`方法来实现确定和退出的操作，这时候点击确定或者取消，就会返回一个信息提示了：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241030102008308.png" alt="image-20241030102008308" style="zoom:60%;" />

#### 单选对话框

除了常见的布尔值对话框，还有单元对话框和多选对话框，我们这里讲解下单选对话框，我们依然是在Java中写交互逻辑，我们修改以下XML的onClick的值：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241030104619426.png" alt="image-20241030104619426"  />

Java代码如下：

```java
public class MainActivity extends AppCompatActivity {

    public String Arr[] = new String[]{"小号", "中号", "大号", "巨无霸"};

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);
        TextView textView01 = findViewById(R.id.textView01);
        textView01.setText("Copyright © 天阁创客official");
    }

    public void SingleChoiceDialog(View view) {
        new AlertDialog.Builder(MainActivity.this)
                .setTitle("选择字体大小")
                .setSingleChoiceItems(Arr, 0, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        Toast.makeText(MainActivity.this, "你选择了" + Arr[i] + "号字体", Toast.LENGTH_SHORT).show();
                    }
                }).create().show();
    }
}
```

我们把原来的`setNegativeButton`和`setPositiveButton`换成了`setSingleChoiceItems`方法，该方法里面需要传递三个参数，第一个就是选项的内容，一般是一个数组，我们在最前面定了了一个数组，为了我们方便打印字体，第二个参数就是字体的大小，第三个参数是进行一些事件的操作，我们运行后，点击的显示效果如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241030104011374.png" alt="image-20241030104011374" style="zoom:60%;" />

我们如何实现真实的字体大小修改呢？我们需要去定义字体的大小，使用数组的方式定义字体的大小：

```java
//创建字体大小
public String Arr[] = new String[]{"小号", "默认", "中号", "大号", "巨无霸"};
public int textSize[] = new int[]{10, 14, 20, 30, 40};
//创建索引
public int index;
public TextView textView01;
```

修改主逻辑代码：

```java
public void SingleChoiceDialog(View view) {
        new AlertDialog.Builder(MainActivity.this)
                .setTitle("选择字体大小")
                .setSingleChoiceItems(Arr, 0, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        index = i;
                        Toast.makeText(MainActivity.this, "你选择了" + Arr[i] + "号字体", Toast.LENGTH_SHORT).show();
                        Log.i("TAG", "你选择了" + Arr[i] + "号字体");
                    }
                })
                .setNegativeButton("取消", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        Toast.makeText(MainActivity.this, "你点击了取消", Toast.LENGTH_SHORT).show();
                        Log.i("TAG", "你点击了取消");
                    }
                })
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        //修改字体的大小操作
                        textView01.setTextSize(textSize[index]);
                        Toast.makeText(MainActivity.this, "成功修改字体大小", Toast.LENGTH_SHORT).show();
                        Log.i("TAG", "字体修改为" + Arr[index] + "字体");
                    }
                })
                .create().show();
    }
```

我们除了创建字体大小的数组之外，还创建了一个获取数组的索引index，通过索引来定位修改字体的大小，代码运行结果如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241030110751719.png" alt="image-20241030110751719" style="zoom: 67%;" />

我们的操作也日志记录如下：

![image-20241030110846636](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241030110846636.png)

#### 多选对话框

哦们实现多选对话框还是在Java逻辑代码中去修改。我们使用到的函数方法为`setMultiChoiceItems`这里面和单选对话框不同的就是第二个参数值是布尔值数组，然后最后一个参数是`DialogInterface.OnMultiChoiceClickListener()`来监听，这是和单选不同的用处，然后其他不同的就是一些逻辑上的变化，具体代码如下：

```java
public class MainActivity extends AppCompatActivity {

    public String Arr[] = new String[]{"E5-2696v4", "AMD8700G", "AMD8600G", "AMD5700X3D", "i9-14980HK"};
    private boolean[] checkArr = new boolean[]{false, false, false, false, false};
    private TextView textView01;

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);
        textView01 = findViewById(R.id.textView01);
        textView01.setText("Copyright © 天阁创客official");

    }

    public void MultiChoiceDialog(View view) {
        new AlertDialog.Builder(MainActivity.this)
                .setTitle("请选择你的CPU")
                .setMultiChoiceItems(Arr, checkArr, new DialogInterface.OnMultiChoiceClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int index, boolean isChecked) {
                        checkArr[index] = isChecked;
                    }
                })
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int which) {
                        StringBuffer sb = new StringBuffer();
                        for (int j = 0; j < checkArr.length; j++) {
                            if (checkArr[j]) {
                                sb.append(Arr[j]).append("+");
                                Log.d("TAG", "onClick: " + Arr[j]);
                            }
                        }
                        if (sb.length() > 0) {
                            sb.deleteCharAt(sb.length() - 1); // 删除最后的加号
                        }
                        Toast.makeText(MainActivity.this, sb.toString(), Toast.LENGTH_SHORT).show();
                        Log.d("TAG", "onClick: " + sb.toString());
                    }
                })
                .setNegativeButton("取消", null)
                .create().show();
    }
}

```

我们的XML代码几乎是没有变化的，只需要修改文本信息就可以了，我们通过多选监听函数来监听数组的索引，然后编写按钮的交互逻辑，创建了一个StringBuffer，`StringBuffer` 是 Java 中的一个可变字符序列。与 `String` 类不同，`StringBuffer` 对象的值可以改变，你可以使用 `StringBuffer` 类提供的各种方法来添加、插入、删除或替换字符序列中的字符。

当用户点击对话框的“确定”按钮时，它会遍历一个布尔数组 `checkArr`，对于每个 `true` 值，它会从另一个数组 `Arr` 中取出相应的元素，并将这些元素连接成一个由加号分隔的字符串。



### 列表视图

#### ListView

列表视图用于创建一个垂直滚动的列表，方便为我们进行信息浏览，而Adapter是一个将数据源和ListView关联的桥梁，负责将数据转换为列表视图。这里我们会使用到新的XML标签，语法如下：

```xml
<ListView>
    
</ListView>
```

然后我们需要单独写一个列表XML文件，在layout名录下创建一个`item_list.xml`文件，我们需要使用RelativeLayout标签来创建内容，语法如下：

```xml
<RelativeLayout>

</RelativeLayout>
```

然后在里面编写内容，首先要创建一张图片，然后创建包含文本信息的RelativeLayout标签内容，内容如下：

![image-20241030170929959](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241030170929959.png)

而我们列表视图最主要的内容和交互还是在Java代码中进行交互，我们任然需要创建三个数组，分别用来存放图片、主题、文本，代码如下：

```java
//列表数据
public String[] Arr = new String[]{"Apache", "ArchLinux", "CentOS", "Docker", "Kubernetes"};
private String[] message = new String[]{
        "Apache HTTP Server是一个自由、开源的网页服务器软件。它被广泛用于提供万维网内容。",
        "Arch Linux是一个面向计算机专家和那些愿意通过自己动手来定制操作系统的用户的Linux发行版。",
        "CentOS是基于Red Hat Enterprise Linux（RHEL）构建的免费、开源操作系统。它旨在与RHEL二进制兼容，提供了稳定、可靠的平台，适合那些需要企业级Linux特性的用户和组织。",
        "Docker是一个开放平台，用于开发、运送和运行应用程序;Docker通过容器化技术简化了应用程序的部署和扩展。",
        "ubernetes（通常称为K8s）是一个开源的容器编排系统，用于自动化计算机容器化应用程序的部署、扩展和管理。"};

private int[] image = {
        R.drawable.apache,
        R.drawable.archlinux,
        R.drawable.centos,
        R.drawable.docker,
        R.drawable.kubernetes
};
```

然后我们需要新建一个子类`MyAdapter`，继承`BaseAdapter`类，在类中我们需要创建四个回调函数，分别为`getCount`、`getItem`、`getItemId`、`getView`，这四个方法是用来干什么呢？首先这个Adapter他是一个用于绑定数据、视图创建、管理数据的一个函数，然后：

```
getCount()			--获取数据的总数
getItem()			--获取指定位置数据的内容信息
getItemId()			--获取数据的id标识符
getView()			--获取指定位置的数据视图
```

显示列表的逻辑代码如下：

```java
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    //列表数据
    public String[] Arr = new String[]{"Apache", "ArchLinux", "CentOS", "Docker", "Kubernetes"};
    private String[] message = new String[]{
            "Apache HTTP Server是一个自由、开源的网页服务器软件。它被广泛用于提供万维网内容。",
            "Arch Linux是一个面向计算机专家和那些愿意通过自己动手来定制操作系统的用户的Linux发行版。",
            "CentOS是基于Red Hat Enterprise Linux（RHEL）构建的免费、开源操作系统。它旨在与RHEL二进制兼容，提供了稳定、可靠的平台，适合那些需要企业级Linux特性的用户和组织。",
            "Docker是一个开放平台，用于开发、运送和运行应用程序;Docker通过容器化技术简化了应用程序的部署和扩展。",
            "ubernetes（通常称为K8s）是一个开源的容器编排系统，用于自动化计算机容器化应用程序的部署、扩展和管理。"};

    private int[] image = {
            R.drawable.apache,
            R.drawable.archlinux,
            R.drawable.centos,
            R.drawable.docker,
            R.drawable.kubernetes
    };

    private TextView textView01;

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //文字
        setContentView(R.layout.main_activity);
        textView01 = findViewById(R.id.textView01);
        textView01.setText("Copyright © 天阁创客official");

        //列表
        ListView listView01 = findViewById(R.id.listView01);
        MyAdapter myAdapter = new MyAdapter();
        listView01.setAdapter(myAdapter);
        listView01.setOnItemClickListener((parent, view, position, id) -> {
            Toast.makeText(this, Arr[position], Toast.LENGTH_SHORT).show();
        });

    }

    class MyAdapter extends BaseAdapter {

        @Override
        public int getCount() {
            return Arr.length;
        }

        @Override
        public Object getItem(int position) {
            return Arr[position];
        }

        @Override
        public long getItemId(int position) {
            return position;
        }

        @Override
        public View getView(int i, View convertView, ViewGroup viewGroup) {
            ViewHolder viewHolder;
            if (convertView == null) {
                convertView = getLayoutInflater().inflate(R.layout.item_list, viewGroup, false);
                viewHolder = new ViewHolder();
                viewHolder.imageView = convertView.findViewById(R.id.imageView01);
                viewHolder.textView01 = convertView.findViewById(R.id.textView01);
                viewHolder.textView02 = convertView.findViewById(R.id.textView02);
                convertView.setTag(viewHolder);
            } else {
                viewHolder = (ViewHolder) convertView.getTag();
            }

            // 设置数据
            viewHolder.imageView.setImageResource(image[i]);
            viewHolder.textView01.setText(Arr[i]);
            viewHolder.textView02.setText(message[i]);

            return convertView;
        }
    }

    static class ViewHolder {
        ImageView imageView;
        TextView textView01;
        TextView textView02;
    }
}
```

`ViewHolder`设计模式是在Android中常用的一种优化列表视图（如`ListView`或`RecyclerView`）性能的方法。其核心思想是减少在`getView()`方法中对`findViewById()`的调用次数。以下是`ViewHolder`的主要作用：

- **提高效率**：在列表滚动时，`ListView`会不断调用`getView()`方法来获取或更新视图。如果每次都调用`findViewById()`来查找视图组件，这将是非常低效的，因为`findViewById()`是一个相对昂贵的操作。使用`ViewHolder`，我们可以将视图组件的引用保存在一个对象中，并在重用视图时直接使用这些引用。
- **缓存视图组件**：`ViewHolder`类通常作为内部静态类创建，它持有对列表项视图内各个组件的引用。这样，当列表项视图被回收和重用时，我们不需要再次查找视图组件，而是可以直接使用`ViewHolder`中缓存的引用。
- **简化代码**：通过使用`ViewHolder`，可以使`getView()`方法中的代码更加简洁和易于维护。

#### RecyclerView

还有一种列表使用的是`RecyclerView`标签。我们的语法稍微有一点点不同，语法如下：

```xml
<androidx.recyclerview.widget.RecyclerView>
    
</androidx.recyclerview.widget.RecyclerView>
```

我们需要去layout的主XML文件中去设置编写以下内容：

![image-20241031110526443](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031110526443.png)

然后我们需要在layout目录下编写单独的列表文件，内容和原来ListView的有一点点变化，如下：

![image-20241031112303130](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031112303130.png)

我们修改了标签为线性布局。然后我们编写Java代码逻辑进行交互。代码如下：

```java
public class MainActivity extends AppCompatActivity {

    //列表数据
    public String[] Arr = new String[]{"Apache", "ArchLinux", "CentOS", "Docker", "Kubernetes"};
    private String[] message = new String[]{
            "Apache HTTP Server是一个自由、开源的网页服务器软件。它被广泛用于提供万维网内容。",
            "Arch Linux是一个面向计算机专家和那些愿意通过自己动手来定制操作系统的用户的Linux发行版。",
            "CentOS是基于Red Hat Enterprise Linux（RHEL）构建的免费、开源操作系统。它旨在与RHEL二进制兼容，提供了稳定、可靠的平台，适合那些需要企业级Linux特性的用户和组织。",
            "Docker是一个开放平台，用于开发、运送和运行应用程序;Docker通过容器化技术简化了应用程序的部署和扩展。",
            "kubernetes（通常称为K8s）是一个开源的容器编排系统，用于自动化计算机容器化应用程序的部署、扩展和管理。"};

    private int[] image = {
            R.drawable.apache,
            R.drawable.archlinux,
            R.drawable.centos,
            R.drawable.docker,
            R.drawable.kubernetes
    };

    private RecyclerView recyclerView;
    private TextView textView01;

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //文字
        setContentView(R.layout.main_activity);
        textView01 = findViewById(R.id.textView01);
        textView01.setText("Copyright © 天阁创客official");

        //列表
        recyclerView = findViewById(R.id.recyclerView01);
        recyclerView.setLayoutManager(new androidx.recyclerview.widget.LinearLayoutManager(this));
        MyAdapter myAdapter = new MyAdapter();
        recyclerView.setAdapter(myAdapter);

        //设置点击事件
        onInemClickListener = new OnIntemClickListener() {
            @Override
            public void onIntemClick(View view, int position) {
                Toast.makeText(MainActivity.this, message[position], Toast.LENGTH_SHORT).show();
                Log.i("TAG", "onIntemClick: " + Arr[position]);
            }
        };
    }

    class MyAdapter extends RecyclerView.Adapter<MyAdapter.MyViewHolder> {

        //创建ViewHolder
        @Override
        public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
            //加载布局
            View view01 = View.inflate(MainActivity.this, R.layout.item_list, null);
//            View view = getLayoutInflater().inflate(R.layout.item_list, parent, false);
            return new MyViewHolder(view01);

        }

        //绑定数据
        @Override
        public void onBindViewHolder(@NonNull MyViewHolder holder, @SuppressLint("RecyclerView") int position) {
            holder.imageView01.setImageResource(image[position]);
            holder.textView01.setText(Arr[position]);
            holder.textView02.setText(message[position]);
            //设置点击事件
            holder.itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (onInemClickListener != null) {
                        onInemClickListener.onIntemClick(v, position);
                    }
                }
            });
        }

        //获取数据
        @Override
        public int getItemCount() {
            return Arr.length;
        }

        //ViewHolder继承
        class MyViewHolder extends RecyclerView.ViewHolder {
            ImageView imageView01;
            TextView textView01, textView02;
            public MyViewHolder(View view) {
                super(view);
                imageView01 = view.findViewById(R.id.imageView01);
                textView01 = view.findViewById(R.id.textView01);
                textView02 = view.findViewById(R.id.textView02);
            }
        }

    }

    private OnIntemClickListener onInemClickListener;
    //定义点击事件接口
    interface OnIntemClickListener {
        void onIntemClick(View view, int position);
    }
}
```

在代码中我们用到了新的函数`RecyclerView`，我们只定义了一个子类来继承`RecyclerView`这个父类，在子类中我们创建了三个方法，第一个是`onCreateViewHolder`，用于创建列表视图信心，并且使用了`inflate()`来加载布局；然后使用`onBindViewHolder`方法来绑定XML中的视图数据，并且创建了一个点击事件；然后使用`getItemCount`方法来获取数据。然后创建一个`ViewHolder`的子类，去获取列表的信息；随后定义了一个事件点击的接口，在OnCreate中去调用，返回相关的一些信息。

```
RecyclerView()					--创建列表的构造函数
onCreateViewHolder()			--创建列表视图，是 RecyclerView.Adapter 类中的一个方法。
onBindViewHolder()				--绑定数据更新视图，是 RecyclerView.Adapter 类中的一个方法。
getItemCount()					--返回列表总数，是 RecyclerView.Adapter 类中的一个方法。
onInemClickListener()			--接口，常常用于事件的操作
```

运行效果如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031151936837.png" alt="image-20241031151936837" style="zoom:70%;" />

---



### 滚动视图

#### HorizontalScrollView

`HorizontalScrollView`是水平滚动视图。语法如下：

```xml
<HorizontalScrollView>

    <LinearLayout>
	<!--滚动视图的内容-->

    </LinearLayout>

</HorizontalScrollView>
```

代码如下：

```xml
<HorizontalScrollView
    android:id="@+id/horizontalScrollView01"
    android:layout_width="wrap_content"
    android:layout_height="200dp"
    >

    <LinearLayout
        android:id="@+id/linearlayout01"
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:orientation="horizontal"
        >

        <View
            android:id="@+id/View01"
            android:layout_width="300dp"
            android:layout_height="match_parent"
            android:background="@color/绿色01"
            >

        </View>

        <View
            android:id="@+id/View02"
            android:layout_width="300dp"
            android:layout_height="match_parent"
            android:background="@color/红色03"
            >

        </View>

        <View
            android:id="@+id/View03"
            android:layout_width="300dp"
            android:layout_height="match_parent"
            android:background="@color/蓝色01"
            >

        </View>

    </LinearLayout>

</HorizontalScrollView>
```

效果图如下：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241106225238865.png" alt="image-20241106225238865" style="zoom:80%;" />

#### ScrollView

`ScrollView`是垂直滚动视图。我们只需要修改上面的标签即可实现

```xml
<ScrollView
    android:id="@+id/horizontalScrollView01"
    android:layout_width="wrap_content"
    android:layout_height="200dp"
    >

    <LinearLayout
        android:id="@+id/linearlayout01"
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:orientation="horizontal"
        >

        <View
            android:id="@+id/View01"
            android:layout_width="300dp"
            android:layout_height="match_parent"
            android:background="@color/绿色01"
            >

        </View>

        <View
            android:id="@+id/View02"
            android:layout_width="300dp"
            android:layout_height="match_parent"
            android:background="@color/红色03"
            >

        </View>

        <View
            android:id="@+id/View03"
            android:layout_width="300dp"
            android:layout_height="match_parent"
            android:background="@color/蓝色01"
            >

        </View>

    </LinearLayout>

</ScrollView>
```



### 图形Drawable

Drawable可以表达各种各样的图形，包括图片、色块、画板、背景等。包括图片按钮等一些功能控件。

在资源文件目录在中我们可以看见有一个默认的drawable目录，这个目录存放着一些资源文件和XML配置文件。`drawable-ldpi`、`drawable-mdpi`、`drawable-hdpi`等这些都是根据不同手机分辨率来进行适配的图片。

#### 形状图形Shape

Shape图形就是形状图形，用于创建几何图形。

XML语法如下：

```xml
<Shape>

</Shape>
```

我们的shape文件是创建在drawable中的，或者其他分辨率DPI下面。常见的属性如下：

```xml
size		--设置尺寸
stroke		--设置描边
corners		--设置圆角
solid		--设置填充
padding		--设置间隔
gradient	--设置渐变，含有不同类型的渐变色
```

详细的值的使用可以挨个尝试揣摩。如图：

![image-20241110174004853](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241110174004853.png)

圆形的渐变色：

![image-20241110174226273](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241110174226273.png)

---

#### .9图片

当图片设置成视图背景时，如果图片尺寸太小，则系统会自动拉伸图片使之填满背景。一旦图片拉得过大，其画面容易变得模糊。我们的解决方案就是使用`.9`图片，也叫做九宫格图片。当你的图片像素太小，放在某些情况就会被拉伸，最后变形。使用分辨率较大的图片就可以解决这个问题或者使用`.9`图片。

#### 状态列表图形

Button按钮的背景在正常情况下是凸起的，在按下时是凹陷的，说人话就是点击后的背景变化。

我们需要在XML中来定义按钮点击的效果显示，代码如下：

```xml
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:tools="http://schemas.android.com/tools"
    xmlns:android="http://schemas.android.com/apk/res/android">

<!--按钮之前的状态-->
    <item android:state_pressed="false" android:drawable="@drawable/shape_button" tools:ignore="StateListReachable" />
<!--按下去之后的状态-->
    <item android:state_pressed="true" android:drawable="@drawable/button_pressed" tools:ignore="StateListReachable"/>


</selector>
```

代码中我们还定义了两个按钮，分别是：`shape_button`和`button_pressed`来实现点击效果。然后我们在主显示按钮的XML文件中给按钮创建背景图即可实现效果：

![image-20241110182256296](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241110182256296.png)

运行效果如下：

![image-20241110182019569](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241110182019569.png)



## 版本打包

接下来讲一讲版本打包，默认情况下，我们在使用Gradle编译apk的时候都是Debug版本，我们通常在发布的时候都是用的release版本。

### 配置Key

首先我们要打开左上角那四根横线，就会出现如图的选项框，然后点击Build，看到如图设置，点击`Generate Signed App Build / APK...`：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031152201833.png" alt="image-20241031152201833" style="zoom:80%;" />

然后选择APK，点击下一步：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031152406149.png" alt="image-20241031152406149" style="zoom:80%;" />

接着我们需要创建一个key：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031152434106.png" alt="image-20241031152434106" style="zoom:80%;" />

然后配置Key：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031152622768.png" alt="image-20241031152622768" style="zoom:80%;" />

后面这个地方我们设置密码的时候和上面的密码1是一样的：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031152736973.png" alt="image-20241031152736973" style="zoom:80%;" />



### 配置Project Strucuture

再次点击左上角的四根横线，然后点击file，点击Project Strucuture：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031153003912.png" alt="image-20241031153003912" style="zoom:80%;" />

动图会弹出代理，我们取消掉不用管【前提是必须打开VPN挂代理】：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031153137878.png" alt="image-20241031153137878" style="zoom:75%;" />

然后点击Modules：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031153406672.png" alt="image-20241031153406672" style="zoom:75%;" />

如果你编译的时候，你的系统版本是安卓老版本，那么你需要修改以下配置：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031153650465.png" alt="image-20241031153650465" style="zoom:75%;" />

选项的内容如下：

![image-20241031153711033](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031153711033.png)

然后我们需要点击SIgning Config创建一个release版本，做出如下配置：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031153855210.png" alt="image-20241031153855210" style="zoom:75%;" />

最后修改创建的类型：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031154006576.png" alt="image-20241031154006576" style="zoom:75%;" />

这样我们在默认编译的时候就会选择release的版本来进行编译，我们可以通过一种方式来查看是否切换到了release版本，如果没有切换，我们手动切换即可：

点击

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031154413982.png" alt="image-20241031154413982" style="zoom:80%;" />

然后左下角会多出来一个`build variants`：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031154447338.png" alt="image-20241031154447338" style="zoom:80%;" />



### 版本打包操作

再次进入到`Generate Signed App Bundle or APK`中，也就是我们前面配置key的操作。

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031154726006.png" alt="image-20241031154726006" style="zoom:80%;" />

选择release：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031154739772.png" alt="image-20241031154739772" style="zoom:80%;" />

最后点击创建即可，编译打包APK中：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031154823361.png" alt="image-20241031154823361" style="zoom:80%;" />

打包完成之后，目录里面会多一个release目录，里面存放在我们变异好的apk：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241031154913945.png" alt="image-20241031154913945" style="zoom:80%;" />

我们可以通过提取apk的方式查看和原来有什么区别？其实最主要的区别就是我们对APK进行了一个独有的签名，原来的签名是默认的，我们自己创建的签名，在安装软件的时候会提示签名不符需要卸载原有的软件，然后重新安装。



## APK兼容性

在开发软件的时候，我们一般会对系统版本的兼容性进行限制，在一些特别古老的设备，例如Android9之类的系统，在上面运行，我们需要进行一些配置，修改Gradle的配置文件。我们一般情况下为了安全性考虑，对于非常古老的系统是不适配的，这会出现很多安全问题，不建议这样做。

### 兼容系统版本

如果软件闪退，要么就是代码逻辑有问题、要么就是系统兼容性问题、要么就是有BUG。

我们需要配置项目文件中的`build.gradle.kts`文件，修改以下内容：

![image-20241108205456800](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241108205456800.png)

然后重启软件下载SDK或者点击文件上面的：

![image-20241108205544551](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241108205544551.png)

我们将版本修改成了Android12，成功的在Android12的手机上运行了起来：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241108210113090.png" alt="image-20241108210113090" style="zoom:60%;" />

我们如果要在Android9上面跑修改以下即可：

![image-20241108210220493](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241108210220493.png)

运行如图：

<img src="./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241108210515451.png" alt="image-20241108210515451" style="zoom:67%;" />

我们的软件是可以上下兼容到最高的Android13，因为我们`targetSdk`的值是34，34代表的是Android13，我们的软件可以在Android9~Android13这个环境下运行。如图：

![image-20241108210816275](./08-Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.assets/image-20241108210816275.png)

