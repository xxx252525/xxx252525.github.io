import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';


export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // Home
	home: '/',
	logo: '/image/天阁创客official-白底.png',
	colorMode: 'dark',
	colorModeSwitch: true,
	externalLinkIcon: true,
    navbar: [
      { text: '首页', link: '/' },
	  { text: '博客', link: 'https://tiangesec.org.cn' },
	  { text: 'Github', link: 'https://github.com/xxx252525' },
      {
        text: '其他站点',
        children: [
          { text: '哔哩哔哩', link: 'https://space.bilibili.com/617633317/?spm_id_from=333.999.0.0' },
		  { text: 'QQ裙', link: 'https://qm.qq.com/q/okZnwSNtPq'}
        ],
      },
    ],
	sidebar: {
	  '/': [
		{
		  text: 'Linux',
		  collapse: true, // 注意：应该是 "collapse"，不是 "coolapse"
		  children: [
			'/Linux设置Swap分区.md',
			'/Docker可视化工具Portainer安装使用.md'
		  ]
		},
		{
		  text: 'Android',
		  collapse: true, 
		  prefix: '/Android/',
		  children: [
			  'Android开发入门.md'
		  ]
		}
	  ]
	},
	  
  }),
  title: '天阁创客official的三味书屋',
  description: '涵盖诸多教程',
});
