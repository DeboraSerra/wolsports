const express = require('express');
require('express-async-errors');
require('dotenv/config');
const cors = require('cors');
const ErrorMid = require('./middlewares/error.middleware');
const activity = require('./routes/activity.route');
const district = require('./routes/district.route');
const gender = require('./routes/gender.route');
const goal = require('./routes/goal.route');
const personality = require('./routes/personality.route');
const time = require('./routes/time.route');
const user = require('./routes/user.route');
const worker = require('./routes/worker.route');

const PORT = process.env.PORT || 3001;

/* const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}; */

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.listen(PORT, () => console.log(PORT));

// app.use(accessControl);

app.use('/activity', activity);
app.use('/district', district);
app.use('/gender', gender);
app.use('/goal', goal);
app.use('/personality', personality);
app.use('/time', time);
app.use('/user', user);
app.use('/worker', worker);

app.use(ErrorMid);
