const GoalService = require('../services/goal.service');

const GoalController = {
  getAll: async (req, res) => {
    const goals = await GoalService.getAll();
    res.status(200).json({ goals });
  },
}

module.exports = GoalController;
