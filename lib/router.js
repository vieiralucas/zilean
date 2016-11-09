const Router = require('express').Router;

const WorkIntervalsController = require('./controllers/WorkIntervals');
const ProjectsController = require('./controllers/Projects');

const router = new Router();

router.post('/api/v1/work-interval', WorkIntervalsController.create);

router.post('/api/v1/project', ProjectsController.create);

module.exports = router;
