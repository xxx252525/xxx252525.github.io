import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { noticePlugin } from "@vuepress/plugin-notice";
import { repl } from '@vue/repl';
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "天阁创客的三味书屋",
  description: "三味书屋包含大量的IT教程",
  pageInfo: true,
  theme,
  markdown: {
    level: [1, 2, 3, 4, 5, 6],
  },
  
  plugins: [
    docsearchPlugin({
      appId: 'G4HN6M8APR',  // 在 DocSearch 设置中获得的 appId
      apiKey: '499a24e1cd5fddbb2f76fe46bd3c4530',  // 在 DocSearch 设置中获得的 apiKey
      indexName: 'xxx252525io',  // 在 DocSearch 设置中获得的 indexName
      placeholder: '搜索文档',  // 搜索框的提示文本
    }),
	noticePlugin({
      message: "公告",
      path: "/", // 匹配所有路径
      title: "公告 (必看) ",
      content: "招募作者完善其他方向的教程，例如：前端、后端、游戏开发、嵌入式、区块链",
      showOnce: true,
      fullscreen: true,
	  confirm: true,
      actions: [
        {
          text: "联系方式",
          link: "https://qm.qq.com/q/U9YDo0K5EK",
          type: "primary",
        },
      ],
	}),
  ],

  
  // themeConfig: {
  //   notice: { // 在 themeConfig 中配置 notice 插件
  //     message: "公告",
  //     path: "/", // 匹配所有路径
  //     title: "公告 (必看) ",
  //     content: "招募作者完善其他方向的教程，例如：前端、后端、游戏开发、嵌入式、区块链",
  //     showOnce: true,
  //     actions: [
  //       {
  //         text: "联系方式",
  //         link: "https://qm.qq.com/q/U9YDo0K5EK",
  //         type: "primary",
  //       },
  //     ],
  //   },
  // },
  
});
