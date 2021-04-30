import express from 'express';
import { getBooks } from '../models/bookModel'
import { getLoaners } from '../models/loanerModel'
import { addLoan } from '../models/loanModel'

function showListLoanedBooks(req: express.Request, res: express.Response) {
    return res.render('listLoanedBooks');
}

async function showLoanBook(req: express.Request, res: express.Response) {
    const books = await getBooks()
    const loaners = await getLoaners()
    return res.render('loanBook', { books, loaners } );
}

function loanBook(req: express.Request, res: express.Response) {
    const { bookSelector, loanerSelector } = req.body
    addLoan(bookSelector, loanerSelector)
    res.redirect('/listBooks')
}

export { showListLoanedBooks, showLoanBook, loanBook };