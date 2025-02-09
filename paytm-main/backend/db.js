const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:Shubh%401234@cluster0.gk9ec.mongodb.net/Paytm_application"
);

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 40,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

});

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
