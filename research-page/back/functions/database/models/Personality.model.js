'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personality = sequelize.define('Personality', {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
  }, {
    tableName: 'personalities',
    timestamps: false,
  });
  return Personality;
};
