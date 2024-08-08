/**
 * 注册全局 naive 的组件，只注册一些常用的组件
 */
import type { App } from 'vue'
import {
  // components
  NButton,
  NCard,
  // create naive ui
  create,
} from 'naive-ui'

export function setupNaiveUI(app: App) {
  const naive = create({
    components: [
      NButton,
      NCard,
    ],
  })
  app.use(naive)
}
