import { defineConfig } from 'vitepress';

import menus from "./menus"
import sidebars from "./sidebars"

export default defineConfig({
    title: 'ezQuake',
    description: 'a Modern QuakeWorld client',
    lastUpdated: true,
    outDir: '../dist',
    ignoreDeadLinks: true,
    //cleanUrls: 'without-subfolders',
    vite: {
      define: {
        global: {}
      }
    },
    themeConfig: {
      logo: '/assets/img/ezquake_logo.png',
      nav: menus.main.items,
      socialLinks: [
        { icon: 'github', link: 'https://github.com/QW-Group/ezquake-source' },
        { icon: 'discord', link: 'https://discord.quake.world' },
      ],
      editLink: {
        pattern: 'https://github.com/QW-Group/ezquake.com/edit/main/docs/:path'
      },
      sidebar: {
        '/info/': sidebars.info,
        '/docs': sidebars.documentation
      }
    }
  }
)
