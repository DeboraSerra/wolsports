'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'hasMaterial', {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        }, { transaction: t }),
        queryInterface.addColumn('users', 'whichMaterial', {
          type: Sequelize.STRING,
        }, { transaction: t })
      ])
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'hasMaterial', { transaction: t }),
        queryInterface.removeColumn('users', 'whichMaterial', { transaction: t }),
      ])
    })
  }
};
