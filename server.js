const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Bluebird = require('bluebird');
const router = require('./lib/router');

mongoose.Promise = Bluebird;
mongoose.connect('mongodb://localhost/zilean');

const app = express();

app.use(bodyParser.json());
app.use(router);

app.set('port', (process.env.API_PORT || 3001));

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
