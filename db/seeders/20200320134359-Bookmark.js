'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Bookmarks', [
     {
       topic_id: 1,
       subject: 'Creating a instance with an association',
       description: 'Cool way to create a instance with association in one sweep.',
       link_url: 'https://stackoverflow.com/questions/29995868/creating-instance-with-an-association-in-sequelize',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      topic_id: 2,
      subject: 'Getting Started with Posgres on Mac',
      description: 'Was having using postgres on mac, so i need a refresher to get back to the basics lol.',
      link_url: 'ttps://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topic_id: 3,
      subject: 'Node Eviroment Variables',
      description: 'i needed this refresher to relearn about enviroment variables in node.js',
      link_url: 'https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topic_id: 4,
      subject: 'Angular CLI Proxy configuration',
      description: 'Using reverse proxy with Angular',
      link_url: 'https://itnext.io/angular-cli-proxy-configuration-4311acec9d6f',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topic_id: 1,
      subject: 'How to Run a Specific Seed File with Sequelize',
      description: 'Scroll to the bottom to get the answer to running a specific seed file',
      link_url: 'https://github.com/sequelize/cli/issues/437',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topic_id: 3,
      subject: 'Node Process',
      description: 'Great tutorial on Node Process object',
      link_url: 'https://www.tutorialspoint.com/nodejs/nodejs_process.htm',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topic_id: 5,
      subject: 'Using Amazon S3 to Host Streaming Videos',
      description: 'Iam currently in the process of learning how to stream videos with aws s3, and thought that this would be useful',
      link_url: 'https://www.tutorialspoint.com/nodejs/nodejs_process.htm',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookmarks', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

