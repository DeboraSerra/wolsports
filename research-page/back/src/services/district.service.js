const db = require('../database/models');
const { default: CodeError } = require('../helpers/CodeError');

const DistrictService = {
  getAll: async () => {
    const districts = await db.District.findAll({ raw: true });
    return districts;
  },
};

module.exports = DistrictService;
