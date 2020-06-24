export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ef32d47b21bbb4798cd2e53',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-wyebwom1',
                  apiId: 'f3fadf8d-e0ee-404b-9c8a-abdc11d25018'
                },
                {
                  buildHookId: '5ef32d47ffbc072dac91dd21',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-c8vk1dkq',
                  apiId: 'fd811379-3e02-4efa-921b-eea84799a483'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kariesta/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-c8vk1dkq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
