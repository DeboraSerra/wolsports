const jwt = require('jsonwebtoken');
const CodeError = require('../helpers/CodeError');
const AdminService = require('../services/admins.service');

const jwtSecret = process.env.JWT || 'secret';

module.exports = async (req, res, next) => {
  console.log(req.headers)
  const auth = req.headers.authorization;
  if (!auth) {
    throw new CodeError('Token não encontrado', 404);
  }
  const token = auth.includes('Bearer') ? auth.split(' ')[1] : auth;
  console.log(token);
  const { payload } = jwt.verify(token, jwtSecret);
  req.admin = payload;
  next();
}
