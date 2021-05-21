import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: './', // 设置打包路径
  server: {
    port: 8888, // 启动服务端口号
    open: true, // 自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api': {
        target: 'http://xxx.xxx.xxx.xxx:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/'),
      },
    },
  },
});
