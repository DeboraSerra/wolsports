const TimeService = require('../services/time.service');

const TimeController = {
  getAll: async (req, res) => {
    const times = await TimeService.getAll();
    res.status(200).json({ times });
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const time = await TimeService.getOne(id);
    res.status(200).json({ time });
  },
}

module.exports = TimeController;
