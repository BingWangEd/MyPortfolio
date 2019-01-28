const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  summary: String,
  detail: String,
  experienceId: String
})

module.exports = mongoose.model('Skill', skillSchema)