const { Router } = require('express');
const AdminController = require('../controllers/admin.controller');

const router = Router();

router.route('/')
  .post(AdminController.login);

module.exports = router;
