// https://vitejs.cn/guide/build.html#library-mode
// @ts-ignore
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  publicDir: false,
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/packages'),
      name: 'ak-vue3',
      fileName: format => `ak-vue3.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'axios', 'vueRouter'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
