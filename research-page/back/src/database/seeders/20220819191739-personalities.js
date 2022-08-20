'use strict';

module.exports = {
  /** @param {import('sequelize').QueryInterface} queryInterface */
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('personalities', [
      {
        name: 'extrovertida',
      },
      {
        name: 'introvertida',
      },
      {
        name: 'comunicativa',
      },
      {
        name: 'calada',
      },
      {
        name: 'Gosta de estar com pessoas',
      },
      {
        name: 'Gosta de ficar sozinha',
      },
      {
        name: 'Odeia lugar fechado',
      },
      {
        name: 'Gosta de ser desafiada',
      },
      {
        name: 'Gosta de experimentar coisas diferentes',
      },
      {
        name: 'Prefere fazer o que já está acostumada',
      },
      {
        name: 'Competitiva',
      },
      {
        name: 'Não se preocupa com o tempo da atividade',
      },
      {
        name: 'Prefere algo rápido',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('personalities', null, {});
  }
};
