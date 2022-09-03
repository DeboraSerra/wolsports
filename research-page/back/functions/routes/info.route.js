const InfoController = require('../controllers/info.controller');
const { Router } = require('express');

const router = Router();

router.route('/')
  .get(InfoController.getAll);

module.exports = router;
