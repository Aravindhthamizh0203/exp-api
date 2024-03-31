const mongoose = require('mongoose');


const dbconnect = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL);
        console.log("db connected");
    } catch (error) {
        console.log(`Error ${error.message}`);
    }

}


module.exports = dbconnect;