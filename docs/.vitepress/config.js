import { defineConfig } from 'vitepress';

const communityMenu = {
  text: 'Community',
  collapsible: true,
  collapsed: true,
  items: [
    { text: 'Discord', link: 'https://discord.quake.world' },
    { text: 'Twitch', link: 'https://www.twitch.tv/quakeworld' },
    { text: 'QuakeWorld Hub', link: 'https://hub.quakeworld.nu' },
    { text: 'QuakeWorld.nu', link: 'https://www.quakeworld.nu' },
    { text: 'QuakeWorld GFX', link: 'https://gfx.quakeworld.nu' },
    { text: 'QuakeWorld Wiki', link: 'https://www.quakeworld.nu/wiki/Overview' },
  ]
};

const topNavItems = [
  { text: 'Getting started', link: '/info/getting-started' },
  { text: 'Downloads', link: '/info/downloads' },
  { text: 'Documentation', link: '/docs' },
  { text: 'Screenshots', link: '/info/screenshots' },
  { text: 'About', link: '/info/about' },
];

export default defineConfig({
    title: 'ezQuake',
    description: 'a Modern QuakeWorld client',
    lastUpdated: true,
    outDir: '../dist',
    ignoreDeadLinks: true,
    cleanUrls: 'without-subfolders',
    mpa: true,
    markdown: {
      theme: {
        dark: 'github-dark',
        light: 'github-light',
      }
    },
    themeConfig: {
      logo: '/assets/img/ezquake_logo.png',
      nav: topNavItems,
      socialLinks: [
        { icon: 'github', link: 'https://github.com/QW-Group/ezquake-source' },
        { icon: 'discord', link: 'https://discord.quake.world' },
      ],
      editLink: {
        pattern: 'https://github.com/QW-Group/ezquake.com/blob/main/docs/:path'
      },
      sidebar: {
        '/info/': [
          {
            items: topNavItems,
          },
          communityMenu
        ],
        '/docs': [
          {
            items: [
              { text: 'Documentation index', link: '/docs' },
              { text: 'Frequently Asked Questions', link: '/docs/faq' },
              { text: 'File and directory structure', link: '/docs/structure' },
            ]
          },
          {
            text: 'Features',
            items: [
              { text: 'Independent Physics', link: '/docs/independent-physics' },
              { text: 'Message Filtering', link: '/docs/message-filtering' },
              { text: 'Multiview', link: '/docs/multiview' },
              { text: 'Server Browser', link: '/docs/server-browser' },
              { text: 'Scripting', link: '/docs/scripting' },
              { text: 'Teamplay Communication', link: '/docs/teamplay-communication' },
              { text: 'Video Capture', link: '/docs/video-capture' },
              { text: 'Voice Support', link: '/docs/voice-support' },
              { text: 'Weapon Scripts', link: '/docs/weapon-scripts' },
            ]
          },
          {
            text: 'Graphics',
            items: [
              { text: 'Crosshairs', link: '/docs/crosshairs' },
              { text: 'Charsets', link: '/docs/charsets' },
              { text: 'Fakeshaft', link: '/docs/fakeshaft' },
              { text: 'Frag Tracker', link: '/docs/frag-tracker' },
              { text: 'Heads Up Display (HUD)', link: '/docs/hud' },
              { text: 'Particles', link: '/docs/particles' },
              { text: 'Player Skins', link: '/docs/player-skins' },
              { text: 'Textures', link: '/docs/textures' },
            ]
          },
          {
            text: 'Reference',
            items: [
              { text: 'Commands', link: '/docs/commands' },
              { text: 'Command Line Parameters', link: '/docs/command-line-parameters' },
              { text: 'Macros', link: '/docs/macros' },
            ]
          },
          {
            text: 'Settings reference',
            items: [
              { text: 'Demos', link: '/docs/settings/demos' },
              { text: 'Graphics ', link: '/docs/settings/graphics' },
              { text: 'HUD', link: '/docs/settings/hud' },
              { text: 'Input', link: '/docs/settings/input' },
              { text: 'Miscellaneous', link: '/docs/settings/miscellaneous' },
              { text: 'Multiplayer', link: '/docs/settings/multiplayer' },
              { text: 'Server', link: '/docs/settings/server' },
              { text: 'Sound', link: '/docs/settings/sound' },
              { text: 'Teamplay', link: '/docs/settings/teamplay' },
            ]
          },
          {
            text: 'Misc',
            items: [
              { text: 'Upgrading', link: '/docs/upgrading' },
            ]
          },
          communityMenu
        ]
      }
    }
  }
)
