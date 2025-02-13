import { sidebar } from "vuepress-theme-hope";
import fs from 'fs';
import path from 'path';

function getSortedChildren(prefix) {
  const dirPath = path.resolve(__dirname, '../', prefix);
  const files = fs.readdirSync(dirPath);
  
  // 按照文件名升序排序
  const sortedFiles = files
    .filter(file => file.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b));
  
  return sortedFiles.map(file => ({
    text: file.replace('.md', ''),
    link: `/${prefix}${file}`,
  }));
}


export default sidebar({
  "/": [
	{
	  text: "Linux教程", prefix: "Linux/", collapsible: true, 
	  icon: "/assets/icon/Linux.svg", link: "/Linux/", children: "structure",
	},
	{
	  text: "BashShell教程", prefix: "BashShell/", collapsible: true, 
	  icon: "/assets/icon/shell.svg", link: "/Shell/", children: "structure",
	},

	{
	  text: "C语言教程", prefix: "C/", collapsible: true, 
	  icon: "/assets/icon/C_language.svg", link: "/C/", children: "structure",
	},
	{
	  text: "C++教程", prefix: "C++/", collapsible: true, 
	  icon: "/assets/icon/cpp.svg", link: "/C++/", children: "structure",
	},
	{
	  text: "Java教程", prefix: "Java/", collapsible: true, 
	  icon: "/assets/icon/java.svg", link: "/Java/", children: "structure",
	},
	{
	  text: "Python教程", prefix: "Python/", collapsible: true, 
	  icon: "/assets/icon/python.svg", link: "/Python/", children: "structure",
	},
	{
	  text: "PHP教程", prefix: "PHP/", collapsible: true, 
	  icon: "/assets/icon/php.svg", link: "/PHP/", children: "structure",
	},
	{
	  text: "HTML5教程", prefix: "HTML5&CSS3/", collapsible: true, 
	  icon: "/assets/icon/HTML5.svg", link: "/HTML5&CSS3/", children: "structure",
	},
	{
	  text: "CSS3教程", prefix: "HTML5&CSS3/", collapsible: true, 
	  icon: "/assets/icon/CSS3.svg", link: "/HTML5&CSS3/", children: "structure",
	},
	{
	  text: "JavaScript教程", prefix: "JavaScript/", collapsible: true, 
	  icon: "/assets/icon/javascript.svg", link: "/JavaScript/", children: "structure",
	},
	{
	  text: "NodeJS教程", prefix: "NodeJS/", collapsible: true, 
	  icon: "/assets/icon/nodejs.svg", link: "/NodeJS/", children: "structure",
	},
	{
	  text: "MySQL教程", prefix: "Database/MySQL/", collapsible: true, 
	  icon: "/assets/icon/mysql.svg", link: "/Database/MySQL/", children: "structure",
	},
	{
	  text: "ARM汇编", prefix: "Compilation/ARM/", collapsible: true, 
	  icon: "/assets/icon/ARM.svg", link: "/Compilation/ARM/", children: "structure",
	},
	{
	  text: "X86_X64汇编", prefix: "Compilation/X86/", collapsible: true, 
	  link: "/Compilation/X86/", children: "structure",
	},
	{
	  text: "RISC-V汇编", prefix: "Compilation/RISC-V/", collapsible: true, 
	  icon: "/assets/icon/RISC-V.svg", link: "/Compilation/RISC-V/", children: "structure",
	},
	{
	  text: "LoongArch汇编", prefix: "Compilation/LoongArch/", collapsible: true, 
	  link: "/Compilation/LoongArch/", children: "structure",
	},

	{
	  text: "CMake教程", prefix: "Cmake/",  collapsible: true, 
	  icon: "/assets/icon/cmake.svg", link: "/Cmake/", children: "structure",
	},
	{
	  text: "Django教程", prefix: "Django/", collapsible: true, 
	  icon: "/assets/icon/django.svg", link: "/janngo/", children: "structure",
	},
	{
	  text: "Gadle教程", prefix: "Gadle/", collapsible: true, 
	  icon: "/assets/icon/gadle.svg", link: "/radle/", children: "structure",
	},
	{
	  text: "JQuery教程", prefix: "JQuery/", collapsible: true, 
	  icon: "/assets/icon/jquery.svg", link: "/JQuery/", children: "structure",
	},
	{
	  text: "Vue3教程", prefix: "Vue/", collapsible: true, 
	  icon: "/assets/icon/Vue.svg", link: "/Vue/", children: "structure",
	},
	{
	  text: "uniapp教程", prefix: "uniapp/", collapsible: true, 
	  icon: "/assets/icon/uniapp.svg", link: "/uniapp/", children: "structure",
	},
	{
	  text: "Git教程", prefix: "Git/", collapsible: true,
	  icon: "/assets/icon/git.svg", link: "/Git/", children: "structure",
	},
	{
	  text: "Unity开发教程", prefix: "Unity/", collapsible: true,
	  icon: "/assets/icon/unity.svg", link: "/Unity/", children: "structure",
	},
	{
	  text: "Godot开发教程", prefix: "Godot/", collapsible: true,
	  icon: "/assets/icon/Godot.svg", link: "/Godot/", children: "structure",
	},
	{
	  text: "UE5开发教程", prefix: "UE5/", collapsible: true,
	  icon: "/assets/icon/UE5.svg", link: "/UE5/", children: "structure",
	},
	{
	  text: "Blender教程", prefix: "Blender/", collapsible: true,
	  icon: "/assets/icon/Blender.svg", link: "/Blender/", children: "structure",
	},
	{
	  text: "Arduino教程", prefix: "Adruino/", collapsible: true,
	  icon: "/assets/icon/Arduino.svg", link: "/Adruino/", children: "structure", 
	},
	{
	  text: "Keil教程", prefix: "Keil/", collapsible: true,
	  icon: "/assets/icon/armkeil.svg", link: "/Keil/", children: "structure",
	},
	{
	  text: "51单片机开发", prefix: "C51/", collapsible: true,
	  icon: "/assets/icon/cpu.svg", link: "/C51/", children: "structure",
	},
	{
	  text: "STM32开发", prefix: "STM32/", collapsible: true,
	  icon: "/assets/icon/stm32.svg", link: "/STM32/", children: "structure",
	},
	{
	  text: "ESP32开发", prefix: "ESP32/", collapsible: true,
	  icon: "/assets/icon/ESP32.svg", link: "/ESP32/", children: "structure",
	},
	{
	  text: "树莓派教程", prefix: "Raspberry/", collapsible: true,
	  icon: "/assets/icon/raspi.svg", link: "/Raspberry/", children: "structure",
	},
	{
	  text: "RTOS开发", prefix: "RTOS/", collapsible: true,
	  icon: "/assets/icon/RTOS.svg", link: "/RTOS/", children: "structure",
	},
	{
	  text: "Linux嵌入式", prefix: "LinuxEmbedded/", collapsible: true,
	  icon: "/assets/icon/芯片.svg", link: "/LinuxEmbedded/", children: "structure",
	},

	{
	  text: "Apache教程", prefix: "Middleware/Apache/", collapsible: true,
	  icon: "/assets/icon/apache.svg", link: "/Middleware/Apache/", children: "structure",
	},
	{
	  text: "Nginx教程", prefix: "Middleware/Nginx/", collapsible: true,
	  icon: "/assets/icon/nginx.svg", link: "/Middleware/Nginx/", children: "structure",
	},
	{
	  text: "OpenResty教程", prefix: "Middleware/OpenResty/", collapsible: true,
	  icon: "/assets/icon/OpenResty.svg", link: "/Middleware/OpenResty/", children: "structure",
	},
	{
	  text: "Docker教程", prefix: "Docker/", collapsible: true,
	  icon: "/assets/icon/Docker.svg", link: "/Docker/", children: "structure",
	},
	{
	  text: "Mongodb教程", prefix: "Database/Mongodb/", collapsible: true,
	  icon: "/assets/icon/Mongodb.svg", link: "/Database/Mongodb/", children: "structure",
	},
	{
	  text: "Redis教程", prefix: "Database/Redis/", collapsible: true,
	  icon: "/assets/icon/Redis.svg", link: "/Database/Redis/", children: "structure",
	},
	{
	  text: "DHCP教程", prefix: "Networks&Firewalls/DHCP/", collapsible: true,
	  icon: "/assets/icon/DHCP.svg", link: "/Networks&Firewalls/DHCP/", children: "structure",
	},
	{
	  text: "FTP教程", prefix: "FileSharing/FTP/", collapsible: true,
	  icon: "/assets/icon/FTP.svg", link: "/FileSharing/FTP/", children: "structure",
	},
	{
	  text: "NFS教程", prefix: "FileSharing/NFS/", collapsible: true,
	  icon: "/assets/icon/FTP服务器.svg", link: "/FileSharing/NFS/", children: "structure",
	},
	{
	  text: "DNS教程", prefix: "Networks&Firewalls/DNS/", collapsible: true,
	  icon: "/assets/icon/DNS.svg", link: "/Networks&Firewalls/DNS/", children: "structure",
	},
	{
	  text: "Tomcat教程", prefix: "Middleware/Tomcat/", collapsible: true,
	  icon: "/assets/icon/Tomcat.svg", link: "/Middleware/Tomcat/", children: "structure",
	},
	{
	  text: "Rsync教程", prefix: "FileSharing/Rsync/", collapsible: true,
	  icon: "/assets/icon/FTP服务器.svg", link: "/FileSharing/Rsync/", children: "structure",
	},
	{
	  text: "Ansible教程", prefix: "Ansible/", collapsible: true,
	  icon: "/assets/icon/Ansible.svg", link: "/Ansible/", children: "structure",
	},
	{
	  text: "Zabbix教程", prefix: "Zabbix/", collapsible: true, 
	  icon: "/assets/icon/Zabbix.svg", link: "/Zabbix/", children: "structure",
	},

	{ 
	text: "数据结构与算法", prefix: "Arithmetic/DataStructures&Algorithms/", collapsible: true,
	icon: '/assets/icon/数据结构.svg', link: "/Arithmetic/DataStructures&Algorithms/", children: "structure",
	},
	{ 
	text: "密码学算法", prefix: "Arithmetic/Cryptography/", collapsible: true,
	icon: '/assets/icon/Encrypt.svg', link: "/Arithmetic/Cryptography/", children: "structure",
	},
	{ 
	text: "OpenCV视觉算法", prefix: "Arithmetic/OpenCV/", collapsible: true,
	icon: '/assets/icon/opencv.svg', link: "/Arithmetic/OpenCV/", children: "structure",
	},
	{ 
	text: "Yolov视觉算法", prefix: "Arithmetic/Yolov/", collapsible: true,
	icon: '/assets/icon/Yolov.svg', link: "/Arithmetic/Yolov/", children: "structure",
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
