import express from 'express';
import jwt from 'jsonwebtoken';
import * as UsersControllers from '../controllers/userController.js';
const router = express();

// Get an user by the id in the URL
router.get('/:id', (req, res) => {
    const id = req.params.id;
    UsersControllers.getUserById(id)
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

router.get('/users', UsersControllers.getAllUsers);

router.get('/users/email/:email', UsersControllers.getUser);


router.post('/users/delete', UsersControllers.deleteUser);

export default router;

/**
 * @swagger
 * /{id}:
 *   get:
 *     description: Gets a user by id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the user with the specified id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/paths/User'
 *       500:
 *         description: Error Message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /users:
 *   get:
 *     description: Gets all users
 *     responses:
 *       200:
 *         description: Returns all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/paths/User'
 */

/**
 * @swagger
 * /users/email/{email}:
 *   get:
 *     description: Gets a user with the specific email
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the user with the specified email
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/paths/User'
 */

/**
 * @swagger
 * /users/delete:
 *   post:
 *     description: Delete a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/paths/User'
 *     responses:
 *       200:
 *         description: User deleted successfully
 */