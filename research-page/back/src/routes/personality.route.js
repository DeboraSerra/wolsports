const { Router } = require('express');
const PersonalityController = require('../controllers/personality.controller');

const router = Router();

router.route('/')
  .get(PersonalityController.getAll);

module.exports = router;
