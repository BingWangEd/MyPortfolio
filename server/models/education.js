const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationSchema = new Schema({
  degree: String,
  startDate: String,
  endDate: String,
  schoolId: String
})

module.exports = mongoose.model('Education', educationSchema)