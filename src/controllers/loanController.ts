import express from 'express';
import { getBooks } from '../models/bookModel'
import { getLoaners } from '../models/loanerModel'
import { getLoans, addLoan, returnBook } from '../models/loanModel'

async function showListLoanedBooks(req: express.Request, res: express.Response) {
    const pairLoanerBook = await getLoans()

    return res.render('listLoanedBooks', { pairLoanerBook });
}

async function showLoanBook(req: express.Request, res: express.Response) {
    const books = await getBooks()
    const loaners = await getLoaners()

    return res.render('loanBook', { books, loaners } );
}

function loanBook(req: express.Request, res: express.Response) {
    const { bookSelector, loanerSelector } = req.body
    addLoan(bookSelector, loanerSelector)

    return res.redirect('/listBooks')
}

function setReturned(req: express.Request, res: express.Response) {
    const id = Number(req.params.id)
    returnBook(id)

    return res.redirect('/loanedBooks')
}

export { showListLoanedBooks, showLoanBook, loanBook, setReturned }