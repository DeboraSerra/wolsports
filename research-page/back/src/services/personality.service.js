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
  create: async (name) => {
    if (!name) throw new CodeError('O nome da personalidade é obrigatório', 401);
    const personality = await db.Personality.create({ name });
    return personality;
  },
};

module.exports = PersonalityService;
