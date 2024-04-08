import express from 'express';
import * as controller from '../controllers/incomeController.js';
const router = express();

/**
 *  @swagger
 *  /incomes:
 *    get:
 *      description: Returns all incomes
 *      responses:
 *        200:
 *          description: List of all incomes
 *      tags:
 *          - Incomes
 */
router.get('/incomes', controller.getAllIncomes);

/**
 *  @swagger
 *  /incomes/{id}:
 *    get:
 *      description: Returns a specific income
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The requested income
 *      tags:
 *          - Incomes
 */
router.get('/incomes/:id', controller.getIncomeById);

/**
 *  @swagger
 *  /incomes/user/{id}:
 *    get:
 *      description: Returns all incomes for a specific user
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The requested incomes for the user
 *      tags:
 *          - Incomes
 */
router.get('/user/:id', controller.getIncomeByUserID);

/**
 *  @swagger
 *  /incomes:
 *    post:
 *      description: Create a new income
 *      responses:
 *        200:
 *          description: New income created
 *      tags:
 *          - Incomes
 */
router.post('/incomes', controller.newIncome);

/**
 *  @swagger
 *  /incomes:
 *    delete:
 *      description: Deletes an income
 *      responses:
 *        200:
 *          description: Income deleted
 *      tags:
 *          - Incomes
 */
router.delete('/incomes', controller.deleteIncome);

/**
 *  @swagger
 *  /incomes:
 *    put:
 *      description: Update an income
 *      responses:
 *        200:
 *          description: Income updated
 *      tags:
 *          - Incomes
 */
router.put('/incomes', controller.updateIncome);


/**
 *  @swagger
 *  /incomes/labels:
 *    get:
 *      description: Returns all income labels
 *      responses:
 *        200:
 *          description: List of all income labels
 *      tags:
 *          - Incomes
 */
router.get('/labels', controller.getIncomeLabels);

export default router;
