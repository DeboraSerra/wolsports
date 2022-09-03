const functions = require('firebase-functions');

const express = require('express');
require('express-async-errors');
require('dotenv/config');
const cors = require('cors');
const ErrorMid = require('./middlewares/error.middleware');
const info = require('./routes/info.route');
const user = require('./routes/user.route');
const worker = require('./routes/worker.route');
const group = require('./routes/group.route');
const admin = require('./routes/admin.route');
const metrics = require('./routes/metrics.route');
const tokenMiddleware = require('./middlewares/token.middleware');

const app = express();
app.use(express.json());
app.use(cors({
  'origin': '*',
  'methods': 'GET,POST,DELETE',
  'preflightContinue': false,
  'optionsSuccessStatus': 204
}));

app.use('/info', info);
app.use('/user', user);
app.use('/worker', worker);
app.use('/group', group);
app.use('/login', admin);

app.use(tokenMiddleware);

app.use('/metrics', metrics);

app.use(ErrorMid);

exports.app = functions.https.onRequest(app);
