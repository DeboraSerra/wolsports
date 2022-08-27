const db = require('../database/models');
const { default: CodeError } = require('../helpers/CodeError');

const TimeService = {
  getAll: async () => {
    const times = await db.Time.findAll({ raw: true });
    return times;
  },
  getOne: async (id) => {
    const time = await db.Time.findOne({ where: { id }, raw: true });
    if (!time) throw new CodeError('Time not found', 404);
    return time;
  },
};

module.exports = TimeService;
