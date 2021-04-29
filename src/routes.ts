import express  from 'express';
import {  redirect, showLogin, authenticate } from './controllers/loginController';
import { showIndex, addBook } from './controllers/bookController';
import { listLoaners, addLoaner } from './controllers/loanerController';
import { listLoanedBooks, loanBook }  from './controllers/loanController';

const routes = express.Router();

//login routes
routes.get('/', redirect);

routes.get('/login', showLogin);
routes.post('/login', authenticate);

//book routes
routes.get('/listBooks', showIndex);
routes.get('/addBook', addBook);

//loaner routes
routes.get('/loaners', listLoaners);
routes.get('/addLoaner', addLoaner);

//loan routes
routes.get('/loanedBooks', listLoanedBooks);
routes.get('/loanBook', loanBook);

export { routes };