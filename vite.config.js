import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({ typescript: true })  // 启用 TypeScript 类型检查
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))  // 配置路径别名
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']  // 支持多种文件扩展名
  }
})
