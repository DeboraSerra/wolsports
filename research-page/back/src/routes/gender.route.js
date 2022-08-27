const { Router } = require('express');
const GenderController = require('../controllers/gender.controller');

const router = Router();

router.route('/')
  .get(GenderController.getAll)
  .post(GenderController.create);

router.route('/:id')
  .get(GenderController.getOne);

module.exports = router;
