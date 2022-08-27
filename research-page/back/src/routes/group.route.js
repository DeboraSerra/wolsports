const { Router } = require('express');
const GroupController = require('../controllers/group.controller');

const router = Router();

router.route('/')
  .get(GroupController.getAll)
  .post(GroupController.create);

module.exports = router;
