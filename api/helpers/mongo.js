const mongoose = require('mongoose');

// define Schema
const UsersSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  phonenumber: Number,
  role: String,
});


// compile schema to model
const Users = mongoose.model('users', UsersSchema, 'users');

const storeUsers = async (obj) => {
  const users = new Users(obj);
  return users.save();
};

module.exports = {
  storeUsers,
};
