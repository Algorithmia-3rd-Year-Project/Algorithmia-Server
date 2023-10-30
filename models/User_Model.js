const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
});

//static login method
userSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("All fields are required");
  }

  const user = await this.findOne({ username });

  if (!user) {
    throw Error("Incorrect Username");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
