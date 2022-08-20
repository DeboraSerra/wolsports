module.exports = (sequelize, DataTypes) => {
  const UserPersonality = sequelize.define('UserPersonality', {
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
  UserPersonality.associate = (models) => {
    models.User.belongsToMany(models.Personality, {
      foreignKey: 'user_id',
      otherKey: 'personality_id',
      as: 'personalityId',
      through: UserPersonality,
    })
    models.Personality.belongsToMany(models.User, {
      foreignKey: 'personality_id',
      otherKey: 'user_id',
      as: 'userId',
      through: UserPersonality,
    })
  }
  return UserPersonality;
};
