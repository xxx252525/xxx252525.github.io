import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "计算机基础",
      prefix: "计算机基础/",
	  icon: "/assets/icon/计算机.svg",
      children: [
        {
          text: "Linux",
          link: "/Linux/",
        },
        {
          text: "BashShell",
          link: "/Shell/",
        },
      ],
    },
    {
      text: "编程基础",
      prefix: "编程基础/",
	  icon: "/assets/icon/Code.svg",
      children: [
        {
          text: "C",
          link: "/C/",
        },
		{
		  text: "C++",
		  link: "/C++/",
		},
		{
		  text: "Java",
		  link: "/Java/",
		},
		{
		  text: "Python",
		  link: "/Python/",
		},
		{
		  text: "PHP",
		  link: "/PHP/",
		},
		{
		  text: "HTML",
		  link: "/HTML5&CSS3/",
		},
		{
		  text: "CSS",
		  link: "/HTML5&CSS3/",
		},
		{
		  text: "JavaScript",
		  link: "/JavaScript/",
		},
		{
		  text: "NodeJS",
		  link: "/NodeJS/",
		},
		{
		  text: "MySQL",
		  link: "/Database/MySQL/",
		},
		{
		  text: "ARM汇编",
		  link: "/Compilation/ARM/",
		},
		{
		  text: "X86_X64汇编",
		  link: "/Compilation/X86/",
		},
		{
		  text: "RISC-V汇编",
		  link: "/Compilation/RISC-V/",
		},
		{
		  text: "LoongArch汇编",
		  link: "/Compilation/LoongArch/",
		},
      ],
    },
	{
      text: "开发进阶",
      prefix: "开发进阶/",
	  icon: "/assets/icon/开发定制.svg",
	  children: [
        {
          text: "CMake",
          link: "/Cmake/",
        },
        {
          text: "Django",
          link: "/janngo/",
        },
        {
          text: "Gadle",
          link: "/radle/",
        },
        {
          text: "JQuery",
          link: "/JQuery/",
        },
        {
          text: "Vue3",
          link: "/Vue/",
        },
        {
          text: "uniapp",
          link: "/uniapp/",
        },
        {
          text: "Git",
          link: "/Git/",
        },
        {
          text: "Unity",
          link: "/Unity/",
        },
        {
          text: "Godot",
          link: "/Godot/",
        },
        {
          text: "UE5",
          link: "/UE5/",
        },
        {
          text: "Blender",
          link: "/Blender/",
        },
        {
          text: "Arduino",
          link: "/Adruino/",
        },
        {
          text: "Keil",
          link: "/Keil/",
        },
        {
          text: "51单片机开发",
          link: "/C51/",
        },
        {
          text: "STM32开发",
          link: "/STM32/",
        },
        {
          text: "ESP32开发",
          link: "/ESP32/",
        },
        {
          text: "树莓派教程",
          link: "/Raspberry/",
        },
        {
          text: "RTOS开发",
          link: "/RTOS/",
        },
        {
          text: "Linux嵌入式",
          link: "/LinuxEmbedded/",
        },
	  ],
	},
	{
	  text: "运维区",
	  prefix: "运维区/",
	  icon: "/assets/icon/云运维.svg",
	  children: [
        {
          text: "Apache",
          link: "/Middleware/Apache/",
        },
		{
		  text: "Nginx",
		  link: "/Middleware/Nginx/",
		},
		{
		  text: "OpenResty",
		  link: "/Middleware/OpenResty/",
		},
		{
		  text: "Docker",
		  link: "/Docker/",
		},
		{
		  text: "Mongodb",
		  link: "/Database/Mongodb/",
		},
		{
		  text: "Redis",
		  link: "/Database/Redis/",
		},
		{
		  text: "DHCP",
		  link: "/Networks&Firewalls/DHCP/",
		},
		{
		  text: "FTP",
		  link: "/FileSharing/FTP/",
		},
		{
		  text: "NFS",
		  link: "/FileSharing/NFS/",
		},
		{
		  text: "DNS",
		  link: "/Networks&Firewalls/DNS/",
		},
		{
		  text: "Tomcat",
		  link: "/Middleware/Tomcat/",
		},
		{
		  text: "Rsync",
		  link: "/FileSharing/Rsync/",
		},
		{
		  text: "Ansible",
		  link: "/Ansible/",
		},
		{
		  text: "Zabbix",
		  link: "/Zabbix/",
		},
	  ],
	},
	{
	  text: "算法区",
	  prefix: "Arithmetic/",
	  icon: "/assets/icon/算法2.svg",
	  children: "structure",
	},
	{
	  text: "区块链",
	  prefix: "区块链/",
	  icon: "/assets/icon/UBQ 区块链.svg",
	  children: "structure",
	},
	{
	  text: "逆向安全",
	  prefix: "逆向安全/",
	  icon: "/assets/icon/SRC.svg",
	  children: "structure",
	},
  ],
});
