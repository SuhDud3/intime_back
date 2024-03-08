import express from 'express';
import * as controller from '../controllers/expenseController.js';
const router = express();

// Get an user by the id in the URL
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

export default router;
