import express from 'express';
import { addBookModel, getBooks } from '../models/bookModel'

async function showListBooks(req: express.Request, res: express.Response) {
    const bookList = await getBooks()
    console.log(bookList);
    return res.render('listBooks', { bookList } );
}

function showAddBook(req: express.Request, res: express.Response) {
    return res.render('addBook');
}

function addBook(req: express.Request, res: express.Response) {
    addBookModel(req.body)
    return res.redirect('/addBook');
}

export { showListBooks, showAddBook, addBook };