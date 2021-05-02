import express from 'express';
import { addLoanerModel, getLoaners, getLoanerById, updateLoaner, deleteLoanerModel } from '../models/loanerModel'

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

async function showEditLoaner(req: express.Request, res: express.Response) {
    const id = Number(req.params.id)

    const loaner = await getLoanerById(id)

    return res.render('editLoaner', { loaner })
}

function editLoaner(req: express.Request, res: express.Response) {
    const id = Number(req.params.id)
    const newLoanerData = req.body

    updateLoaner(id, newLoanerData)

    return res.redirect('/loaners')
}

function deleteLoaner(req: express.Request, res: express.Response) {
    const id = Number(req.params.id)

    deleteLoanerModel(id)

    return res.redirect('/loaners')
}
export { showListLoaners, showAddLoaner, addLoaner, showEditLoaner, editLoaner, deleteLoaner };