'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_goal', {
      goal: {
        field: 'goal_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'goals',
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
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_goal')
  }
};
