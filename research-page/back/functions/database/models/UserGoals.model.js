module.exports = (sequelize, DataTypes) => {
  const UserGoal = sequelize.define('UserGoal', {
  }, {
    tableName: 'user_goal',
    timestamps: false,
  });
  UserGoal.associate = (models) => {
    models.User.belongsToMany(models.Goal, {
      foreignKey: 'user_id',
      otherKey: 'goal_id',
      as: 'goalId',
      through: UserGoal,
    })
    models.Goal.belongsToMany(models.User, {
      foreignKey: 'goal_id',
      otherKey: 'user_id',
      as: 'userId',
      through: UserGoal,
    })
  }
  return UserGoal;
};
