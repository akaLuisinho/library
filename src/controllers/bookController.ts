import express from 'express';
import { addBookModel } from '../models/bookModel'

function showListBooks(req: express.Request, res: express.Response) {
    res.render('listBooks');
}

function showAddBook(req: express.Request, res: express.Response) {
    res.render('addBook');
}

function addBook(req: express.Request, res: express.Response) {
    addBookModel(req.body)
    return res.redirect('/listBooks');
}

export { showListBooks, showAddBook, addBook };