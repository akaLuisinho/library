/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from 'express';

function redirect(req: express.Request, res: express.Response) {
    return res.redirect('/login');
}

function showLogin(req: express.Request, res: express.Response) {
    return res.render('login');
}

function login(req: express.Request, res: express.Response) {
    console.log(req.body);
    return res.redirect('/listBooks');
}

export { redirect, showLogin, login };