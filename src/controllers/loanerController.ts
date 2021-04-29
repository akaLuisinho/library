/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from 'express';

function listLoaners(req: express.Request, res: express.Response) {
    res.render('listLoaners');
}

function addLoaner(req: express.Request, res: express.Response) {
    res.render('addLoaner');
}

export { listLoaners, addLoaner };