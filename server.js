const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const apiRouter = require('./apiRoutes');

mongoose.connect(config.database, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
apiRouter(app);

app.listen(config.port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Running on port ${config.port}`);
  }
});
