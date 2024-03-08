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
