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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
      field: 'gender_id'
    },
    district: {
      type: DataTypes.INTEGER,
      field: 'district_id',
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
    hasMaterial: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    whichMaterial: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'users'
  });
  User.associate = (models) => {
    User.belongsTo(models.District, {
      foreignKey: 'district_id',
      as: 'districtId',
    });
    User.belongsTo(models.Gender, {
      foreignKey: 'gender',
    })
  }
  return User;
};
