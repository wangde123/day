import { defineConfig } from "umi";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/day/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/day/' : '/',
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  history: { type: 'hash' }, // 添加这行！
});
