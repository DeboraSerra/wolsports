const AdminService = require('../services/admins.service');

const AdminController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const token = await AdminService.login(email, password);
    res.status(200).json({ token });
  }
}

module.exports = AdminController;
