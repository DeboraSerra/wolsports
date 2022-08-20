'use strict';

module.exports = {
  /** @param {import('sequelize').QueryInterface} queryInterface */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      district: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'district_id',
        references: {
          model: 'districts',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      activity: {
        field: 'activity_id',
        type: Sequelize.INTEGER,
        field: 'activity_id',
        allowNull: false,
        references: {
          model: 'activities',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      time: {
        field: 'time_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'time_id',
        references: {
          model: 'times',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      forFun: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isOpen: {
        type: Sequelize.STRING,
        allowNull: false
      },
      howItWorks: {
        type: Sequelize.STRING,
        allowNull: false
      },
      indication: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('groups');
  }
};
