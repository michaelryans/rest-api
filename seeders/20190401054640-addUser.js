'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
      },], {});
    */

    const bcrypt = require('bcryptjs')
    return queryInterface.bulkInsert('Users', [{
      username: "michael",
      email: "michael@yahoo.com",
      password: "passwordmichael",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "budi",
      email: "budi@yahoo.com",
      password: "passwordbudi",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "amin",
      email: "amin@yahoo.com",
      password: "passwordamin",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
