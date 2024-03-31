const express = require('express');
const dbconnect = require('./config/dbconnect');
const userRoute = require('./routes/users/userRoute');
const { errorHandler, notFound } = require('./middleware/errormiddleware');
const dotenv = require("dotenv");

const app = express();
//dotenv
dotenv.config();
//connect dp
dbconnect();
//express .json
app.use(express.json());
//routes
app.use('/api', userRoute);
app.use(notFound);
//error handlers
app.use(errorHandler);


module.exports = app; 