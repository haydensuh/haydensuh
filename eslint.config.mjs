import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'plugin:mdx/recommended',
  ),
  {
    files: ['**/*.{ts,tsx,mdx}'],
    rules: {
      'react/no-unescaped-entities': 'off', // 따옴표 관련 에러 끄기
    },
  },
]

export default eslintConfig
