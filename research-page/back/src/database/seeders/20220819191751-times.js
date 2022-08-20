'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('times', [
      {
        name: 'matutino',
      },
      {
        name: 'vespertino'
      },
      {
        name: 'noturno'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('times', null, {});
  }
};
