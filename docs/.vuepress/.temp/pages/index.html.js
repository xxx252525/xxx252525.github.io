import comp from "E:/Programe/Git/xxx252525.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Hello VuePress\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1735280016000,\"contributors\":[{\"name\":\"xxx252525\",\"username\":\"xxx252525\",\"email\":\"1072441436@qq.com\",\"commits\":2,\"url\":\"https://github.com/xxx252525\"},{\"name\":\"天阁创客official\",\"username\":\"天阁创客official\",\"email\":\"104115333+xxx252525@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/天阁创客official\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
