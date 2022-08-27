const express = require('express');
require('express-async-errors');
require('dotenv/config');
const cors = require('cors');
const ErrorMid = require('./middlewares/error.middleware');
const GroupController = require('./controllers/group.controller');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());
app.listen(PORT, () => console.log(PORT));

app.post('/group', GroupController.create);

app.use(ErrorMid);

module.exports = app;
