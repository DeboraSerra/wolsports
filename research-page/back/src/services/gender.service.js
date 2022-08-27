const db = require('../database/models');
const { default: CodeError } = require('../helpers/CodeError');

const GenderService = {
  getAll: async () => {
    const genders = await db.Gender.findAll({ raw: true });
    return genders;
  },
  getOne: async (id) => {
    const gender = await db.Gender.findOne({ where: { id }, raw: true });
    if (!gender) throw new CodeError('Gender not found', 404);
    return gender;
  },
  create: async (name) => {
    if (!name) throw new CodeError('O nome do gênero é obrigatório', 401);
    const gender = await db.Gender.create({ name });
    return gender;
  },
};

module.exports = GenderService;
