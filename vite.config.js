import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import imageminWebp from 'imagemin-webp';
import IconSpritePlugin from './plugins/vite-plugin-icon-sprite.js';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    }),
    ViteImageOptimizer({
      test: /\.(gif|tiff|webp|svg|avif)$/i,
      jpg: {
        quality: 75,
      },
      png: {
        quality: 75,
      }
    }),
    viteImagemin({
      plugins: {
        jpg: imageminWebp(),
        png: imageminWebp(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp(),
        },
      },
    }),
    IconSpritePlugin(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|webp|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          if (/woff2|woff/i.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    assetsInlineLimit: 0,
  },
  server: {
    open: true,
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'Images': path.resolve(__dirname, 'src/assets/img'),
      'Fonts': path.resolve(__dirname, 'src/assets/fonts'),
    }
  }
})
