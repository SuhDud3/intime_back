import express from 'express';
import jwt from 'jsonwebtoken';
import * as UsersControllers from '../controllers/userController.js';
const router = express();

/**
 *  @swagger
 *  /{id}:
 *    get:
 *      description: Returns a user with the specified id
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The requested user
 *        500:
 *          description: Error Message
 *      tags:
 *          - Users
 */
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

/**
 *  @swagger
 *  /users:
 *    get:
 *      description: Returns all users
 *      responses:
 *        200:
 *          description: List of all users
 *      tags:
 *          - Users
 */
router.get('/users', UsersControllers.getAllUsers);

/**
 *  @swagger
 *  /users/email/{email}:
 *    get:
 *      description: Returns a user with the specified email
 *      parameters:
 *        - in: path
 *          name: email
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The requested user
 *      tags:
 *          - Users
 */
router.get('/users/email/:email', UsersControllers.getUser);

/** 
 *  @swagger
 *  /users/delete:
 *    post:
 *      description: Delete a user
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/paths/User'
 *      responses:
 *        200:
 *          description: User deleted successfully
 *      tags:
 *          - Users
 */
router.post('/users/delete', UsersControllers.deleteUser);

/**
 *  @swagger
 *  /update/{id}:
 *   put:
 *    description: Update a user
 *   parameters:
 *    - in: path
 *     name: id
 *    required: true
 *   schema:
 *   type: string
 *  responses:
 *   200:
 *   description: The updated user
 * tags:
 * - Users
 */
router.put('/update/:id', UsersControllers.updateUser);

/** 
 *  @swagger
 *  /update/firstname:
 *   post:
 *   description: Update a user's first name
 *  requestBody:
 *  required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/paths/User'
 * responses:
 * 200:
 * description: The updated user
 * tags:
 * - Users
 */
router.post('/update/firstname', UsersControllers.updateUserFirstName);

/** 
 *  @swagger
 *  /update/lastname:
 *   post:
 *   description: Update a user's last name
 *  requestBody:
 *  required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/paths/User'
 * responses:
 * 200:
 * description: The updated user
 * tags:
 * - Users
 */
router.post('/update/lastname', UsersControllers.updateUserLastName);

/** 
 *  @swagger
 *  /update/username:
 *   post:
 *   description: Update a user's username
 *  requestBody:
 *  required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/paths/User'
 * responses:
 * 200:
 * description: The updated user
 * tags:
 * - Users
 */
router.post('/update/username', UsersControllers.updateUserUsername);

/** 
 *  @swagger
 *  /update/password:
 *   post:
 *   description: Update a user's password
 *  requestBody:
 *  required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/paths/User'
 * responses:
 * 200:
 * description: The updated user
 * tags:
 * - Users
 */
router.post('/update/password', UsersControllers.updateUserPassword);

/** 
 *  @swagger
 *  /update/email:
 *   post:
 *   description: Update a user's email
 *  requestBody:
 *  required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/paths/User'
 * responses:
 * 200:
 * description: The updated user
 * tags:
 * - Users
 */
router.post('/update/email', UsersControllers.updateUserEmail);

export default router;
