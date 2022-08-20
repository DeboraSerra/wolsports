const { Router } = require('express');
const TimeController = require('../controllers/time.controller');

const router = Router();

router.route('/')
  .get(TimeController.getAll);

router.route('/:id')
  .get(TimeController.getOne);

module.exports = router;
