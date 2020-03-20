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
   return queryInterface.bulkInsert('Topics', [
     {
       title: 'Sequelize',
       photo_url: 'https://camo.githubusercontent.com/6a323552c2a2953614cb3e8a9ccd3615e5eb7289/68747470733a2f2f692e696d6775722e636f6d2f79764559686e5a2e706e67',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       title: 'Postgres',
       photo_url: 'https://f0.pngfuel.com/png/559/367/postgresql-object-relational-database-oracle-database-freebsd-icon-png-clip-art.png',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      title: 'Node',
      photo_url: 'https://img.favpng.com/14/16/2/node-js-javascript-software-developer-npm-png-favpng-Xu62kRTsLAhxpqDQ73Zqpc8SV.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Angular',
      photo_url: 'https://angular.io/assets/images/logos/angular/angular.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'AWS S3',
      photo_url: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Storage__Content_Delivery_Amazon_S3-512.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Topics', null, {})
  }
};
