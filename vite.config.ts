import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// @ts-ignore 忽略模块声明文件缺失的错误
import postcsspxtoviewport from 'postcss-px-to-viewport'
import viteImagemin from 'vite-plugin-imagemin'
// import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()], // 自动解析 Vant 组件
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 4
      },
      mozjpeg: {
        quality: 60
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    // visualizer({
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true
    // })
  ],
  build: {
    // 启用 brotli 和 gzip 压缩
    // brotliSize 选项已在 Vite 4.0 中移除，改用 reportCompressedSize
    reportCompressedSize: true,
    minify: 'esbuild',
    sourcemap: false,
  },
  base: '/',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 将 @ 映射为 src 目录
    }
  },
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
    },
  }
})
