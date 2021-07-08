const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Interclip docs',
  tagline: 'All about Interclip',
  url: 'https://docs.interclip.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aperta-principium', // Usually your GitHub org/user name.
  projectName: 'Interclip', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Interclip docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://blog.trnck.dev',
          label: 'Blog',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Welcome',
              to: '/docs/Welcome',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/filiptronicek',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: "Filip's Blog",
              href: 'https://blog.trnck.dev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/aperta-principium/Interclip',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Interclip.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/aperta-principium/Interclip-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
