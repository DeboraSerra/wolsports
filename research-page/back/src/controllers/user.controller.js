const UserService = require('../services/user.service');

const UserController = {
  create: async (req, res) => {
    const user = await UserService.create(req.body);
    res.status(200).json({ user });
  }
}

module.exports = UserController;
