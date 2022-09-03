const Sequelize = require('sequelize');
require('dotenv/config');
const db = require('../database/models');
const CodeError = require('../helpers/CodeError');
const config = require('../database/config/config');
const env = process.env.NODE_ENV || 'development';
const seq = new Sequelize(config[env]);

const UserService = {
  getAll: async () => {
    const users = await db.User.findAll({ raw: true });
    return users;
  },
  create: async (info) => {
    const { email, fullName, birthday, gender, district, address, activity,
      practice, which, goal, personality, indications } = info;
    if (!info || !email || !fullName || !birthday || !gender || !district || !address
      || activity.length === 0 || goal.length === 0 || personality.length === 0) {
      throw new CodeError('Informações faltando', 401);
    }
    const result = await seq.transaction(async (t) => {
      const { dataValues: user} = await db.User.create({ email, fullName, birthday, gender, district, address, practice, which, indications }, { transaction: t, raw: true });
      const acts = activity.map((id) => ({ activity_id: id,
        user_id: user.id }));
      const activities = await db.UserActivity.bulkCreate(acts, { transaction: t });
      const go = goal.map((id) => ({ goal_id: id,
        user_id: user.id }));
      const goals = await db.UserGoal.bulkCreate(go, { transaction: t });
      const pers = personality.map((id) => ({ personality_id: id,
        user_id: user.id }));
      const personalities = await db.UserPersonality.bulkCreate(pers, { transaction: t });
      return { ...user, activities, goals, personalities };
    })
  }
}

module.exports = UserService;
