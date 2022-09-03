const AdminService = require('../services/admins.service');

const AdminController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const token = await AdminService.login(email, password);
    res.status(200).json({ token });
  },
  verify: async (req, res) => {
    const { admin } = req;
    console.log({ controller: admin })
    res.status(200).json({ admin: admin.name });
  }
}

module.exports = AdminController;
