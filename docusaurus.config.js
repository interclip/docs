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
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'beta_warning',
      content:
        'Welcome to our brand new docs! They are still in active development, so please, keep that in mind, and if you find anything wrong, <a target="_blank" rel="noreferrer noopener" href="https://github.com/aperta-principium/Interclip-docs/issues/new">submit an issue!</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
    },
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
              to: '/',
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
