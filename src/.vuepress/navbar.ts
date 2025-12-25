import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  {
    text: "逆向二进制",
    icon: "book",
    children: [
      { text: "Android逆向", icon: '/assets/icon/android.svg', link: "/AndroidReverse/" },
      { text: "游戏逆向", icon: '/assets/icon/Game.svg', link: "/GameReverse/" },
      { text: "PC逆向与病毒分析", icon: '/assets/icon/SRC.svg', link: "/PCReverse/" },
    ],
  },
  {
    text: "运维",
    icon: "book",
    children: [
      { text: "Linux", icon: '/assets/icon/linux.svg', link: "/Linux/" },
      { text: "Bash Shell", icon: '/assets/icon/shell.svg', link: "/Shell/" },
      { text: "Linux系统安全", icon: '/assets/icon/网络安全.svg', link: "/Linux-securety/" },
      { text: "中间件教程", icon: '/assets/icon/Middleware.svg', link: "/Middleware/" },
      { text: "LANMP部署", icon: '/assets/icon/network.svg', link: "/LANMP/" },
      { text: "文件服务部署", icon: '/assets/icon/FTP服务器.svg', link: "/FileShare/" },
      { text: "数据库服务", icon: '/assets/icon/数据库服务.svg', link: "/Database/" },
      { text: "Git教程", icon: '/assets/icon/git.svg', link: "/Git/" },
      { text: "Docker教程", icon: '/assets/icon/Docker.svg', link: "/Docker/" },
      { text: "Ansible", icon: '/assets/icon/ansible.svg', link: "/Ansible/" },
      { text: "Zabbix", icon: '/assets/icon/zabbix.svg', link: "/Zabbix/" },
			{ text: "Kubernetes", icon: '/assets/icon/kubernetes.svg', link: "/Kubernetes/" },
    ]
  },
  {
    text: "前端",
    icon: "book",
    children: [
      { text: "HTML5教程", icon: '/assets/icon/HTML5.svg', link: "/HTML/" },
      { text: "CSS3教程", icon: '/assets/icon/CSS3.svg', link: "/CSS3/" },
      { text: "JavaScript教程", icon: '/assets/icon/javascript.svg', link: "/JavaScript/" },
      { text: "JQuery", icon: '/assets/icon/jquery.svg', link: "/JQuery/" },
      { text: "Vue", icon: '/assets/icon/Vue.svg', link: "/Vue/" },
	  { text: "uniapp", icon: '/assets/icon/uniapp.svg', link: "/uniapp/" },
    ]
  },
  {
    text: "后端",
    icon: "book",
    children: [
      { text: "C语言教程", icon: '/assets/icon/C_language.svg', link: "/C/" },
      { text: "C++教程", icon: '/assets/icon/cpp.svg', link: "/C++/" },
      { text: "Java教程", icon: '/assets/icon/java.svg', link: "/Java/" },
      { text: "Python教程", icon: '/assets/icon/python.svg', link: "/Python/" },
      { text: "NodeJS教程", icon: '/assets/icon/nodejs.svg', link: "/NodeJS/" },
      { text: "PHP教程", icon: '/assets/icon/php.svg', link: "/PHP/" },
      { text: "Django教程", icon: '/assets/icon/django.svg', link: "/Django/" },
      { text: "Flask教程", icon: '/assets/icon/flask.svg', link: "/Flask/" },
      { text: "Qt教程", icon: '/assets/icon/Qt.svg', link: "/Qt/" },
      { text: "SpringBoot", icon: '/assets/icon/SpringBoot.svg', link: "/SpringBoot/" },
      { text: "CMake", icon: '/assets/icon/cmake.svg', link: "/CMake/" },
      { text: "Linux开发", icon: '/assets/icon/linux.svg', link: "/LinuxDev/" }, 
	  { text: "Gradle", icon: '/assets/icon/gradle.svg', link: "/Gradle/" },
    ]
  },
  {
    text: "游戏开发",
    icon: "book",
    children: [
      { text: "Unity教程", icon: '/assets/icon/unity.svg', link: "/Unity/" },
      { text: "UE5教程", icon: '/assets/icon/UE5.svg', link: "/UE5/" },
      { text: "Blender教程", icon: '/assets/icon/Blender.svg', link: "/Blender/" },
      { text: "Godot教程", icon: '/assets/icon/Godot.svg', link: "/Godot/" },
    ]
  },
  {
    text: "嵌入式开发",
    icon: "book",
    children: [
      { text: "51教程", icon: '/assets/icon/CPU.svg', link: "/C51/" },
      { text: "STM32教程", icon: '/assets/icon/stm32.svg', link: "/STM32/" },
      { text: "ESP32教程", icon: '/assets/icon/ESP32.svg', link: "/ESP32/" },
      { text: "Arduino教程", icon: '/assets/icon/arduino.svg', link: "/Arduino/" },
      { text: "keil教程", icon: '/assets/icon/armkeil.svg', link: "/Keil/" },
      { text: "树莓派教程", icon: '/assets/icon/raspi.svg', link: "/Raspberry/" },
      { text: "RTOS教程", icon: '/assets/icon/RTOS.svg', link: "/RTOS/" },
      { text: "Linux嵌入式", icon: '/assets/icon/芯片.svg', link: "/LinuxEmbedded/" },
    ]
  },
  {
    text: "算法",
    icon: "book",
    children: [
      { text: "数据结构与算法", icon: '/assets/icon/数据结构.svg', link: "/Arithmetic/DataStructures&Algorithms/" },
      { text: "密码学", icon: '/assets/icon/Encrypt.svg', link: "/Arithmetic/Cryptography/" },
      { text: "OpenCV算法", icon: '/assets/icon/opencv.svg', link: "/Arithmetic/OpenCV/" },
      { text: "Yolov算法", icon: '/assets/icon/Yolov.svg', link: "/Arithmetic/Yolov/" },
    ],
  },
  {
    text: "区块链",
    icon: "/assets/icon/UBQ 区块链.svg",
    link: "/区块链/",
  },

]);
