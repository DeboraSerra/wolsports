const WorkerService = require('../services/worker.service');

const UserController = {
  getAll: async (req, res) => {
    const users = await WorkerService.getAll();
    res.status(200).json({ users });
  },
  create: async (req, res) => {
    const worker = await WorkerService.create(req.body);
    res.status(200).json({ worker });
  }
}

module.exports = UserController;
