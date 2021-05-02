import express  from 'express';

import { showListBooks, showAddBook, addBook, showEditBook, editBook, deleteBook } from './controllers/bookController';
import { showListLoaners, showAddLoaner, addLoaner, showEditLoaner, editLoaner, deleteLoaner } from './controllers/loanerController';
import { showListLoanedBooks, showLoanBook, loanBook, setReturned }  from './controllers/loanController';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.redirect('/listBooks')
})

//BOOKS ROUTES
routes.get('/listBooks', showListBooks);

//add book routes
routes.get('/addBook', showAddBook);
routes.post('/addBook', addBook);

//edit book routes
routes.get('/listBooks/edit/:id', showEditBook);
routes.post('/listBooks/edit/:id', editBook);

//delete book routes
routes.post('/listBooks/delete/:id', deleteBook);


//LOANER ROUTES
routes.get('/loaners', showListLoaners);

//add loaner routes
routes.get('/addLoaner', showAddLoaner);
routes.post('/addLoaner', addLoaner)

//edit loaner routes
routes.get('/loaners/edit/:id', showEditLoaner)
routes.post('/loaners/edit/:id', editLoaner)

//delete loaner routes
routes.post('/loaners/delete/:id', deleteLoaner)


//LOAN ROUTES
routes.get('/loanedBooks', showListLoanedBooks);
routes.post('/loanedBooks/:id', setReturned)

//add loan routes
routes.get('/loanBook', showLoanBook);
routes.post('/loanBook', loanBook);

export { routes };