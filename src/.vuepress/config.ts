import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { noticePlugin } from "@vuepress/plugin-notice";
import { repl } from 'vue/repl';

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
    // 可以保持插件列表空或者添加其他插件
  ],
  
  themeConfig: {
    // 配置 icon 相关内容
    plugins: {
      // icon: {
      //   assets: 'fontawesome-with-brands', // 替换为你的图标资源路径
      // },
      notice: { // 在 themeConfig 中配置 notice 插件
        message: "公告",
        path: "/", // 匹配所有路径
        title: "公告 (必看) ",
        content: "招募作者完善其他方向的教程，例如：前端、后端、游戏开发、嵌入式、区块链",
        showOnce: true,
        actions: [
          {
            text: "联系方式",
            link: "https://qm.qq.com/q/U9YDo0K5EK",
            type: "primary",
          },
        ],
      },
      // 将 docsearch 插件的配置放到 themeConfig 的 docsearch 中
      docsearch: {
        appId: 'your-app-id',  // 在 DocSearch 设置中获得的 appId
        apiKey: 'your-api-key',  // 在 DocSearch 设置中获得的 apiKey
        indexName: 'your-index-name',  // 在 DocSearch 设置中获得的 indexName
        placeholder: '搜索文档',  // 搜索框的提示文本
      },
    },
  },
});
