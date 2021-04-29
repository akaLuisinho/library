import express from 'express';
import { addLoanerModel, getLoaners } from '../models/loanerModel'

async function showListLoaners(req: express.Request, res: express.Response) {
    const loanersList = await getLoaners()
    return res.render('listLoaners',{ loanersList });
} 

function showAddLoaner(req: express.Request, res: express.Response) {
    return res.render('addLoaner');
}

function addLoaner(req: express.Request, res: express.Response) {
    addLoanerModel(req.body)
    return res.redirect('/addLoaner')
}   

export { showListLoaners, showAddLoaner, addLoaner };