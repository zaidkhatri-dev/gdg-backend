const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectOwner: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  }
  
});

const pollSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
});

const Poll = mongoose.model("Poll", pollSchema);
const Project = mongoose.model("Project", projectSchema)

module.exports = {Poll, Project};
