module.exports = (sequelize, DataTypes) => {
  const UserGoal = sequelize.define('UserGoal', {
    createAt: {
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
    underscored: true,
    tableName: 'users-activities'
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
