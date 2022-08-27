const db = require('../database/models');
const { default: CodeError } = require('../helpers/CodeError');

const TimeService = {
  getAll: async () => {
    const times = await db.Time.findAll({ raw: true });
    return times;
  },
};

module.exports = TimeService;
