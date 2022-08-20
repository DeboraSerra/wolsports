'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personality = sequelize.define('Personality', {
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
    tableName: 'personalities'
  });
  return Personality;
};
