module.exports = (sequelize, DataTypes) => {
  const UserPersonality = sequelize.define('UserPersonality', {
  }, {
    tableName: 'user_personality',
    timestamps: false,
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
