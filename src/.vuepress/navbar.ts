import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  // "/demo/",
  {
    text: "网络安全区",
    icon: "book",
    children: [
      { text: "渗透测试", icon: 'book', link: "/渗透测试" },
      { text: "SRC漏洞挖掘", icon: 'book', link: "/SRC漏洞挖掘" },
      { text: "Android逆向", icon: 'book', link: "/Android逆向" },
      { text: "游戏逆向", icon: 'book', link: "/游戏逆向" },
      { text: "PC逆向", icon: 'book', link: "/PC逆向" },
	  { text: "爬虫与反爬虫", icon: '/assets/icon/spider.svg', link: "/爬虫与反爬虫" },
    ],
  },
  {
    text: "运维",
    icon: "book",
    children: [
      { text: "Linux", icon: '/assets/icon/linux.svg', link: "/运维/Linux" },
      { text: "Bash Shell", icon: '/assets/icon/shell.svg', link: "/运维/Shell" },
      { text: "网络与防火墙", icon: '/assets/icon/网络防火墙.svg', link: "/运维/网络与防火墙" },
      { text: "中间件教程", icon: '/assets/icon/Middleware.svg', link: "/运维/中间件" },
      { text: "LANMP部署", icon: '/assets/icon/network.svg', link: "/运维/LANMP" },
      { text: "文件共享部署", icon: '/assets/icon/FTP服务器.svg', link: "/运维/文件共享" },
      { text: "数据库服务", icon: '/assets/icon/数据库服务.svg', link: "/运维/数据库服务" },
      { text: "Git教程", icon: '/assets/icon/git.svg', link: "/Git" },
      { text: "Docker教程", icon: '/assets/icon/Docker.svg', link: "/运维/Docker" },
      { text: "Ansible", icon: '/assets/icon/ansible.svg', link: "/运维/Ansible" },
      { text: "Zabbix", icon: '/assets/icon/zabbix.svg', link: "/运维/Zabbix" },
    ]
  },
  {
    text: "前端",
    icon: "book",
    children: [
      { text: "HTML5教程", icon: '/assets/icon/HTML5.svg', link: "/前端/HTML5" },
      { text: "CSS3教程", icon: '/assets/icon/CSS3.svg', link: "/前端/CSS3" },
      { text: "JavaScript教程", icon: '/assets/icon/javascript.svg', link: "/前端/JavaScript" },
      { text: "JQuery", icon: '/assets/icon/jquery.svg', link: "/前端/JQuery" },
      { text: "Vue", icon: '/assets/icon/Vue.svg', link: "/前端/Vue" },
	  { text: "uniapp", icon: '/assets/icon/uniapp.svg', link: "/移动端/uniapp" },
    ]
  },
  {
    text: "后端",
    icon: "book",
    children: [
      { text: "C语言教程", icon: '/assets/icon/C_language.svg', link: "/后端/C" },
      { text: "C++教程", icon: '/assets/icon/cpp.svg', link: "/后端/C++" },
      { text: "Java教程", icon: '/assets/icon/java.svg', link: "/后端/Java" },
      { text: "Python教程", icon: '/assets/icon/python.svg', link: "/后端/Python" },
      { text: "NodeJS教程", icon: '/assets/icon/nodejs.svg', link: "/后端/NodeJS" },
      { text: "PHP教程", icon: '/assets/icon/php.svg', link: "/后端/PHP" },
      { text: "Django教程", icon: '/assets/icon/django.svg', link: "/后端/Django" },
      { text: "Flask教程", icon: '/assets/icon/flask.svg', link: "/后端/Flask" },
      { text: "Qt教程", icon: '/assets/icon/Qt.svg', link: "/后端/Qt" },
      { text: "SpringBoot", icon: '/assets/icon/SpringBoot.svg', link: "/后端/SpringBoot" },
      { text: "CMake", icon: '/assets/icon/cmake.svg', link: "/后端/CMake" },
      { text: "Linux开发", icon: '/assets/icon/linux.svg', link: "/后端/Linux开发" }, 
	  { text: "Gradle", icon: '/assets/icon/gradle.svg', link: "/移动端/Gradle" },
    ]
  },
  {
    text: "游戏开发",
    icon: "book",
    children: [
      { text: "Unity教程", icon: '/assets/icon/unity.svg', link: "/游戏开发/Unity" },
      { text: "UE5教程", icon: '/assets/icon/UE5.svg', link: "/游戏开发/UE5" },
      { text: "Blender教程", icon: '/assets/icon/Blender.svg', link: "/游戏开发/Blender" },
      { text: "Godot教程", icon: '/assets/icon/Godot.svg', link: "/游戏开发/Godot" },
    ]
  },
  {
    text: "嵌入式开发",
    icon: "book",
    children: [
      { text: "51教程", icon: '/assets/icon/cpu.svg', link: "/嵌入式/C51" },
      { text: "STM32教程", icon: '/assets/icon/stm32.svg', link: "/嵌入式/STM32" },
      { text: "ESP32教程", icon: '/assets/icon/ESP32.svg', link: "/嵌入式/ESP32" },
      { text: "Arduino教程", icon: '/assets/icon/arduino.svg', link: "/嵌入式/Arduino" },
      { text: "keil教程", icon: '/assets/icon/armkeil.svg', link: "/嵌入式/Keil" },
      { text: "树莓派教程", icon: '/assets/icon/raspi.svg', link: "/嵌入式/Raspberry" },
      { text: "RTOS教程", icon: '/assets/icon/RTOS.svg', link: "/嵌入式/RTOS" },
      { text: "Linux嵌入式", icon: '/assets/icon/芯片.svg', link: "/嵌入式/Linux嵌入式" },
    ]
  },
  {
    text: "算法",
    icon: "book",
    children: [
      { text: "数据结构与算法", icon: '/assets/icon/数据结构.svg', link: "/算法/数据结构与算法" },
      { text: "密码学", icon: '/assets/icon/Encrypt.svg', link: "/算法/密码学" },
      { text: "OpenCV算法", icon: '/assets/icon/opencv.svg', link: "/算法/OpenCV" },
      { text: "Yolov算法", icon: '/assets/icon/Yolov.svg', link: "/算法/Yolov" },
    ],
  },
  {
    text: "区块链",
    icon: "/assets/icon/UBQ 区块链.svg",
    link: "/区块链",
  },

]);
