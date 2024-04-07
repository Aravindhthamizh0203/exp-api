const express = require('express');
const { createIncomeCtrl, fetchAllIncomeCtrl, fetchIncomeDetailsCtrl, updateIncomeCtrl, deleteIncomeCtrl } = require('../../controllers/income/incomeCtrl');
const AuthMiddleware = require('../../middleware/AuthMiddleWare');

const incomeRoute = express.Router();
incomeRoute.post('/', AuthMiddleware, createIncomeCtrl);
incomeRoute.get('/', AuthMiddleware, fetchAllIncomeCtrl);
incomeRoute.get('/:id', AuthMiddleware, fetchIncomeDetailsCtrl);
incomeRoute.put('/:id', AuthMiddleware, updateIncomeCtrl);
incomeRoute.delete('/:id', AuthMiddleware, deleteIncomeCtrl);
module.exports = incomeRoute;