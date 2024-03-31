const User = require("../../model/user");
const expressasynchandler = require("express-async-handler");



const registerUser = expressasynchandler(async (req, res) => {
    const { email, firstname, lastname, password } = req?.body;
    //check user exist  
    const userexist = await User.findOne({ email });
    //validate user exists anf throw error
    if (userexist) throw new Error("user already exists")
    try {


        const user = await User.create({ email, firstname, lastname, password });
        res.status(200).json(user);
    }
    catch (error) {
        res.json(error);
    }
});

// fetch all user
const fetchAllUsersCtrl = expressasynchandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
})



module.exports = { registerUser, fetchAllUsersCtrl };