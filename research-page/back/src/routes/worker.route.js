const { Router } = require('express');
const WorkerController = require('../controllers/worker.controller');

const router = Router();

router.route('/')
  .post(WorkerController.create);

module.exports = router;
