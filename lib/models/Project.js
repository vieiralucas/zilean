const mongoose = require('mongoose');
const uuid = require('node-uuid');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const projectSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4
  },
  name: {
    type: String,
    required: true
  },
  weeklyGoal: {
    type: Number,
    required: true
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
