'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_goal', {
      goalId: {
        field: 'goal_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'goals',
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
    await queryInterface.dropTable('user_goal')
  }
};
