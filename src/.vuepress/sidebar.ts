import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "计算机基础",
      prefix: "网络安全/",
      link: "网络安全/",
      children: "structure",
    },
    {
      text: "编程基础",
      prefix: "运维/",
      link: "运维/",
      children: "structure",
    },
	{
	  text: "开发区",
	  prefix: "前端/",
	  link: "前端/",
	  children: "structure",
	},
	{
	  text: "运维区",
	  prefix: "后端/",
	  link: "后端/",
	  children: "structure",
	},
	{
	  text: "算法区",
	  prefix: "Arithmetic/",
	  link: "Arithmetic/",
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
