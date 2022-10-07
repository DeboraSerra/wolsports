const InfoService = require('../services/info.service');

const InfoController = {
  getAll: async (req, res) => {
    const info = await InfoService.getAll();
    res.status(200).json(info);
  }
}

module.exports = InfoController;
