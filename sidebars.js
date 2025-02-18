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
      collapsed: true,
      items: 
      [
        {
          type: 'category',
          label: 'Arch Linux GUI',
          link: 
          {
            type: 'doc',
            id: 'projects/arch-linux-gui/about-alg',
          },
          items: 
          [
            'projects/arch-linux-gui/build-alg-iso',
            'projects/arch-linux-gui/build-installer',
            'projects/arch-linux-gui/installer-config',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Code',
      link:
      {
        type: 'generated-index',
        title: 'Languages & Tools',
        description: 'Reference documents for various tools & languages',
        keywords: ['documentation, description'],
      },
      collapsed: true,
      items: 
      [
        {
          type: 'category',
          label: 'Languages',
          link: 
          {
            type: 'generated-index',
            title: 'Programming and Scripting Language Reference',
            description: 'References for Programming & Scripting Languages',
            keywords: ['C'],
          },
          items: 
          [
            {
              type: 'category',
              label: 'C',
              link: 
              {
                type: 'generated-index',
                title: 'The C Programming Language',
                description: 'Reference documents for the C programming language',
                keywords: ['c, functions, make'],
              },
              items: 
              [
                'code/languages/C/intro',
                'code/languages/C/setup_and_first_program',
                'code/languages/C/preprocessor',
                'code/languages/C/types_operators_expression',
                'code/languages/C/storage_class',
                'code/languages/C/io',
                'code/languages/C/control_flow',
                'code/languages/C/functions',
                'code/languages/C/recursion',
                'code/languages/C/pointers',
                'code/languages/C/pointer_to_function',
                'code/languages/C/arrays',
                'code/languages/C/arrays_and_pointers',
                'code/languages/C/arrays_of_pointers',
                'code/languages/C/dynamic_mem_alloc',
                'code/languages/C/strings',
                'code/languages/C/structs_and_unions',
                'code/languages/C/modular',
                'code/languages/C/fileio',
                'code/languages/C/dynamic_data_structures',
                'code/languages/C/cli_and_sighandle',
                'code/languages/C/bit_manip',
                'code/languages/C/project_1',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Tools',
          link: 
          {
            type: 'generated-index',
            title: 'Important Code Utilities',
            description: 'Reference documents for various tools used in the world of code',
            keywords: ['version-control, markdown, tools'],
          },
          items: 
          [
            'code/tools/git',
            'code/tools/markdown',
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Tutorials',
    //   link:
    //   {
    //     type: 'generated-index',
    //     title: 'Tutorials',
    //     description: 'Tutorial documents to supplement my technical youtube videos',
    //     keywords: ['tutorials, youtube'],
    //   },
    //   collapsed: true,
    //   items: 
    //   [
    //     'tutorials/db-win-linux_mint'
    //   ],
    // },
  ],
};

module.exports = sidebars;