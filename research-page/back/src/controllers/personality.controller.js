const PersonalityService = require('../services/personality.service');

const PersonalityController = {
  getAll: async (req, res) => {
    const personalities = await PersonalityService.getAll();
    res.status(200).json({ personalities });
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const personality = await PersonalityService.getOne(id);
    res.status(200).json({ personality });
  },
  create: async (req, res) => {
    const { data } = req.body;
    const personality = await PersonalityService.create(data);
    res.status(203).json({ personality });
  },
}

module.exports = PersonalityController;
