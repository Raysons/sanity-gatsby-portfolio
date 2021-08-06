export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610d579245f65ddddb3f2616',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wty3krs4',
                  apiId: 'babfa419-f38c-4f9b-be1b-4cfb66a4c139'
                },
                {
                  buildHookId: '610d579214cf62cfa0b6b2c3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-psgnm47i',
                  apiId: '064e4eb3-f810-4433-be51-b185b7f493f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Raysons/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-psgnm47i.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
