const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../database/models');
const CodeError = require('../helpers/CodeError');

const jwtSecret = process.env.JWT || 'secret';

const AdminService = {
  login: async (email, pass) => {
    if (!email || !pass) {
      throw new CodeError('Email e senha são obrigatórios', 403);
    }
    const admin = await db.Admin.findOne({ where: { email } });
    const valid = await bcrypt.compare(pass, admin.password);
    if (!admin || !valid) {
      throw new CodeError('Email ou senha incorreta', 403);
    }
    const config = {
      expiresIn: '1d',
    }
    const { password, ...data } = admin;
    const token = jwt.sign({ data }, jwtSecret, config);
    return token;
  },
}

module.exports = AdminService;
