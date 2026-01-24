import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { noticePlugin } from "@vuepress/plugin-notice";
import { repl } from '@vue/repl';
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { headersPlugin } from '@mdit-vue/plugin-headers';


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "天韵阁",
  description: "天韵阁包含大量的IT教程",
  pageInfo: true,
  // pageinfo: ["Author", "Date", "Category", "Original", "Tag", "ReadingTime", "Word","PageView"],
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
        title: "公告 ",
        content: `
				<h3>2026年1月20日更新</h3>
				<p> 
				本站所有原创内容（包括但不限于文章、教程、图片、排版设计）仅供个人学习与参考。<br/>
				未经作者明确书面许可，禁止任何形式的：
        <ul>
        <li>转载</li>
        <li>摘编</li>
        <li>镜像</li>
				<li>商业使用</li>
				<li>二次发布</li>
        </ul>
				违者保留追究法律责任的权利。
				</p>
        <p>本站招募作者完善其他方向的教程，例如：</p>
          <ul>
          <li>前端</li>
          <li>后端</li>
          <li>游戏开发</li>
          </ul>
        <p>投稿详情请点击以下按钮：</p>
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
