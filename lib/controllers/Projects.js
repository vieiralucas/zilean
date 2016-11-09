const Project = require('../models/Project');

const create = ({ body }, res) => {
  const project = new Project(body);

  const validationError = project.validateSync();
  if (validationError) {
    res.status(400).json(validationError);
    return;
  }

  project.save()
    .then(savedProject => {
      res.status(201).json(savedProject);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  create
};
