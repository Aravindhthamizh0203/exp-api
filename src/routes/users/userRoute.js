const express = require('express');
const { registerUser, fetchAllUsersCtrl, loginUserCtrl } = require('../../controllers/users/usersCtrl');

const userRoute = express.Router();
userRoute.post('/register', registerUser);
userRoute.post('/login', loginUserCtrl);
userRoute.get('/', fetchAllUsersCtrl);
module.exports = userRoute;