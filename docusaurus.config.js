// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ARterra Labs',
  tagline: 'Start Collecting ESports and Gaming Digital Collectibles',
  url: 'https://docs.arterra.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'ARterraCo', // Usually your GitHub org/user name.
  projectName: 'arterraco.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ARterraCo/arterraco.github.io/tree/main/',
          versions: {
            current: { label: `v0.0.23-v0.0.19` },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ARterraCo/arterraco.github.io/tree/main/',
        },
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
        title: 'ARterra Labs',
        logo: { alt: 'ARterra Labs Logo', src: 'img/logo.png' },
        items: [
          // left
          { label: 'Tutorial', type: 'doc', docId: 'intro', position: 'left' },
          { to: '/blog', label: 'Example Blog', position: 'left' },
          // right
          { type: 'docsVersionDropdown', position: 'right' },
          { type: 'localeDropdown', position: 'right' },
          {
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            href: 'https://github.com/ARterraCo/arterraco.github.io',
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
              { label: 'Tutorial', to: '/docs/intro' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discord.com/invite/xAD2cTsHZG' },
              { label: 'Twitter', href: 'https://twitter.com/ARterraLabs' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/ARterraCo/arterraco.github.io' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ARterra Labs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
