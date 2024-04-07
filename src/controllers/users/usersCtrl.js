const generateToken = require("../../middleware/generateToken");
const User = require("../../model/User");
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
//login user
const loginUserCtrl = expressasynchandler(async (req, res) => {
    const { email, password } = req.body;
    //find the user in db
    const userFound = await User.findOne({ email });
    //check the password matches
    if (userFound && (await userFound?.isPasswordMatch(password))) {
        res.json({
            _id: userFound?._id,
            firstname: userFound?.firstname,
            lastname: userFound?.lastname,
            email: userFound?.email,
            isAdmin: userFound?.isAdmin,
            token: generateToken(userFound?._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid Login credentials')
    }

})


module.exports = { registerUser, fetchAllUsersCtrl, loginUserCtrl };