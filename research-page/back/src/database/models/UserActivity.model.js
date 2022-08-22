module.exports = (sequelize, DataTypes) => {
  const UserActivity = sequelize.define('UserActivity', {
    createdAt: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'created_at',
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'users-activities'
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
