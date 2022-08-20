const GoalService = require('../services/goal.service');

const GoalController = {
  getAll: async (req, res) => {
    const goals = await GoalService.getAll();
    res.status(200).json({ goals });
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const goal = await GoalService.getOne(id);
    res.status(200).json({ goal });
  },
  create: async (req, res) => {
    const { data } = req.body;
    const goal = await GoalService.create(data);
    res.status(203).json({ goal });
  },
}

module.exports = GoalController;
