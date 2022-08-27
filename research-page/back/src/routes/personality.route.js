const { Router } = require('express');
const PersonalityController = require('../controllers/personality.controller');

const router = Router();

router.route('/')
  .get(PersonalityController.getAll);

router.route('/:id')
  .get(PersonalityController.getOne);

module.exports = router;
