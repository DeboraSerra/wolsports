'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
        field: 'full_name',
        allowNull: false,
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      gender: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'gender_id',
        references: {
          model: 'genders',
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
      practice: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      which: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      indications: {
        allowNull: true,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('users');
  }
};
