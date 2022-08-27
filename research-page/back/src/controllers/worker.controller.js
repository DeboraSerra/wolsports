const WorkerService = require('../services/worker.service');

const WorkerController = {
  create: async (req, res) => {
    const worker = await WorkerService.create(req.body);
    res.status(200).json({ worker });
  }
}

module.exports = WorkerController;
