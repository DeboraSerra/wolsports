const { Router } = require('express');
const GoalController = require('../controllers/goal.controller');

const router = Router();

router.route('/')
  .get(GoalController.getAll);

module.exports = router;
