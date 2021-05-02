import express from 'express';
import { getBookById, getBooks } from '../models/bookModel'
import { getLoanerById, getLoaners } from '../models/loanerModel'
import { getLoans, addLoan, returnBook } from '../models/loanModel'

async function showListLoanedBooks(req: express.Request, res: express.Response) {
    let pairLoanerBook = []

    const loans = await getLoans()

    for(const loan of loans) {
        const book = await getBookById(loan.bookId)
        const loaner = await getLoanerById(loan.loanerId)

        const calculateExpiration = Math.floor((loan.loanDate - Date.now()) / (1000*60*60*24))

        const loanData = {
            ...loan,
            ...loaner,
            ...book,
            loanDate: calculateExpiration,
            id: loan.id
        }
        pairLoanerBook.push(loanData)
    }
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

    return res.redirect('/loanedBooks')
}

function setReturned(req: express.Request, res: express.Response) {
    const id = Number(req.params.id)
    returnBook(id)

    return res.redirect('/loanedBooks')
}

export { showListLoanedBooks, showLoanBook, loanBook, setReturned }