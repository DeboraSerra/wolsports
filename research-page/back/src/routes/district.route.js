const { Router } = require('express');
const DistrictController = require('../controllers/district.controller');

const router = Router();

router.route('/')
  .get(DistrictController.getAll);

module.exports = router;
