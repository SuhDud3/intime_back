import express from 'express';
import * as controller from '../controllers/categoryController.js';
const router = express();

// Get all categories
router.get('/', (req, res) => {
    controller.allCategories()
    .then((categories) => {
        res.status(200).json(categories);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

export default router;