export const SEARCH_INDEX = [
  {
    "title": "",
    "headers": [],
    "path": "/timeline.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/posts.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/friendship-link.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Portainer介绍",
    "headers": [
      {
        "level": 2,
        "title": "部署Portainer服务器",
        "slug": "部署portainer服务器",
        "link": "#部署portainer服务器",
        "children": [
          {
            "level": 3,
            "title": "部署portainer-ce",
            "slug": "部署portainer-ce",
            "link": "#部署portainer-ce",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "进入portainer",
        "slug": "进入portainer",
        "link": "#进入portainer",
        "children": []
      }
    ],
    "path": "/DockerkeshihuagongjuPortaineranzhuangshiyong.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Swap分区介绍",
    "headers": [
      {
        "level": 2,
        "title": "Swap开关设置",
        "slug": "swap开关设置",
        "link": "#swap开关设置",
        "children": []
      },
      {
        "level": 2,
        "title": "Swap的优先级",
        "slug": "swap的优先级",
        "link": "#swap的优先级",
        "children": []
      }
    ],
    "path": "/LinuxshezhiSwapfenqu.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Hello VuePress",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
