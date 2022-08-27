const ActivityService = require('../services/activity.service');

const ActivityController = {
  getAll: async (req, res) => {
    const activities = await ActivityService.getAll();
    res.status(200).json({ activities });
  },
}

module.exports = ActivityController;
