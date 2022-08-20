'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
   async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_personality', {
      personality: {
        field: 'personality_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'personalities',
          key: 'id',
        },
        allowNull: false,
      },
      user: {
        field: 'user_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_personality')
  }
};
