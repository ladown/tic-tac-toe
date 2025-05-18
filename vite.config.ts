import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import svgLoader from 'vite-svg-loader';

let SVG_ICON_PREFIX_ID_COUNTER = 0;

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader({
      defaultImport: 'component',
      svgo: true,
      svgoConfig: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false
              }
            }
          },
          {
            name: 'convertColors',
            params: {
              currentColor: true
            }
          },
          {
            name: 'removeAttrs',
            params: {
              attrs: ['width', 'height']
            }
          },
          {
            name: 'prefixIds',
            params: {
              prefix: () => `${SVG_ICON_PREFIX_ID_COUNTER++}`
            }
          }
        ]
      }

    })
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '~app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '~pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '~widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
      '~features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '~entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
      '~shared': fileURLToPath(new URL('./src/shared', import.meta.url))
    }
  }
});
