const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const router = Router();

router.route('/')
  .get(UserController.getAll)
  .post(UserController.create);

module.exports = router;
