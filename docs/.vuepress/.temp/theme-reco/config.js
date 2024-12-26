
  import { defineAsyncComponent } from 'vue'
import { defineClientConfig } from 'vuepress/client'

import { applyClientSetup } from 'E:/Programe/Git/xxx252525.github.io/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.25_@algolia+client-search@5.18.0_@types+node@22.10.2_@vue+compil_n67aes2d36hcnry5t4z2yeycmm/node_modules/vuepress-theme-reco/lib/client/clientSetup.js'
import { applyClientEnhance } from 'E:/Programe/Git/xxx252525.github.io/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.25_@algolia+client-search@5.18.0_@types+node@22.10.2_@vue+compil_n67aes2d36hcnry5t4z2yeycmm/node_modules/vuepress-theme-reco/lib/client/clientEnhance.js'

import * as layouts from 'E:/Programe/Git/xxx252525.github.io/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.25_@algolia+client-search@5.18.0_@types+node@22.10.2_@vue+compil_n67aes2d36hcnry5t4z2yeycmm/node_modules/vuepress-theme-reco/lib/client/layouts/index.js'

  const layoutsFromDir = {}
export default defineClientConfig({
  enhance(...args) {
    applyClientEnhance(...args)
  },
  setup() {
    applyClientSetup()
  },
  // @ts-ignore
  layouts: { ...layouts, ...layoutsFromDir },
})
