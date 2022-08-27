const GroupService = require('../services/group.service');

const GroupController = {
  create: async (req, res) => {
    const group = await GroupService.create(req.body);
    res.status(200).json({ group });
  }
}

module.exports = GroupController;
