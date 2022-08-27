const { Router } = require('express');
const TimeController = require('../controllers/time.controller');

const router = Router();

router.route('/')
  .get(TimeController.getAll);

module.exports = router;
