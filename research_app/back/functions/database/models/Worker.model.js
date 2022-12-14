'use strict';
module.exports = (sequelize, DataTypes) => {
  const Worker = sequelize.define('Worker', {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity: {
      field: 'activity_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
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
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    needCref: {
      field: 'need_cref',
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    howItWorks: {
      field: 'how_it_works',
      type: DataTypes.STRING,
      allowNull: false,
    },
    indication: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'workers'
  });
  Worker.associate = (models) => {
    Worker.belongsTo(models.Activity, {
      foreignKey: 'activity_id',
      as: 'activityId',
    })
    Worker.belongsTo(models.District, {
      foreignKey: 'district_id',
      as: 'districtId',
    })
  }
  return Worker;
};
