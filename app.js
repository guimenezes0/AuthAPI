const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

mongoose.connect('mongodb://localhost/myapp', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => console.log('Server started on port 3000'));
