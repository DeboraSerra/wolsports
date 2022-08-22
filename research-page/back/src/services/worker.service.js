const db = require('../database/models');
const CodeError = require('../helpers/CodeError');

const WorkerService = {
  getAll: async () => {
    const users = await db.Worker.findAll({ raw: true });
    return users;
  },
  create: async (info) => {
    const { email, fullName: name, phone, district, activity, time, needCref, cref,
      howItWorks, indication } = info;
    if (!info || !email || !name || !phone || !time || !district || needCref === undefined
      || !activity || !howItWorks || (needCref && !cref)) {
      throw new CodeError('Informações faltando', 401);
    }
    const worker = await db.Worker.create({ email, name, phone, district, activity, time, needCref, cref, howItWorks, indication });
    return { ...worker };
  }
}

module.exports = WorkerService;
