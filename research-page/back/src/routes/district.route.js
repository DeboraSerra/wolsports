const { Router } = require('express');
const DistrictController = require('../controllers/district.controller');

const router = Router();

router.route('/')
  .get(DistrictController.getAll)
  .post(DistrictController.create);

router.route('/:id')
  .get(DistrictController.getOne);

module.exports = router;
