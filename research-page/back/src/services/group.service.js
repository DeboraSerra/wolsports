const db = require('../database/models');
const CodeError = require('../helpers/CodeError');

const GroupService = {
  getAll: async () => {
    const users = await db.Group.findAll({ raw: true });
    return users;
  },
  create: async (info) => {
    const { email, name, phone, district, address, activity, time, forFun,
      isOpen, howItWorks, indication } = info;
    if (!info || !email || !name || !phone || !time || !district || forFun === undefined
      || ! isOpen || !activity || !howItWorks || !address) {
      throw new CodeError('Informações faltando', 401);
    }
    const { dataValues: group } = await db.Group.create({ email, name, phone, district, address, activity, time, forFun, isOpen, howItWorks, indication });
    return { ...group };
  }
}

module.exports = GroupService;
