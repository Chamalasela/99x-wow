// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Way of work",
  tagline: "Knowledge base for 99x ",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://chamalasela.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/99x-wow",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "chamalasela", // Usually your GitHub org/user name.
  projectName: "99x-way-of-work", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "WoW",
        logo: {
          alt: "99x",
          src: "img/logo.png",
        },
        items: [
          { to: "/docs/intro", label: "Knowlege Base", position: "right" },
          {
            href: "https://github.com/99x/architecture.99x.io",
            label: "Contribute",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Our Products",
            items: [
              {
                label: "Team On Cloud",
                href: "https://www.teamon.online/99x",
              },
              {
                label: "99x Labs",
                href: "https://labs.99x.io/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                href: "https://web.facebook.com/99xio",
              },
              {
                label: "Twitter",
                href: "https://x.com/99x_io",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/99x.io/",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/99xio/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://99x.io/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 2024 - 99x All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
