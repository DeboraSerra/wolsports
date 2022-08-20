'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('genders', [
      {
        name: 'feminino',
      },
      {
        name: 'masculino'
      },
      {
        name: 'prefiro não informar'
      },
      {
        name: 'Outro'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genders', null, {});
  }
};
