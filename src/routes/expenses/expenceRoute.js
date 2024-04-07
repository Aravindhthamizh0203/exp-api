const express = require('express');
const { createExpenceCtrl,
    fetchAllExpenceCtrl,
    fetchExpenceDetailsCtrl,
    updateExpenceCtrl,
    deleteExpenceCtrl
} = require('../../controllers/expenses/expenceCtrl');
const AuthMiddleware = require('../../middleware/AuthMiddleWare');

const expenceRoute = express.Router();
expenceRoute.post('/', AuthMiddleware, createExpenceCtrl);
expenceRoute.get('/', AuthMiddleware, fetchAllExpenceCtrl);
expenceRoute.get('/:id', AuthMiddleware, fetchExpenceDetailsCtrl);
expenceRoute.put('/:id', AuthMiddleware, updateExpenceCtrl);
expenceRoute.delete('/:id', AuthMiddleware, deleteExpenceCtrl);

module.exports = expenceRoute;