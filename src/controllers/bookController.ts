import express from 'express';
import { addBookModel, getBooks, getBookById, updateBook, deleteBookModel } from '../models/bookModel'

async function showListBooks(req: express.Request, res: express.Response) {
    const bookList = await getBooks()
    
    return res.render('listBooks', { bookList } );
}

function showAddBook(req: express.Request, res: express.Response) {
    return res.render('addBook');
}

function addBook(req: express.Request, res: express.Response) {
    addBookModel(req.body)

    return res.redirect('/addBook');
}

async function showEditBook(req: express.Request, res: express.Response) {
    const id = Number(req.params.id)
    const book = await getBookById(id)

    return res.render('editBook', { book })
}

function editBook(req: express.Request, res: express.Response) {
    const id = Number(req.params.id)
    const newData = req.body

    updateBook(id, newData)

    return res.redirect('/listBooks')
}

function deleteBook(req: express.Request, res: express.Response) {
    const id = Number(req.params.id)

    deleteBookModel(id)

    return res.redirect('/listBooks')
}
export { showListBooks, showAddBook, addBook, showEditBook, editBook, deleteBook };