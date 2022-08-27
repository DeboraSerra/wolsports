const { Router } = require('express');
const PersonalityController = require('../controllers/personality.controller');

const router = Router();

router.route('/')
  .get(PersonalityController.getAll)
  .post(PersonalityController.create);

router.route('/:id')
  .get(PersonalityController.getOne);

module.exports = router;
