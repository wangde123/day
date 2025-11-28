import { defineConfig } from "umi";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/day/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/day/' : '/',
  history: { type: 'hash' },
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
