const db = require('../database/models');
const CodeError = require('../helpers/CodeError');

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
    const user = await db.User.create({ email, fullName, birthday, gender, district, address, practice, which, indications });
    const activities = await Promise.all(activity.map((id) => {
      db.UserActivity.create({ activityId: id, userId: user.id })
      return id;
    }))
    const goals = await Promise.all(goal.map((id) => {
      db.UserGoals.create({ goalId: id, userId: user.id })
      return id;
    }))
    const personalities = await Promise.all(personality.map((id) => {
      db.UserPersonality.create({ personalityId: id, userId: user.id })
      return id;
    }))
    return { ...user, activities, goals, personalities };
  }
}

module.exports = UserService;
