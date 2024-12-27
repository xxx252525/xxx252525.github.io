import { CodeTabs } from "E:/Programe/Git/xxx252525.github.io-old/xxx252525.github.io-main/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/Programe/Git/xxx252525.github.io-old/xxx252525.github.io-main/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/Programe/Git/xxx252525.github.io-old/xxx252525.github.io-main/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
