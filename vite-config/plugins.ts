import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCss from 'unocss/vite'

/**
 * vite 相关的所有插件都在这里定义 & 注册
 * @param viteEnv - vite 环境变量
 * @param isBuild - 是否为打包状态
 */
export function setupVitePlugins(viteEnv: Env.importMeta, isBuild = false) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    UnoCss(),
  ]

  return vitePlugins
}
