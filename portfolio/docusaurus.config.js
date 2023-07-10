// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Portfolio',
  tagline: 'Ing. Andrea Ferrari',
  url: 'https://github.com/FerrariAndrea',
  baseUrl: '/MyPortfolio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FerrariAndrea', // Usually your GitHub org/user name.
  projectName: 'MyPortfolio', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/FerrariAndrea/MyPortfolio/tree/main',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/FerrariAndrea/MyPortfolio/tree/main',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ing. Andrea Ferrari',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Me.png',
        },
        items: [
          {to: 'docs/category/works', label: 'My Works', position: 'left'},
          {to: 'docs/category/projects', label: 'My open source projects', position: 'left'},
          {
            href: 'https://github.com/FerrariAndrea',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
          },
          {},
          {
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Portfolio, Inc. Built with Docusaurus. Last update: ${new Date().toLocaleDateString()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
