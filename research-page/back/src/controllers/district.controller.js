const DistrictService = require('../services/district.service');

const DistrictController = {
  getAll: async (req, res) => {
    const districts = await DistrictService.getAll();
    res.status(200).json({ districts });
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const district = await DistrictService.getOne(id);
    res.status(200).json({ district });
  },
}

module.exports = DistrictController;
