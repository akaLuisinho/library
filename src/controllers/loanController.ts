/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from 'express';

function listLoanedBooks(req: express.Request, res: express.Response) {
    return res.render('listLoanedBooks');
}

function loanBook(req: express.Request, res: express.Response) {
    return res.render('loanBook');
}

export { listLoanedBooks, loanBook };