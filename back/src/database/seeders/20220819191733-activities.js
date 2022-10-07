'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('activities', [
      {
        name: 'Basquete',
      },
      {
        name: 'Bike MTB',
      },
      {
        name: 'Bike Estrada',
      },
      {
        name: 'Caminhada',
      },
      {
        name: 'Canoagem',
      },
      {
        name: 'Futebol de campo',
      },
      {
        name: 'Cross fit',
      },
      {
        name: 'Futsal',
      },
      {
        name: 'Corrida',
      },
      {
        name: 'Dança',
      },
      {
        name: 'Handbol',
      },
      {
        name: 'Judo',
      },
      {
        name: 'Jiu-jitsu',
      },
      {
        name: 'Musculação',
      },
      {
        name: 'Natação',
      },
      {
        name: 'Patins',
      },
      {
        name: 'Pilates',
      },
      {
        name: 'Skate',
      },
      {
        name: 'Tênis',
      },
      {
        name: 'Treino funcional',
      },
      {
        name: 'Volei',
      },
      {
        name: 'Volei de areia',
      },
      {
        name: 'Windsurf',
      },
      {
        name: 'Yoga',
      },
      {
        name: 'Wakeboard',
      },
      {
        name: 'Nenhuma',
      },
      {
        name: 'Outra',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('activities', null, {});
  }
};
