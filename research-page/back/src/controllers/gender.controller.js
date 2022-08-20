const GenderService = require('../services/gender.service');

const GenderController = {
  getAll: async (req, res) => {
    const genders = await GenderService.getAll();
    res.status(200).json({ genders });
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const gender = await GenderService.getOne(id);
    res.status(200).json({ gender });
  },
  create: async (req, res) => {
    const { data } = req.body;
    const gender = await GenderService.create(data);
    res.status(203).json({ gender });
  },
}

module.exports = GenderController;
