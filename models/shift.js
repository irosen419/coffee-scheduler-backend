const mongoose = require('mongoose')
const shift = new mongoose.Schema({
  employeeId: {
    required: false,
    type: String
  },
  startTime: {
    required: true,
    type: String
  },
  endTime: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model('Shift', shift)