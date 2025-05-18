import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';
import pluginVitest from '@vitest/eslint-plugin';
import pluginPlaywright from 'eslint-plugin-playwright';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,ts,mts,tsx,vue}']
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'playwright-report/**', 'test-results/**']),

  stylistic.configs.recommended,
  pluginVue.configs['flat/base'],
  pluginVue.configs['flat/essential'],
  pluginVue.configs['flat/recommended'],
  pluginVue.configs['flat/strongly-recommended'],
  vueTsConfigs.recommended,

  {
    rules: {
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: false
        }
      }],
      'vue/html-self-closing': ['warn',
        {
          html: {
            void: 'always'
          }
        }
      ],
      'vue/max-attributes-per-line': [
        'warn',
        {
          singleline: {
            max: 3
          },
          multiline: {
            max: 1
          }
        }
      ],
      '@typescript-eslint/naming-convention': ['error',
        {
          selector: 'interface',
          format: ['PascalCase']
        },
        {
          selector: 'typeLike',
          format: ['PascalCase']
        },
        {
          selector: 'enum',
          format: ['PascalCase']
        },
        {
          selector: 'function',
          format: ['camelCase']
        }
      ]
    }
  },
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*']
  },
  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}']
  }
);
