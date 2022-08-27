const GenderService = require('../services/gender.service');

const GenderController = {
  getAll: async (req, res) => {
    const genders = await GenderService.getAll();
    res.status(200).json({ genders });
  },
}

module.exports = GenderController;
