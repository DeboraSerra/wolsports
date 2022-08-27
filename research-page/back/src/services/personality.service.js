const db = require('../database/models');
const { default: CodeError } = require('../helpers/CodeError');

const PersonalityService = {
  getAll: async () => {
    const personalities = await db.Personality.findAll({ raw: true });
    return personalities;
  },
  getOne: async (id) => {
    const personality = await db.Personality.findOne({ where: { id }, raw: true });
    if (!personality) throw new CodeError('Personality not found', 404);
    return personality;
  },
};

module.exports = PersonalityService;
