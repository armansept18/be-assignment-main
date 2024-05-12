const fastify = require('fastify');
const authService = require('../services/auth');

const register = async (req , reply) => {
  try {
    const db = fastify.mongo.db;
    const user = await authService.register(db, req.body);
    reply.send(user);
  } catch (err) {
    reply.status(500).send({ message: err.message });
  }
};

const login = async (req, reply) => {
  try {
    const db = fastify.mongo.db;
    const token = await authService.login(db.req.body);
    reply.send({ token });
  } catch (err) {
    reply.status(401).send({ message: err.message });
  }
};

module.exports = { register, login };