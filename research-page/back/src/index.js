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
const group = require('./routes/group.route');
const admin = require('./routes/admin.route');
const metrics = require('./routes/metrics.route');
const tokenMiddleware = require('./middlewares/token.middleware');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());
app.listen(PORT, () => console.log(PORT));

app.get('/', (req, res) => res.send('OK'));

app.use('/activity', activity);
app.use('/district', district);
app.use('/gender', gender);
app.use('/goal', goal);
app.use('/personality', personality);
app.use('/time', time);
app.use('/user', user);
app.use('/worker', worker);
app.use('/group', group);
app.use('/login', admin);

app.use(tokenMiddleware);

app.use('/metrics', metrics);

app.use(ErrorMid);

module.exports = app;
