'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
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
    activity: {
      field: 'activity_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    time: {
      field: 'time_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    forFun: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isOpen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    howItWorks: {
      type: DataTypes.STRING,
      allowNull: false
    },
    indication: {
      type: DataTypes.STRING,
      allowNull: false
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
  Group.associate = (models) => {
    Group.belongsTo(models.Activity, {
      foreignKey: 'activity_id',
      as: 'activityId',
    })
    Group.belongsTo(models.District, {
      foreignKey: 'district_id',
      as: 'districtId',
    })
    Group.belongsTo(models.Time, {
      foreignKey: 'time_id',
      as: 'timeId',
    })
  }
  return Group;
};
