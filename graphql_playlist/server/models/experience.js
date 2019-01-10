const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  position: String,
  startDate: String,
  companyId: String
})

module.exports = mongoose.model('Experience', experienceSchema)