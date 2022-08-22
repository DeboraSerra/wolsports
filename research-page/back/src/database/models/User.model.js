'use strict';
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    fullName: {
      type: DataTypes.STRING,
      field: 'full_name',
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    district: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    practice: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    which: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    indications: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'created_at',
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    underscored: true,
    tableName: 'users'
  });
  User.associate = (models) => {
    User.belongsTo(models.Gender, {
      foreignKey: 'gender_id',
      as: 'genderId',
    })
    User.belongsTo(models.District, {
      foreignKey: 'district_id',
      as: 'districtId',
    })
  }
  return User;
};
