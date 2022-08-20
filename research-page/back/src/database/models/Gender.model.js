'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define('Gender', {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
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
    tableName: 'genders'
  });
  Gender.associate = (models) => {
    Gender.hasMany(models.User, {
      foreignKey: 'gender_id',
      as: 'gender',
    });
  }
  return Gender;
};
