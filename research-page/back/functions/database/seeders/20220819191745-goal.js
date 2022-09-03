'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('goals', [
      {
        name: 'Emagrecer/estética',
      },
      {
        name: 'Saúde',
      },
      {
        name: 'Fortalecimento muscular',
      },
      {
        name: 'Indicação médica',
      },
      {
        name: 'Lazer',
      },
      {
        name: 'Outro',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('goals', null, {});
  }
};
