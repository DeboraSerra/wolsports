const { Router } = require('express');
const AdminController = require('../controllers/admin.controller');
const tokenMiddleware = require('../middlewares/token.middleware');

const router = Router();

router.route('/')
  .post(AdminController.login);

router.route('/verification')
  .get(tokenMiddleware, AdminController.verify);

module.exports = router;
