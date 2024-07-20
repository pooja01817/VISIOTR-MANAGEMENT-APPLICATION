// models/host.js

const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  email: String,
  aadharNo: String,
  flatNo: String,
  gender: String, // Add gender field
});

const HostModel = mongoose.model('Host', hostSchema);

module.exports = HostModel;
