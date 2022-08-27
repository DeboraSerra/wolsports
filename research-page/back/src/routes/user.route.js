const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const router = Router();

router.route('/')
  .post(UserController.create);

module.exports = router;
