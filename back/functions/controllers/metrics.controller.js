const MetricsService = require('../services/metrics.service');

const MetricsController = {
  getActivity: async (req, res) => {
    const data = await MetricsService.activityQuant();
    res.status(200).json({ data });
  },
  getActivityGender: async (req, res) => {
    const { gender } = req.params;
    const data = await MetricsService.activityQuantByGender(+gender);
    res.status(200).json({ data });
  },
  getGoals: async (req, res) => {
    const data = await MetricsService.goalQuant();
    res.status(200).json({ data });
  },
  getGoalsGender: async (req, res) => {
    const { gender } = req.params;
    const data = await MetricsService.goalQuantByGender(+gender);
    res.status(200).json({ data });
  },
  getGenders: async (req, res) => {
    const data = await MetricsService.registerByGender();
    res.status(200).json({ data });
  },
  getRA: async (req, res) => {
    const data = await MetricsService.registerByRA();
    res.status(200).json({ data });
  },
  getType: async (req, res) => {
    const data = await MetricsService.registerByType();
    res.status(200).json({ data });
  }
}

module.exports = MetricsController;
