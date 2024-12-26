export const themeData = JSON.parse("{\"home\":\"/\",\"logo\":\"/img/天阁创客official-白底.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"其他站点\",\"children\":[{\"text\":\"Github\",\"link\":\"https://github.com/xxx252525\"},{\"text\":\"哔哩哔哩\",\"link\":\"https://space.bilibili.com/617633317/?spm_id_from=333.999.0.0\"},{\"text\":\"博客\",\"link\":\"https://tiangesec.org.cn\"}]}],\"sidebar\":[\"/Linux设置Swap分区.md\",\"/Docker可视化工具Portainer安装使用.md\"],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
