const PersonalityService = require('../services/personality.service');

const PersonalityController = {
  getAll: async (req, res) => {
    const personalities = await PersonalityService.getAll();
    res.status(200).json({ personalities });
  },
}

module.exports = PersonalityController;
