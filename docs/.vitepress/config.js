import { createContentLoader, defineConfig } from "vitepress";
import { SitemapStream } from "sitemap";
import { createWriteStream } from "node:fs";
import { resolve } from "node:path";

import menus from "./menus";
import sidebars from "./sidebars";

export default defineConfig({
  title: "ezQuake",
  description: "a Modern QuakeWorld client",
  lastUpdated: true,
  outDir: "../dist",
  ignoreDeadLinks: true,
  //cleanUrls: 'without-subfolders',
  vite: {
    define: {
      global: {},
    },
  },
  themeConfig: {
    logo: "/assets/img/ezquake_logo.png",
    nav: menus.main.items,
    algolia: {
      appId: "VSG96RBFXW",
      apiKey: "aad1ee0a7b2c2bfddfd4ab1beec7332e",
      indexName: "ezquake",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/QW-Group/ezquake-source" },
      { icon: "discord", link: "https://discord.quake.world" },
    ],
    editLink: {
      pattern: "https://github.com/QW-Group/ezquake.com/edit/main/docs/:path",
    },
    sidebar: {
      "/info/": sidebars.info,
      "/docs": sidebars.documentation,
    },
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: "https://ezquake.com/" });
    const pages = await createContentLoader("**/*.md").load();
    const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));

    sitemap.pipe(writeStream);
    pages.forEach((page) =>
      sitemap.write(
        page.url
          // Strip `index.html` from URL
          .replace(/index.html$/g, "")
      )
    );
    sitemap.end();

    await new Promise((r) => writeStream.on("finish", r));
  },
});
