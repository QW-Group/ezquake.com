import menus from "./menus";

export const documentation = [
  {
    items: [
      { text: 'Documentation index', link: '/docs' },
      { text: 'Frequently Asked Questions', link: '/docs/faq' },
    ]
  },
  menus.features,
  menus.graphics,
  menus.reference,
  menus.settingsReference,
  menus.misc,
  menus.sourceCode,
  menus.community
];

export const info = [
  menus.main,
  menus.community
]

export default {
  info,
  documentation
}
