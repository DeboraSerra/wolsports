const db = require('../database/models');
const { default: CodeError } = require('../helpers/CodeError');

const InfoService = {
  getAll: async () => {
    const activities = await db.Activity.findAll({ raw: true });
    const districts = await db.District.findAll({ raw: true });
    const goals = await db.Goal.findAll({ raw: true });
    const personalities = await db.Personality.findAll({ raw: true });
    const genders = await db.Gender.findAll({ raw: true });
    return { activities, districts, goals, personalities, genders };
  },
};

module.exports = InfoService;
