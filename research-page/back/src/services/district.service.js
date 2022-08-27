const db = require('../database/models');
const { default: CodeError } = require('../helpers/CodeError');

const DistrictService = {
  getAll: async () => {
    const districts = await db.District.findAll({ raw: true });
    return districts;
  },
  getOne: async (id) => {
    const district = await db.District.findOne({ where: { id }, raw: true });
    if (!district) throw new CodeError('District not found', 404);
    return district;
  },
};

module.exports = DistrictService;
