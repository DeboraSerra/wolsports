module.exports = (sequelize, DataTypes) => {
  const UserActivity = sequelize.define('UserActivity', {
  }, {
    tableName: 'user_activity',
    timestamps: false,
  });
  UserActivity.associate = (models) => {
    models.User.belongsToMany(models.Activity, {
      foreignKey: 'user_id',
      otherKey: 'activity_id',
      as: 'activityId',
      through: UserActivity,
    })
    models.Activity.belongsToMany(models.User, {
      foreignKey: 'activity_id',
      otherKey: 'user_id',
      as: 'userId',
      through: UserActivity,
    })
  }
  return UserActivity;
};
