const db = require('../database/models');
const { default: CodeError } = require('../helpers/CodeError');

const PersonalityService = {
  getAll: async () => {
    const personalities = await db.Personality.findAll({ raw: true });
    return personalities;
  },
};

module.exports = PersonalityService;