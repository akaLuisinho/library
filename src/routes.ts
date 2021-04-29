import express  from 'express';

import { showListBooks, showAddBook, addBook } from './controllers/bookController';
import { showListLoaners, showAddLoaner, addLoaner } from './controllers/loanerController';
import { showListLoanedBooks, showLoanBook }  from './controllers/loanController';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.redirect('/listBooks')
})
//BOOKS ROUTES
routes.get('/listBooks', showListBooks);

//addbook routes
routes.get('/addBook', showAddBook);
routes.post('/addBook', addBook);


//LOANER ROUTES
routes.get('/loaners', showListLoaners);

//addloaner routes
routes.get('/addLoaner', showAddLoaner);
routes.post('/addLoaner', addLoaner)

//loan routes
routes.get('/loanedBooks', showListLoanedBooks);
routes.get('/loanBook', showLoanBook);

export { routes };