'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
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
    tableName: 'activities'
  });
  return Activity;
};
