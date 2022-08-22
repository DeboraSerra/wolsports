const WorkerService = require('../services/worker.service');

const WorkerController = {
  getAll: async (req, res) => {
    const worker = await WorkerService.getAll();
    res.status(200).json({ worker });
  },
  create: async (req, res) => {
    const worker = await WorkerService.create(req.body);
    res.status(200).json({ worker });
  }
}

module.exports = WorkerController;
