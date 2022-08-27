const { Router } = require('express');
const WorkerController = require('../controllers/worker.controller');

const router = Router();

router.route('/')
  .get(WorkerController.getAll)
  .post(WorkerController.create);

module.exports = router;
