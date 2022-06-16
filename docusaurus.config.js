// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "雙龍體育幫助文檔  ",
  tagline: "直接從我們的團隊獲得説明....  ",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src:
            "https://i.ibb.co/2YDj3pm/2022-02-28-004341-removebg-preview-1.png"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "文檔"
          },
          {
            to: "http://community.ssangyongsports.eu.org/",
            label: "社區",
            position: "left"
          },
          {
            href: "https://www.ssangyongsports.eu.org/",
            label: "官網",
            position: "right"
          },
          {
            to: "/BLOG",
            label: "支援團隊BLOG",
            position: "left"
          }
        ]
      },
      footer: {
        style: "light",
        links: [
          {
            title: "雙龍體育支援",
            items: [
              {
                label: "文檔",
                to: "/docs/intro"
              }
            ]
          },
          {
            title: "雙龍體育",
            items: [
              {
                label: "官網",
                href: "https://www.ssangyongsports.eu.org/"
              },
              {
                label: "社區",
                href: "https://community.ssangyongsports.eu.org/"
              },
              {
                label: "聯繫",
                href: "https://www.ssangyongsports.eu.org/p/blog-page_14.html"
              }
            ]
          },
          {
            title: "其他",
            items: [
              {
                label: "Blog",
                to: "https://blog.ssangyongsports.eu.org/"
              },
              {
                label: "狀態",
                href: "https://status.ssangyongsports.eu.org/"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 雙龍體育, Inc. Built with 雙龍體育支援團隊.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};
module.exports = config;
