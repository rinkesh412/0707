// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@pienter/gridsome-source-directus',
      options: {
        url: 'https://prateekchandra.com/clients/0707/public/',
        project: '_', // default = '_'
        email: 'prateek@prateekchandra.com',
        password: 'prateek@0707', // or use token instead
        camelCase: true, // transform field names to camel case
        routes: {}, // add custom routes here
      },
    },
  ]
}
