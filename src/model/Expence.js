const mongoose = require("mongoose");
const mongoosepaginate = require("mongoose-paginate-v2");
//schema
const expenceSchema = mongoose.Schema({
    title: {
        required: [true, "title"],
        type: String
    }, description: {
        required: [true, "description"],
        type: String
    },
    type: {
        defult: "expence",
        type: String
    },
    amount: {
        required: [true, "amount"],
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,//mongoDB ID
        ref: 'User',
        required: [true, "User ID is required"],
    }
}, {
    timestamp: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
})
expenceSchema.plugin(mongoosepaginate);
const Expence = mongoose.model('Expence', expenceSchema);
module.exports = Expence;