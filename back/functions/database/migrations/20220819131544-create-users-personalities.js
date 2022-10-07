'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
   async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_personality', {
      personalityId: {
        field: 'personality_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'personalities',
          key: 'id',
        },
        allowNull: false,
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_personality')
  }
};
