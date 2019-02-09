const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  position: String,
  startDate: String,
  endDate: String,
  organizationId: String,
  category: String
})

module.exports = mongoose.model('Experience', experienceSchema)