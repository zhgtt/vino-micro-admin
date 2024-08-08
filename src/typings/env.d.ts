import type { ImportMetaEnv } from 'vite/types/importMeta'

/**
 * @description: 对 env 进行类型声明
 *
 * 用于声明 import.meta 对象中环境变量的类型
 */
declare namespace Env {
  // 声明 Env.ImportMeta 类型
  interface ImportMeta extends ImportMetaEnv {
    // 项目基础路径
    readonly BASE_URL: string
  }
}

interface ImportMeta {
  readonly env: Env.ImportMeta
}
