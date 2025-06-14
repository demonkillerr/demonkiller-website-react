// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gaurang Vishwakarma',
  tagline: 'A place to document all my work',
  url: 'https://demonkiller.co.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'demonkillerr', // Usually your GitHub org/user name.
  projectName: 'demonkiller-website-react', // Usually your repo name.

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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/demonkillerr/demonkiller-website-react',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/demonkillerr/demonkiller-website-react',
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
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // Announcement Bar
      // announcementBar: {
      //   id: 'url-change',
      //   content:
      //     'Please note that my older .tech domain <i>demonkiller.tech</i> expired and hence I have shifted to a newer .co.in domain, as renewal of the .tech domain was expensive.',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
      navbar: {
        hideOnScroll: true,
        title: 'DMKL',
        logo: {
          alt: 'DemonKiller Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Tutorials',
          },
          {to: '/blog', label: 'Blogs', position: 'left'},
          {
            label: 'Download ALG',
            href: 'https://sourceforge.net/projects/arch-linux-gui/files/',
            position: 'left',
          },


          {
            href: 'https://github.com/demonkillerr',
            position: 'right',
            className: 'navbar-icon',
            'aria-label': 'GitHub repository',
            html: `<svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 496 512"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>`,
          },
          {
            href: 'https://www.youtube.com/c/demonkillerr',
            position: 'right',
            className: 'navbar-icon ',
            'aria-label': 'Youtube channel',
            html: `<svg 
                stroke="currentColor" 
                fill="currentColor" 
                stroke-width="0" 
                viewBox="0 0 600 600" 
                height="25" width="25" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M 301.914062 74.960938 L 305.25 74.960938 C 336.074219 75.074219 492.261719 76.199219 534.375 87.523438 C 560.285156 94.558594 580.496094 114.84375 587.4375 140.773438 C 591.226562 155.023438 593.886719 173.886719 595.6875 193.351562 L 596.0625 197.25 L 596.886719 207 L 597.1875 210.898438 C 599.625 245.175781 599.925781 277.273438 599.960938 284.289062 L 599.960938 287.101562 C 599.925781 294.375 599.585938 328.648438 596.886719 364.351562 L 596.585938 368.289062 L 596.25 372.1875 C 594.375 393.636719 591.601562 414.9375 587.4375 430.613281 C 580.515625 456.558594 560.296875 476.847656 534.375 483.863281 C 490.875 495.5625 325.539062 496.386719 302.625 496.425781 L 297.300781 496.425781 C 285.710938 496.425781 237.789062 496.199219 187.539062 494.476562 L 181.164062 494.25 L 177.898438 494.101562 L 171.488281 493.835938 L 165.074219 493.574219 C 123.449219 491.738281 83.8125 488.773438 65.550781 483.824219 C 39.640625 476.820312 19.421875 456.542969 12.488281 430.613281 C 8.324219 414.976562 5.550781 393.636719 3.675781 372.1875 L 3.375 368.25 L 3.074219 364.351562 C 1.222656 338.941406 0.199219 313.476562 0 288 L 0 283.386719 C 0.0742188 275.324219 0.375 247.460938 2.398438 216.710938 L 2.664062 212.851562 L 2.773438 210.898438 L 3.074219 207 L 3.898438 197.25 L 4.273438 193.351562 C 6.074219 173.886719 8.738281 154.988281 12.523438 140.773438 C 19.445312 114.828125 39.667969 94.539062 65.585938 87.523438 C 83.851562 82.648438 123.488281 79.648438 165.113281 77.773438 L 171.488281 77.511719 L 177.9375 77.289062 L 181.164062 77.175781 L 187.574219 76.914062 C 223.265625 75.765625 258.96875 75.125 294.675781 75 L 301.914062 75 Z M 240 195.335938 L 240 376.011719 L 395.886719 285.710938 Z M 240 195.335938"></path>
                </svg>`,
          },
          {
            href: 'https://twitter.com/demonkillerrr',
            position: 'right',
            className: 'navbar-icon navbar-icon-twitter',
            'aria-label': 'Twitter page',
            html: `<svg 
                stroke="currentColor" 
                fill="currentColor" 
                stroke-width="0" 
                viewBox="0 0 512 512" 
                height="22" width="22" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>`,
          },
          {
            href: 'https://discordapp.com/users/9375',
            position: 'right',
            className: 'navbar-icon',
            'aria-label': 'Discord channel',
            html: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>`,
          },
          {
            href: 'https://t.me/demonkillerr',
            position: 'right',
            className: 'navbar-icon navbar-icon-telegram',
            'aria-label': 'Telegram Contact',
            html: `<svg 
                stroke="currentColor" 
                fill="currentColor" 
                stroke-width="0" 
                viewBox="0 0 448 512" 
                height="24" 
                width="24" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                </svg>`,
          },
          {
            href: 'https://www.linkedin.com/in/gaurang-vishwakarma/',
            position: 'right',
            className: 'navbar-icon',
            'aria-label': 'LinkedIn Profile',
            html: `<svg 
                stroke="currentColor" 
                fill="currentColor" 
                stroke-width="0" 
                viewBox="0 0 448 512" 
                height="22" 
                width="22" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>`,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tutorials',
            items: [
              {
                label: 'Articles',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/c/demonkillerr',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/demonkillerrr',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/demonkillerr',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/demonkillerrrr/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/users/9375',
              },
              
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/demonkillerr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}, DemonKiller. Built with 💙 & Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    }),
};

module.exports = config;
