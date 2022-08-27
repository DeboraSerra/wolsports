const DistrictService = require('../services/district.service');

const DistrictController = {
  getAll: async (req, res) => {
    const districts = await DistrictService.getAll();
    res.status(200).json({ districts });
  },
}

module.exports = DistrictController;
