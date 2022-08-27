const db = require('../database/models');
const { default: CodeError } = require('../helpers/CodeError');

const ActivityService = {
  getAll: async () => {
    const activities = await db.Activity.findAll({ raw: true });
    return activities;
  },
  getOne: async (id) => {
    const activity = await db.Activity.findOne({ where: { id }, raw: true });
    if (!activity) throw new CodeError('Activity not found', 404);
    return activity;
  },
};

module.exports = ActivityService;
