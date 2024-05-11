const authService = require('../services/authService');

const authRoutes = [
  {
    method: 'POST',
    path: '/register',
    handler: authService.register,
  },
  {
    method: 'POST',
    path: '/login',
    handler: authService.login,
  },
];

module.exports = authRoutes;