const expressAsyncHandler = require("express-async-handler");
const Expence = require("../../model/Expence");
//create expence
const createExpenceCtrl = expressAsyncHandler(async (req, res) => {
    const { title, amount, description, user } = req?.body;
    try {
        const expence = await Expence.create({
            title,
            amount,
            description,
            user
        });
        res.json(expence);
    } catch (error) {
        res.json(error);
    }

})

//fetch all expences
const fetchAllExpenceCtrl = expressAsyncHandler(async (req, res) => {
    const { page } = req.query;
    try {
        const expence = await Expence.paginate({}, { limit: 10, page: Number(page), populate: 'user' });
        res.json(expence);
    } catch (error) {
        res.json(error);
    }

})

//fetch single expence
const fetchExpenceDetailsCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const expence = await Expence.findById(id)
        res.json(expence);
    } catch (error) {
        res.json(error);
    }

});

//update the expence
const updateExpenceCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    const { title, amount, description } = req?.body;
    try {
        const expence = await Expence.findByIdAndUpdate(id, {
            title,
            amount,
            description,
        }, {
            new: true
        }
        );
        res.json(expence);
    } catch (error) {
        res.json(error);
    }
});
//delete single expence
const deleteExpenceCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const expence = await Expence.findByIdAndDelete(id)
        res.json(expence);
    } catch (error) {
        res.json(error);
    }

});





module.exports = { createExpenceCtrl, fetchAllExpenceCtrl, fetchExpenceDetailsCtrl, updateExpenceCtrl, deleteExpenceCtrl }