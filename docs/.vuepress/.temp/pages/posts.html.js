import comp from "E:/Programe/Git/xxx252525.github.io/docs/.vuepress/.temp/pages/posts.html.vue"
const data = JSON.parse("{\"path\":\"/posts.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"Posts\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
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
