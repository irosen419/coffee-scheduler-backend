const mongoose = require('mongoose')
const role = new mongoose.Schema({
  role: { type: String, uniqnue: true }
});

module.exports = mongoose.model('Role', role)