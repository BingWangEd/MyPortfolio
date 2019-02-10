const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  position: String,
  degree: String,
  startDate: String,
  endDate: String,
  organizationId: String,
  category: String,
  story: String
})

module.exports = mongoose.model('Experience', experienceSchema)