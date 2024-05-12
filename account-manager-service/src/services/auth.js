const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { ObjectId } = require('mongodb');
require('dotenv').config();

const saltRounds = 10;
const jwt_secret = process.env.JWT_SECRET;

const register = async (db, { username, password }) => {
  const users = db.collection('users');
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = { username, password: hashedPassword };
  await users.insertOne(user);
  return user;
};

const login = async (db, { username, password }) => {
  const users = db.collection('users');
  const user = await users.findOne({ username });
  if (!user) throw new Error('User not found!');

  const isValidPassword = await bcrypt.compare(password, user.password);
  if(!isValidPassword) throw new Error('Invalid Password');

  const token = jwt.sign({ userId: user._id }, jwt_secret);
  return { ...user, token };
};

module.exports = { register, login };