const express = require('express');
const dbconnect = require('./config/dbconnect');
const userRoute = require('./routes/users/userRoute');
const { errorHandler, notFound } = require('./middleware/errormiddleware');
const dotenv = require("dotenv");
const incomeRoute = require('./routes/income/incomeRoute');
const expenceRoute = require('./routes/expenses/expenceRoute');

const app = express();
//dotenv
dotenv.config();
//connect dp
dbconnect();
//express .json
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ msg: "welcome to my app" })
})
// users routes
app.use('/api/users', userRoute);
//income routes
app.use('/api/income', incomeRoute);
//expence routes
app.use('/api/expence', expenceRoute);
//not found routes
app.use(notFound);
//error handlers
app.use(errorHandler);


module.exports = app; 