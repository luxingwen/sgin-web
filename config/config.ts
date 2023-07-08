import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import routes from './routes';
import { join } from 'path';

export default defineConfig({
  favicons: ['/github-logo.jpg'],
  esbuildMinifyIIFE: true,
  codeSplitting: { jsStrategy: 'granularChunks' },
  ignoreMomentLocale: true,
  fastRefresh: true,
  hash: true,
  crossorigin: {},
  deadCode: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Sgin',
  },
  routes,
  proxy,
  npmClient: 'pnpm',
  tailwindcss: {},
  icons: {},
  valtio: {},
});
