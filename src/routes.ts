import express  from 'express';

import { showListBooks, showAddBook, addBook } from './controllers/bookController';
import { showListLoaners, showAddLoaner, addLoaner, showEditLoaner, editLoaner } from './controllers/loanerController';
import { showListLoanedBooks, showLoanBook, loanBook, setReturned }  from './controllers/loanController';

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

//editloaner routes
routes.get('/loaners/edit/:id', showEditLoaner)
routes.post('/loaners/edit/:id', editLoaner)

//loan routes
routes.get('/loanedBooks', showListLoanedBooks);
routes.post('/loanedBooks/:id', setReturned)

//addloan routes
routes.get('/loanBook', showLoanBook);
routes.post('/loanBook', loanBook);

export { routes };