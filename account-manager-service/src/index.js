const fastify = require('fastify')({logger: true});
const cors = require('@fastify/cors');
const mongodb = require('@fastify/mongodb');
const authRoutes = require('./routes/authRoutes');

const prisma = new PrismaClient();

fastify.register(cors, {
  origin: '*',
});

fastify.register(authRoutes);
fastify.register(accountRoutes);

module.exports = fastify;