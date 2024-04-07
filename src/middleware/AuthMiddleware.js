const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/User");


const AuthMiddleware = expressAsyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers?.authorization?.split(" ")[1];
        try {
            if (token) {
                const decodedUser = await jwt.verify(token, process.env.JWT_KEY);
                //find the user
                const user = await User.findById(decodedUser?.id);
                //attach the user to the req object
                req.user = user;
                next();
            }
        } catch (error) {
            //throw error if token expiry
            throw new Error("not Authorized")
        }
    } else {
        //throw error if token not given
        throw new Error("there is no token");
    };
});



module.exports = AuthMiddleware;