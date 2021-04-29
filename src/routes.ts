import express  from 'express';
import {  redirect, showLogin, login } from './controllers/loginController';
import { showListBooks, showAddBook } from './controllers/bookController';
import { showListLoaners, showAddLoaner } from './controllers/loanerController';
import { showListLoanedBooks, showLoanBook }  from './controllers/loanController';

const routes = express.Router();

//login routes
routes.get('/', redirect);

routes.get('/login', showLogin);
routes.post('/login', login);

//book routes
routes.get('/listBooks', showListBooks);
routes.get('/addBook', showAddBook);

//loaner routes
routes.get('/loaners', showListLoaners);
routes.get('/addLoaner', showAddLoaner);

//loan routes
routes.get('/loanedBooks', showListLoanedBooks);
routes.get('/loanBook', showLoanBook);

export { routes };