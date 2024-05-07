const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // Ensures no duplicate emails
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('FormData', FormDataSchema);
