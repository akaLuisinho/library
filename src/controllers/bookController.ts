/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from 'express';

function showIndex(req: express.Request, res: express.Response) {
    res.render('listBooks');
}

function addBook(req: express.Request, res: express.Response) {
    res.render('addBook');
}
export { showIndex, addBook };