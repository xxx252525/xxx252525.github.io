export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/Docker%E5%8F%AF%E8%A7%86%E5%8C%96%E5%B7%A5%E5%85%B7Portainer%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8.html", { loader: () => import(/* webpackChunkName: "Docker可视化工具Portainer安装使用.html" */"E:/Programe/Git/xxx252525.github.io/docs/.vuepress/.temp/pages/Docker可视化工具Portainer安装使用.html.js"), meta: {"title":"Portainer介绍"} }],
  ["/Linux%E8%AE%BE%E7%BD%AESwap%E5%88%86%E5%8C%BA.html", { loader: () => import(/* webpackChunkName: "Linux设置Swap分区.html" */"E:/Programe/Git/xxx252525.github.io/docs/.vuepress/.temp/pages/Linux设置Swap分区.html.js"), meta: {"title":"Swap分区介绍"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Programe/Git/xxx252525.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/Android/Android%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "Android_Android开发入门.html" */"E:/Programe/Git/xxx252525.github.io/docs/.vuepress/.temp/pages/Android/Android开发入门.html.js"), meta: {"title":"Android入门开发"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Programe/Git/xxx252525.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
