const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const workIntervalSchema = new Schema({
  projectId: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true,
    validate: [ endDateValidator, 'end must be greater than start' ]
  }
});

const dayInMillis = 1000 * 60 * 60 * 24;
workIntervalSchema.pre('validate', function(next) {
  const dateTimeDiff = this.end.getTime() - this.start.getTime();
  if (dateTimeDiff > dayInMillis) {
    next(new Error('Time diff must not be greater than a day'));
    return;
  }

  next();
});

function endDateValidator(endDate) {
  return this.start <= endDate;
}

const WorkInterval = mongoose.model('WorkInterval', workIntervalSchema);

module.exports = WorkInterval;
