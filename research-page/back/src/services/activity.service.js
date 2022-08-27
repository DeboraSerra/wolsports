const db = require('../database/models');
const { default: CodeError } = require('../helpers/CodeError');

const ActivityService = {
  getAll: async () => {
    const activities = await db.Activity.findAll({ raw: true });
    return activities;
  },
};

module.exports = ActivityService;
