import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "天阁创客official的三味书屋",
  description: "三味书屋包含大量的IT教程",
  

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
