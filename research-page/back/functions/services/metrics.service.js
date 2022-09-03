const Sequelize = require('sequelize');
require('dotenv/config')
const db = require('../database/models');
const config = require('../database/config/config');
const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env])

const activityQuant = async () => {
  const query = `
    SELECT
      a.name AS value,
      COUNT(ua.activity_id) AS 'qnt'
    FROM activities AS a
    LEFT JOIN user_activity AS ua
    ON ua.activity_id = a.id
    GROUP BY a.name
    ORDER BY COUNT(ua.activity_id) DESC;
  `;
  const [result] = await sequelize.query(query, { raw: true });
  return result;
};

const activityQuantByGender = async (gender) => {
  const query = `
    SELECT
      a.name AS value,
      COUNT(ua.activity_id) AS 'qnt'
    FROM activities AS a
    LEFT JOIN user_activity AS ua
    ON ua.activity_id = a.id
    INNER JOIN users AS u
    ON u.id = ua.user_id
    WHERE u.gender_id = ${gender}
    GROUP BY a.name
    ORDER BY COUNT(ua.activity_id) DESC;
  `;
  const [result] = await sequelize.query(query, { raw: true });
  return result;
}

const goalQuant = async () => {
  const query = `
    SELECT
      g.name AS value,
      COUNT(ug.goal_id) AS 'qnt'
    FROM goals AS g
    LEFT JOIN user_goal AS ug
    ON ug.goal_id = g.id
    GROUP BY g.name
    ORDER BY COUNT(ug.goal_id) DESC;
  `;
  const [result] = await sequelize.query(query, { raw: true });
  return result;
}

const goalQuantByGender = async (gender) => {
  const query = `
    SELECT
      g.name AS value,
      COUNT(ug.goal_id) AS 'qnt'
    FROM goals AS g
    LEFT JOIN user_goal AS ug
    ON ug.goal_id = g.id
    INNER JOIN users AS u
    ON u.id = ug.user_id
    WHERE u.gender_id = ${gender}
    GROUP BY g.name
    ORDER BY COUNT(ug.goal_id) DESC;
  `;
  const [result] = await sequelize.query(query, { raw: true });
  return result;
}

const registerByGender = async () => {
  const women = await db.User.count({ where: { gender: 1 } });
  const men = await db.User.count({ where: { gender: 2 } });
  const notInfo = await db.User.count({ where: { gender: 3 } });
  return [
    { value: 'Mulheres', qnt: women },
    { value: 'Homens', qnt: men },
    { value: 'Não informado', qnt: notInfo },
  ];
}

const registerByRA = async () => {
  const districts = await db.District.findAll();
  const data = await Promise.all(districts.map(async ({ id, name }) => {
    const users = await db.User.count({ where: { district: id } });
    const workers = await db.Worker.count({ where: { district: id } });
    const groups = await db.Group.count({ where: { district: id } });
    return { qnt: users + workers + groups, value: name };
  }));
  return data;
}

const registerByType = async () => {
  const groups = await db.Group.count();
  const users = await db.User.count();
  const workers = await db.Worker.count();
  const data = [
    { value: 'Grupos', qnt: groups },
    { value: 'Usuários', qnt: users },
    { value: 'Profissionais', qnt: workers },
  ]
  return data;
}

module.exports = {
  activityQuant,
  activityQuantByGender,
  goalQuant,
  goalQuantByGender,
  registerByGender,
  registerByRA,
  registerByType,
}
