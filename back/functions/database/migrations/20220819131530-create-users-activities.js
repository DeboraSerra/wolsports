'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_activity', {
      activityId: {
        field: 'activity_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'activities',
          key: 'id',
        },
        allowNull: false,
      },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_activity');
  }
};
