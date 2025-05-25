// /backend/models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, required: true },
  package: { type: Number, required: true },
  location: { type: String, required: true },
  doj: { type: Date, required: true }
});

module.exports = mongoose.model('Job', jobSchema);
