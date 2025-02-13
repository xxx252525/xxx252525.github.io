import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "计算机基础",
      prefix: "计算机基础/",
	  icon: "/assets/icon/计算机.svg",
	  collapsible: true,
      children: [
        {
          text: "Linux教程", prefix: "Linux/", collapsible: true, 
		  icon: "/assets/icon/Linux.svg", link: "/Linux/",
        },
        {
          text: "BashShell教程", prefix: "BashShell/", collapsible: true, 
		  icon: "/assets/icon/shell.svg", link: "/Shell/",
        },
      ],
    },
    {
      text: "编程基础",
      prefix: "编程基础/",
	  icon: "/assets/icon/Code.svg",
	  collapsible: true,
      children: [
        {
          text: "C语言教程", prefix: "C/", collapsible: true, 
		  icon: "/assets/icon/C_language.svg", link: "/C/",
        },
		{
		  text: "C++教程", prefix: "C++/", collapsible: true, 
		  icon: "/assets/icon/cpp.svg", link: "/C++/",
		},
		{
		  text: "Java教程", prefix: "Java/", collapsible: true, 
		  icon: "/assets/icon/java.svg", link: "/Java/",
		},
		{
		  text: "Python教程", prefix: "Python/", collapsible: true, 
		  icon: "/assets/icon/python.svg", link: "/Python/",
		},
		{
		  text: "PHP教程", prefix: "PHP/", collapsible: true, 
		  icon: "/assets/icon/php.svg", link: "/PHP/",
		},
		{
		  text: "HTML5教程", prefix: "HTML5&CSS3/", collapsible: true, 
		  icon: "/assets/icon/HTML5.svg", link: "/HTML5&CSS3/",
		},
		{
		  text: "CSS3教程", prefix: "HTML5&CSS3/", collapsible: true, 
		  icon: "/assets/icon/CSS3.svg", link: "/HTML5&CSS3/",
		},
		{
		  text: "JavaScript教程", prefix: "JavaScript/", collapsible: true, 
		  icon: "/assets/icon/javascript.svg", link: "/JavaScript/",
		},
		{
		  text: "NodeJS教程", prefix: "NodeJS/", collapsible: true, 
		  icon: "/assets/icon/nodejs.svg", link: "/NodeJS/",
		},
		{
		  text: "MySQL教程", prefix: "Database/MySQL/", collapsible: true, 
		  icon: "/assets/icon/mysql.svg", link: "/Database/MySQL/",
		},
		{
		  text: "ARM汇编", prefix: "Compilation/ARM/", collapsible: true, 
		  icon: "/assets/icon/ARM.svg", link: "/Compilation/ARM/",
		},
		{
		  text: "X86_X64汇编", prefix: "Compilation/X86/", collapsible: true, 
		  link: "/Compilation/X86/",
		},
		{
		  text: "RISC-V汇编", prefix: "Compilation/RISC-V/", collapsible: true, 
		  icon: "/assets/icon/RISC-V.svg", link: "/Compilation/RISC-V/",
		},
		{
		  text: "LoongArch汇编", prefix: "Compilation/LoongArch/", collapsible: true, 
		  link: "/Compilation/LoongArch/",
		},
      ],
    },
	{
      text: "开发进阶",
      prefix: "开发进阶/",
	  icon: "/assets/icon/开发定制.svg",
	  collapsible: true,
	  children: [
        {
          text: "CMake教程", prefix: "Cmake/",  collapsible: true, 
          icon: "/assets/icon/cmake.svg", link: "/Cmake/",
        },
        {
          text: "Django教程", prefix: "Django/", collapsible: true, 
          icon: "/assets/icon/django.svg", link: "/janngo/",
        },
        {
          text: "Gadle教程", prefix: "Gadle/", collapsible: true, 
          icon: "/assets/icon/gadle.svg", link: "/radle/",
        },
        {
          text: "JQuery教程", prefix: "JQuery/", collapsible: true, 
          icon: "/assets/icon/jquery.svg", link: "/JQuery/",
        },
        {
          text: "Vue3教程", prefix: "Vue/", collapsible: true, 
          icon: "/assets/icon/Vue.svg", link: "/Vue/",
        },
        {
          text: "uniapp教程", prefix: "uniapp/", collapsible: true, 
          icon: "/assets/icon/uniapp.svg", link: "/uniapp/", 
        },
        {
          text: "Git教程", prefix: "Git/", collapsible: true,
          icon: "/assets/icon/git.svg", link: "/Git/",
        },
        {
          text: "Unity开发教程", prefix: "Unity/", collapsible: true,
		  icon: "/assets/icon/unity.svg", link: "/Unity/",
        },
        {
          text: "Godot开发教程", prefix: "Godot/", collapsible: true,
		  icon: "/assets/icon/Godot.svg", link: "/Godot/",
        },
        {
          text: "UE5开发教程", prefix: "UE5/", collapsible: true,
		  icon: "/assets/icon/UE5.svg", link: "/UE5/",
        },
        {
          text: "Blender教程", prefix: "Blender/", collapsible: true,
		  icon: "/assets/icon/Blender.svg", link: "/Blender/",
        },
        {
          text: "Arduino教程", prefix: "Adruino/", collapsible: true,
          icon: "/assets/icon/Arduino.svg", link: "/Adruino/",
        },
        {
          text: "Keil教程", prefix: "Keil/", collapsible: true,
          icon: "/assets/icon/armkeil.svg", link: "/Keil/",
        },
        {
          text: "51单片机开发", prefix: "C51/", collapsible: true,
          icon: "/assets/icon/cpu.svg", link: "/C51/",
        },
        {
          text: "STM32开发", prefix: "STM32/", collapsible: true,
          icon: "/assets/icon/stm32.svg", link: "/STM32/",
        },
        {
          text: "ESP32开发", prefix: "ESP32/", collapsible: true,
          icon: "/assets/icon/ESP32.svg", link: "/ESP32/",
        },
        {
          text: "树莓派教程", prefix: "Raspberry/", collapsible: true,
          icon: "/assets/icon/raspi.svg", link: "/Raspberry/",
        },
        {
          text: "RTOS开发", prefix: "RTOS/", collapsible: true,
          icon: "/assets/icon/RTOS.svg", link: "/RTOS/",
        },
        {
          text: "Linux嵌入式", prefix: "LinuxEmbedded/", collapsible: true,
          icon: "/assets/icon/芯片.svg", link: "/LinuxEmbedded/",
        },
	  ],
	},
	{
	  text: "运维区",
	  prefix: "运维区/",
	  icon: "/assets/icon/云运维.svg",
	  collapsible: true,
	  children: [
        {
          text: "Apache教程", prefix: "Middleware/Apache/", collapsible: true,
          icon: "/assets/icon/apache.svg", link: "/Middleware/Apache/",
        },
		{
		  text: "Nginx教程", prefix: "Middleware/Nginx/", collapsible: true,
		  icon: "/assets/icon/nginx.svg", link: "/Middleware/Nginx/",
		},
		{
		  text: "OpenResty教程", prefix: "Middleware/OpenResty/", collapsible: true,
		  icon: "/assets/icon/OpenResty.svg", link: "/Middleware/OpenResty/",
		},
		{
		  text: "Docker教程", prefix: "Docker/", collapsible: true,
		  icon: "/assets/icon/Docker.svg", link: "/Docker/",
		},
		{
		  text: "Mongodb教程", prefix: "Database/Mongodb/", collapsible: true,
		  icon: "/assets/icon/Mongodb.svg", link: "/Database/Mongodb/",
		},
		{
		  text: "Redis教程", prefix: "Database/Redis/", collapsible: true,
		  icon: "/assets/icon/Redis.svg", link: "/Database/Redis/",
		},
		{
		  text: "DHCP教程", prefix: "Networks&Firewalls/DHCP/", collapsible: true,
		  icon: "/assets/icon/DHCP.svg", link: "/Networks&Firewalls/DHCP/",
		},
		{
		  text: "FTP教程", prefix: "FileSharing/FTP/", collapsible: true,
		  icon: "/assets/icon/FTP.svg", link: "/FileSharing/FTP/",
		},
		{
		  text: "NFS教程", prefix: "FileSharing/NFS/", collapsible: true,
		  icon: "/assets/icon/FTP服务器.svg", link: "/FileSharing/NFS/",
		},
		{
		  text: "DNS教程", prefix: "Networks&Firewalls/DNS/", collapsible: true,
		  icon: "/assets/icon/DNS.svg", link: "/Networks&Firewalls/DNS/",
		},
		{
		  text: "Tomcat教程", prefix: "Middleware/Tomcat/", collapsible: true,
		  icon: "/assets/icon/Tomcat.svg", link: "/Middleware/Tomcat/",
		},
		{
		  text: "Rsync教程", prefix: "FileSharing/Rsync/", collapsible: true,
		  icon: "/assets/icon/FTP服务器.svg", link: "/FileSharing/Rsync/",
		},
		{
		  text: "Ansible教程", prefix: "Ansible/", collapsible: true,
		  icon: "/assets/icon/Ansible.svg", link: "/Ansible/",
		},
		{
		  text: "Zabbix教程", prefix: "Zabbix/", collapsible: true, 
		  icon: "/assets/icon/Zabbix.svg", link: "/Zabbix/",
		},
	  ],
	},
	{
	  text: "算法区",
	  prefix: "Arithmetic/",
	  icon: "/assets/icon/算法2.svg",
	  collapsible: true,
	  children: [
      { 
		text: "数据结构与算法", prefix: "Arithmetic/DataStructures&Algorithms/", collapsible: true,
		icon: '/assets/icon/数据结构.svg', link: "/Arithmetic/DataStructures&Algorithms/", 
	  },
      { 
		text: "密码学算法", prefix: "Arithmetic/Cryptography/", collapsible: true,
		icon: '/assets/icon/Encrypt.svg', link: "/Arithmetic/Cryptography/",
	  },
      { 
		text: "OpenCV视觉算法", prefix: "Arithmetic/OpenCV/", collapsible: true,
		icon: '/assets/icon/opencv.svg', link: "/Arithmetic/OpenCV/",
	  },
      { 
		text: "Yolov视觉算法", prefix: "Arithmetic/Yolov/", collapsible: true,
		icon: '/assets/icon/Yolov.svg', link: "/Arithmetic/Yolov/",
	  },
	  ],
	},
	{
	  text: "区块链",
	  prefix: "区块链/",
	  icon: "/assets/icon/UBQ 区块链.svg",
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "逆向安全",
	  prefix: "逆向安全/",
	  icon: "/assets/icon/SRC.svg",
	  collapsible: true,
	  children: "structure",
	},
  ],
});
