const { Router } = require('express');
const GenderController = require('../controllers/gender.controller');

const router = Router();

router.route('/')
  .get(GenderController.getAll);

module.exports = router;
