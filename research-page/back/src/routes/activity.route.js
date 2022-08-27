const { Router } = require('express');
const ActivityController = require('../controllers/activity.controller');

const router = Router();

router.route('/')
  .get(ActivityController.getAll);

module.exports = router;
