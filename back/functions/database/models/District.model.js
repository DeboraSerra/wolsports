'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
  }, {
    tableName: 'districts',
    timestamps: false,
  });

  District.associate = (models) => {
    District.hasMany(models.User, {
      foreignKey: 'district_id',
      as: 'user',
    })
    District.hasMany(models.Worker, {
      foreignKey: 'district_id',
      as: 'worker',
    })
    District.hasMany(models.Group, {
      foreignKey: 'district_id',
      as: 'group',
    })
  }
  return District;
};
