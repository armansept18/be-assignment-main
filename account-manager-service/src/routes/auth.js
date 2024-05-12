const authController = require('../controllers/auth');

const authRoutes = [
  {
    method: 'POST',
    path: '/register',
    handler: authController.register,
  },
  {
    method: 'POST',
    path: '/login',
    handler: authController.login,
  },
];

module.exports = authRoutes;