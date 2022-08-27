const db = require('../database/models');
const { default: CodeError } = require('../helpers/CodeError');

const GenderService = {
  getAll: async () => {
    const genders = await db.Gender.findAll({ raw: true });
    return genders;
  },
};

module.exports = GenderService;
