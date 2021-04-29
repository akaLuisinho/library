import express from 'express';

function showListLoaners(req: express.Request, res: express.Response) {
    res.render('listLoaners');
}

function showAddLoaner(req: express.Request, res: express.Response) {
    res.render('addLoaner');
}

export { showListLoaners, showAddLoaner };