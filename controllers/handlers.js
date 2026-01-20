const { Poll, Project } = require("../models/models");

const getProjectData = async (req, res) => {
  try {
    const projectData = await Project.find().select({
      votes: 0,
      __v: 0,
      _id: 0,
    });

    return res.json(projectData);
  } catch (error) {
    console.error("Error: ", error);
    return;
  }
};

const getPollData = async (req, res) => {
  try {
    
    const pollData = await Poll.findOne().select({ __v: 0, _id: 0 });
    

    return res.json(pollData);
  } catch (error) {
    console.error("Error: ", error);
    return;
  }
};

const handleVote = async (req, res) =>{
  const body = req.body

  await Project.updateOne({
    projectName: body.projectName,
    projectOwner: body.projectOwner
  },{
    $inc: {votes: 1} 
  })

  const projects = await Project.find().select({_id: 0, projectOwner: 0, __v: 0})

  const io = req.app.get("io");
  io.emit("vote-update", projects);

  return res.status(201).send("Resource Updated")
}

const getResultProjectData = async (req,res)=>{
  try {
    const projectData = await Project.find().select({
      __v: 0,
      _id: 0,
      projectOwner: 0
    });

    return res.json(projectData);
  } catch (error) {
    console.error("Error: ", error);
    return;
  }
}

module.exports = {
  getProjectData,
  getPollData,
  handleVote,
  getResultProjectData
};

