import { createApp } from 'vue'
import './style.css'
import microApp from '@micro-zoe/micro-app' // 引入 micro-app
import App from './App.vue'
import { setupNaiveUI } from './plugins'

// 初始化 micro-app
microApp.start({
  // 这里可以写入全局的配置项，它会应用于所有的子应用
  // ...
  // 全局监听所有子应用的生命周期
  lifeCycles: {
    // ...
  },
})

// 初始化 app 应用
async function setupApp() {
  // 挂载全局 app 节点
  const app = createApp(App)

  // 注册全局的 naive-ui 组件
  setupNaiveUI(app)

  app.mount('#app')
}

await setupApp()
