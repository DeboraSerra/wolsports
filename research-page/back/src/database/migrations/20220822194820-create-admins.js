'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('admins', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        field: 'password_hash',
        type: Sequelize.STRING,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('admins')
  }
};
