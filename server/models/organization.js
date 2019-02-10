const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  name: String,
  city: String,
  description: String,
  link: String
})

module.exports = mongoose.model('Organization', organizationSchema)