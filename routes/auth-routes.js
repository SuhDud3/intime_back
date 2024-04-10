import express from 'express';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import initialize from '../config/passport-config.js';
import 'dotenv/config.js';
import * as authController from '../controllers/authController.js';
import * as userController from '../controllers/userController.js';
import * as expenseController from '../controllers/expenseController.js';

const router = express();

router.use(flash());
router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());

initialize(
    passport, 
    userController.getUser, 
    userController.getUserById
);

router.post('/login', checkNotAuthenticated, async (req, res, next) => {
    passport.authenticate('local', async (err, user, info) => {
        try {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(400).json({
                    message: info.message
                });
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    message: "Login successful",
                    user: user
                });
            });
        } catch (error) {
            return next(error);
        }
    }
    )(req, res, next);
});

router.post('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) {
            console.error(err.message);
            res.sendStatus(500);
        } else {
            res.redirect('/');
        }
    });
});

router.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        console.log("/register " + req.body);
        const user = await userController.newUser(req.body);
        if (user) {
            return res.status(201).json({
                status : 201,
                message: 'User created'
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('login');
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/auth/dashboard');
    }
    next();
}

export default router;