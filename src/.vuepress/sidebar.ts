import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "网络安全区",
      prefix: "网络安全/",
      link: "网络安全/",
      children: "structure",
    },
    {
      text: "运维",
      prefix: "运维/",
      link: "运维/",
      children: "structure",
    },
	{
	  text: "前端",
	  prefix: "前端/",
	  link: "前端/",
	  children: "structure",
	},
	{
	  text: "后端",
	  prefix: "后端/",
	  link: "后端/",
	  children: "structure",
	},
	{
	  text: "游戏开发",
	  prefix: "游戏开发/",
	  link: "游戏开发/",
	  children: "structure",
	},
	{
	  text: "嵌入式开发",
	  prefix: "嵌入式开发/",
	  link: "嵌入式开发/",
	  children: "structure",
	},
	{
	  text: "算法",
	  prefix: "算法/",
	  link: "算法/",
	  children: "structure",
	},
	{
	  text: "区块链",
	  prefix: "区块链/",
	  link: "区块链/",
	  children: "structure",
	},
  ],
});
