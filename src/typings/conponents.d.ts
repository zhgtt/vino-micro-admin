/**
 * 注册全局组件 & 类型
 */
declare module 'vue' {
  export interface GlobalComponents {
    // naive-ui
    NButton: typeof import('naive-ui')['NButton']
    NCard: typeof import('naive-ui')['NCard']
  }
}
