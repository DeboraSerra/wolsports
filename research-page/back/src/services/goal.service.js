const db = require('../database/models');
const { Op } = require('sequelize');
const { default: CodeError } = require('../helpers/CodeError');

const GoalService = {
  getAll: async () => {
    const goals = await db.Goal.findAll({ raw: true });
    return goals;
  },
  getOne: async (id) => {
    const goal = await db.Goal.findOne({ where: { id }, raw: true });
    if (!goal) throw new CodeError('Goal not found', 404);
    return goal;
  },
  create: async (name) => {
    if (!name) throw new CodeError('O nome da meta é obrigatório', 401);
    const goal = await db.Goal.create({ name });
    return goal;
  },
};

module.exports = GoalService;
