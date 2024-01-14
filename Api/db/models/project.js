const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  status: { type: String, enum: ['New', 'In Progress', 'DeadlineClose'], default: 'New' },
  category: String,
  deadlineDate: Date,
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;