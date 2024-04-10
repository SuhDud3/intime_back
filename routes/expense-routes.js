import express from 'express';
import * as controller from '../controllers/expenseController.js';
const router = express();

/**
 *  @swagger
 *  /:userid:
 *    get:
 *      description: Returns all expenses for a specific user
 *      responses:
 *        200:
 *          description: List of all expenses for the user
 *      tags:
 *          - Expenses
 */
router.get('/:userid', (req, res) => {
    const userid = req.params.userid;
    controller.allExpensesUserID(userid)
    .then((expenses) => {
        res.status(200).json(expenses);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});


/**
 *  @swagger
 *  /expense/{id}:
 *    get:
 *      description: Returns a specific expense
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The requested expense
 *      tags:
 *          - Expenses
 */
router.get('/expense/:id', (req, res) => {
    const id = req.params.id;
    controller.getExpenseById(id)
    .then((expense) => {
        res.status(200).json(expense);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

/**
 *  @swagger
 *  /add:
 *    post:
 *      description: Create a new expense
 *      responses:
 *        200:
 *          description: New expense created
 *      tags:
 *          - Expenses
 */
router.post('/add', (req, res) => {
    const expense = req.body;
    controller.addExpense(expense)
    .then((expense) => {
        res.status(201).json({
            status: 201
        });
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

/**
 *  @swagger
 *  /delete:
 *    delete:
 *      description: Deletes an expense
 *      responses:
 *        200:
 *          description: Expense deleted
 *      tags:
 *          - Expenses
 */
router.post('/delete', (req, res) => {
    const id = req.body.id;
    controller.deleteExpense(id)
    .then((expense) => {
        res.status(200).json(expense);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

/**
 *  @swagger
 *  /update/{id}:
 *    put:
 *      description: Update an expense
 *      responses:
 *        200:
 *          description: Expense updated
 *      tags:
 *          - Expenses
 */
router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const expense = req.body;
    controller.updateExpense(id, expense)
    .then((expense) => {
        res.status(200).json(expense);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});


export default router;
