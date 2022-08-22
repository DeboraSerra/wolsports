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
        name: 'Feminino',
      },
      {
        name: 'Masculino'
      },
      {
        name: 'Prefiro não informar'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genders', null, {});
  }
};
