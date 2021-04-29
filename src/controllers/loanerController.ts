import express from 'express';

import { addLoanerModel } from '../models/loanerModel'

function showListLoaners(req: express.Request, res: express.Response) {
    res.render('listLoaners');
}

function showAddLoaner(req: express.Request, res: express.Response) {
    res.render('addLoaner');
}

function addLoaner(req: express.Request, res: express.Response) {
    addLoanerModel(req.body)
    return res.redirect('/addLoaner')
}   

export { showListLoaners, showAddLoaner, addLoaner };