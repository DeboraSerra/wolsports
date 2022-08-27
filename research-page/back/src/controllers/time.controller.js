const TimeService = require('../services/time.service');

const TimeController = {
  getAll: async (req, res) => {
    const times = await TimeService.getAll();
    res.status(200).json({ times });
  },
}

module.exports = TimeController;
