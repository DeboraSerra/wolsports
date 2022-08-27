const ActivityService = require('../services/activity.service');

const ActivityController = {
  getAll: async (req, res) => {
    const activities = await ActivityService.getAll();
    res.status(200).json({ activities });
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const activity = await ActivityService.getOne(id);
    res.status(200).json({ activity });
  },
}

module.exports = ActivityController;
