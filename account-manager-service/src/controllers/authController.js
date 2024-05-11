const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const register = async (req , reply) => {
  try {
    const { username, email, password } = req.body;
    
  } catch (err) {
    
  }
}