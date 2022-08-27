const express = require('express');
require('express-async-errors');
require('dotenv/config');
const cors = require('cors');
const ErrorMid = require('./middlewares/error.middleware');
const user = require('./routes/user.route');
const worker = require('./routes/worker.route');
const group = require('./routes/group.route');
const admin = require('./routes/admin.route');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());
app.listen(PORT, () => console.log(PORT));

app.get('/', (req, res) => res.send('OK'));

app.use('/user', user);
app.use('/worker', worker);
app.use('/group', group);
app.use('/login', admin);

app.use(ErrorMid);

module.exports = app;
