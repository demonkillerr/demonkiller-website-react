/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// const sidebars = {
//   // By default, Docusaurus generates a sidebar from the docs folder structure
//   //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

//   // But you can create a sidebar manually
//   /*
//   tutorialSidebar: [
//     'intro',
//     'hello',
//     {
//       type: 'category',
//       label: 'Tutorial',
//       items: ['tutorial-basics/create-a-document'],
//     },
//   ],
//    */
// };

const sidebars = 
{
  docs: 
  [
    'introduction',
    {
      type: 'category',
      label: 'Projects',
      link: 
      {
        type: 'generated-index',
        title: 'My Projects',
        description: 'Description and documentation of all of my projects',
        keywords: ['documentation, description'],
      },
      collapsed: false,
      items: 
      [
        {
          type: 'category',
          label: 'Arch Linux GUI',
          link: 
          {
            type: 'doc',
            id: 'projects/arch-linux-gui/introduction',
          },
          items: 
          [
            'projects/arch-linux-gui/build-alg-iso',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;