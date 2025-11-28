import { defineConfig } from "umi";

export default defineConfig({
  base:  '/day/',
  publicPath:'/day/',
  history: { type: 'hash' },
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
