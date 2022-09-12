const UserService = require('../services/user.service');

const UserController = {
  getAll: async (req, res) => {
    const users = await UserService.getAll();
    res.status(200).json({ users });
  },
  create: async (req, res) => {
    console.log(req.body)
    const user = await UserService.create(req.body);
    res.status(200).json({ user });
  }
}

module.exports = UserController;
