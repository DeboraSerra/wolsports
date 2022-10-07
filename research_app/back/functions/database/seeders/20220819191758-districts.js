'use strict';

module.exports = {
  /** @param {import('sequelize').QueryInterface} queryInterface */
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('districts', [
      {
        name: 'Águas Claras',
      },
      {
        name: 'Arniqueiras',
      },
      {
        name: 'Brazlândia',
      },
      {
        name: 'Candangolândia',
      },
      {
        name: 'Ceilândia',
      },
      {
        name: 'Cruzeiro',
      },
      {
        name: 'Fercal',
      },
      {
        name: 'Gama',
      },
      {
        name: 'Guará',
      },
      {
        name: 'Itapoã',
      },
      {
        name: 'Jardim Botânico',
      },
      {
        name: 'Lago Norte',
      },
      {
        name: 'Lago Sul',
      },
      {
        name: 'Núcleo Bandeirante',
      },
      {
        name: 'Paranoá',
      },
      {
        name: 'Park Way',
      },
      {
        name: 'Planaltina',
      },
      {
        name: 'Asa Sul',
      },
      {
        name: 'Asa norte',
      },
      {
        name: 'Reacanto das Emas',
      },
      {
        name: 'Riacho Fundo',
      },
      {
        name: 'Riacho Fundo II',
      },
      {
        name: 'Samambaia',
      },
      {
        name: 'Santa Maria',
      },
      {
        name: 'São Sebastião',
      },
      {
        name: 'Estrutural',
      },
      {
        name: 'SIA',
      },
      {
        name: 'Sobradinho',
      },
      {
        name: 'Sol Nascente e Pôr do Sol',
      },
      {
        name: 'Sudoeste/Octogonal',
      },
      {
        name: 'Taguatinga',
      },
      {
        name: 'Varjão',
      },
      {
        name: 'Vicente Pires',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('districts', null, {});
  }
};
