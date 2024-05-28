const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  startTime: {
    required: true,
    type: String
  },
  endTime: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model('Data', schema)