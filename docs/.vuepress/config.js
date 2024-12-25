import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})

module.exports = {
  title: '天阁创客official的书屋',
  description: '涵盖诸多教程',
      themeConfig: {
          nav: [
              { text: '首页', link: '/' },
              { 
                  text: '天阁创客official的书屋', 
                  items: [
                      { text: 'Github', link: 'https://github.com/xxx252525' },
                      { text: '哔哩哔哩', link: 'https://space.bilibili.com/617633317/?spm_id_from=333.999.0.0' }
                  ]
              }
          ]
      }
}
