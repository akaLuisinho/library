/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from 'express';

function showListLoanedBooks(req: express.Request, res: express.Response) {
    return res.render('listLoanedBooks');
}

function showLoanBook(req: express.Request, res: express.Response) {
    return res.render('loanBook');
}

export { showListLoanedBooks, showLoanBook };