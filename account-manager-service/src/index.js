const fastify = require('fastify')({logger: true});
const cors = require('@fastify/cors');
const authRoutes = require('./routes/auth');

const MONGODB_URI = 'mongodb://localhost:270107/account-management-service';

fastify.register(require('@fastify/mongodb'), {
  forceClose: true,
  url: MONGODB_URI,
})

fastify.register(cors, {
  origin: '*',
});

fastify.register(authRoutes);

const start = async () => {
  try {
    await fastify.listen(process.env.PORT);
    console.log(`Account Manager Service is running on ${fastify.log.info}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

start();

module.exports = fastify;