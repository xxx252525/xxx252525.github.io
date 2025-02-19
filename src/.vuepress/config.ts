import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { noticePlugin } from "@vuepress/plugin-notice";
import { repl } from '@vue/repl';
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { headersPlugin } from '@mdit-vue/plugin-headers';


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "天阁创客的三味书屋",
  description: "三味书屋包含大量的IT教程",
  pageInfo: true,
  theme,
  markdown: {
    toc: { includeLevel: [2, 3, 4, 5, 6] },
    headers: { level: [2, 3, 4, 5, 6] },
  },

  plugins: [
    docsearchPlugin({
      appId: 'G4HN6M8APR',  // 在 DocSearch 设置中获得的 appId
      apiKey: '499a24e1cd5fddbb2f76fe46bd3c4530',  // 在 DocSearch 设置中获得的 apiKey
      indexName: 'xxx252525io',  // 在 DocSearch 设置中获得的 indexName
      placeholder: '搜索文档',  // 搜索框的提示文本
    }),
	noticePlugin({
      config: [{
        // message: "公告",
        path: "/", 
        title: "公告 (重要通知) ",
        content: `
		<p>发布时间：2025年2月10日</p>
        <p>本站招募作者完善其他方向的教程，例如：</p>
          <ul>
          <li>前端</li>
          <li>后端</li>
          <li>游戏开发</li>
          <li>嵌入式</li>
          <li>区块链</li>
          </ul>
          投稿详情请点击以下按钮：
        `,
        showOnce: false,
        fullscreen: false,
        confirm: false,
        actions: [
        {
          text: "投稿须知",
          link: "/公告.md",
          type: "primary",
        },
		{
		  text: "下次提醒",
          type: "primary",
		},
      ],
      }],
	}),
	// headersPlugin({
	//   // 可选配置，确保标题级别显示
	//   level: [1, 2, 3, 4, 5, 6],
	// }),
  ],

  
});
