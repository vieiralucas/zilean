const WorkInterval = require('../models/WorkInterval');

const create = ({ body }, res) => {
  const workInterval = new WorkInterval(body);

  const validationError = workInterval.validateSync();
  if (validationError) {
    res.status(400).json(validationError);
    return;
  }

  workInterval.save()
    .then(savedWorkInterval => {
      res.status(201).json(savedWorkInterval);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  create
};
