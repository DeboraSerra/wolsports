'use strict';

module.exports = {
  /** @param {import('sequelize').QueryInterface} queryInterface */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('workers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      activity: {
        field: 'activity_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'activity_id',
        references: {
          model: 'activities',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
      time: {
        field: 'time_id',
        type: Sequelize.INTEGER,
        field: 'time_id',
        allowNull: false,
        references: {
          model: 'times',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      needCref: {
        field: 'need_cref',
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      howItWorks: {
        field: 'how_it_works',
        type: Sequelize.STRING,
        allowNull: false,
      },
      indication: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('workers');
  }
};
