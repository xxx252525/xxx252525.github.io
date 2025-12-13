import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { repl } from '@vue/repl';
import HeadPlugin from "vuepress-plugin-head";
import Giscus from 'giscus';
import vuepressPluginGiscus from "vuepress-plugin-giscus";
import { commentPlugin } from '@vuepress/plugin-comment';

export default hopeTheme({
  hostname: "https://xxx252525.github.io",

  author: {
    name: "小青瑶🍥⚧[前天阁创客official]",
    url: "https://github.com/xxx252525",
    email: "tiangesec@qq.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.png",

  repo: "xxx252525/xxx252525.github.io",

  docsDir: "src",
  
  // pageinfo: ["Author", "Date", "Category", "Original", "Tag", "ReadingTime", "Word","PageView"],

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "",
  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      // "": ["wxses@5555"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
	alert: true,
	vuePlayground: true,

    // 取消注释它们如果你需要 TeX 支持
    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  //存在BUG暂时不启用
  plugins: {
    comment: {
      provider: "Giscus",
      repo: "xxx252525/xxx252525.github.io",
      repoId: "R_kgDON38RVw",
      category: "Announcements",
      categoryId: "DIC_kwDON38RV84Cm5NY",
      mapping: "pathname",
      strict: false,
      reactionsEnabled: true,
	  inputPosition: "bottom",
	  embedComments: false,
	  lightTheme: "light",
      darkTheme: "dark",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    //存在BUG暂时不启用
  HeadPlugin: {
    head: [
    [
      "script", // 正确的字符串格式
       {
        src: "https://giscus.app/client.js",
        "data-repo": "xxx252525/xxx252525.github.io",
        "data-repo-id": "R_kgDON38RVw",
        "data-category": "General",
        "data-category-id": "DIC_kwDON38RV84Cm5NY",
        "data-mapping": "pathname",
        "data-strict": "0",
        "data-reactions-enabled": "1",
        "data-emit-metadata": "0",
        "data-input-position": "bottom",
        "data-theme": "noborder_light",
        "data-lang": "en-US",
        crossorigin: "anonymous",
        async: true,
        },
    ],
    ],
  },



    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
