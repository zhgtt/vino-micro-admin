import microApp from '@micro-zoe/micro-app' // 引入 micro-app

export function setupMicroApp() {
  // 初始化 micro-app
  microApp.start({
    // 这里可以写入全局的配置项，它会应用于所有的子应用
    // ...
    // 全局监听所有子应用的生命周期
    lifeCycles: {
      // ...
    },
  })
}
