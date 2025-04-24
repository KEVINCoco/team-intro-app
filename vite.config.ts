import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore 忽略模块声明文件缺失的错误
import postcsspxtoviewport from 'postcss-px-to-viewport'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  css: {
    postcss: {
      // 自动读取 postcss.config.js
      plugins: [
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转换的单位
          viewportWidth: 375,  // 设计稿宽度（一般以 iPhone 6/7/8 的 375px 为标准）
          unitPrecision: 5,     // 转换后的精度（小数位数）
          propList: ['*'],      // 需要转换的属性（* 表示全部）
          viewportUnit: 'vw',   // 转换成的单位
          fontViewportUnit: 'vw', // 字体转换单位
          selectorBlackList: [], // 不转换的选择器（如 .ignore-*）
          minPixelValue: 1,     // 最小转换像素值
          mediaQuery: false,    // 是否转换媒体查询里的 px
          replace: true,        // 是否直接替换值
          exclude: undefined,  // 忽略某些文件（如 /node_modules/）
          include: undefined,   // 只匹配某些文件
          landscape: false,     // 是否处理横屏模式
          landscapeUnit: 'vw',  // 横屏单位
          landscapeWidth: 568   // 横屏宽度
        })
      ]
    }
  }
})
