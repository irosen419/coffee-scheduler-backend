const mongoose = require('mongoose')
const employee = new mongoose.Schema({
  firstName: {
    required: true,
    type: String
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: 'Please enter your email',
    type: String
  },
  roleId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Employee', employee)