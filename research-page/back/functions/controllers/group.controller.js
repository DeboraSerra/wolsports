const GroupService = require('../services/group.service');

const GroupController = {
  getAll: async (req, res) => {
    const group = await GroupService.getAll();
    res.status(200).json({ group });
  },
}

module.exports = GroupController;
