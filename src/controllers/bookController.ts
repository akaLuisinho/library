import express from 'express';

function showListBooks(req: express.Request, res: express.Response) {
    res.render('listBooks');
}

function showAddBook(req: express.Request, res: express.Response) {
    res.render('addBook');
}
export { showListBooks, showAddBook };