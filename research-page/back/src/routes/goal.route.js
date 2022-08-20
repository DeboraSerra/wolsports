const { Router } = require('express');
const GoalController = require('../controllers/goal.controller');

const router = Router();

router.route('/')
  .get(GoalController.getAll)
  .post(GoalController.create);

router.route('/:id')
  .get(GoalController.getOne);

module.exports = router;
