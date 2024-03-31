const express = require('express');
const { registerUser, fetchAllUsersCtrl } = require('../../controllers/users/usersCtrl');

const userRoute = express.Router();
userRoute.post('/register', registerUser);
userRoute.get('/users', fetchAllUsersCtrl);
module.exports = userRoute;