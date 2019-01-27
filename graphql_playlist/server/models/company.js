const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: String,
  city: String,
  description: String,
  link: String
})

module.exports = mongoose.model('Company', companySchema)