'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define('Gender', {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
  }, {
    tableName: 'genders',
    timestamps: false,
  });
  Gender.associate = (models) => {
    Gender.hasMany(models.User, {
      foreignKey: 'gender_id',
      as: 'gender',
    });
  }
  return Gender;
};
