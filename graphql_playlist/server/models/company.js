const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: String,
  city: String
})

module.exports = mongoose.model('Company', companySchema)