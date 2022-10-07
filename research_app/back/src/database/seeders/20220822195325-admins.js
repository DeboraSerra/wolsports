'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', [
      {
        name: 'Débora Serra',
        email: 'debora.r.serra@gmail.com',
        password_hash: '$2b$10$1Gxg6bf3cCZSQ2jh4AiM/.Zzyu2eEwDxFMeUlxClznHe0skpMIRrS'
      },
      {
        name: 'Gabriel Serra',
        email: '8gabriel9@gmail.com',
        password_hash: '$2b$10$1Gxg6bf3cCZSQ2jh4AiM/.Zzyu2eEwDxFMeUlxClznHe0skpMIRrS'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
