const db = require('../database/models');
const { Op } = require('sequelize');
const { default: CodeError } = require('../helpers/CodeError');

const GoalService = {
  getAll: async () => {
    const goals = await db.Goal.findAll({ raw: true });
    return goals;
  },
};

module.exports = GoalService;
