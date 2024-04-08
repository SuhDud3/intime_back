import express from 'express';
import * as controller from '../controllers/categoryController.js';
const router = express();

/** 
 *  @swagger
 *  /:
 *    get:
 *      description: Returns all categories
 *      responses:
 *        200:
 *          description: List of all categories
 *      tags:
 *          - Categories
 */
router.get('/', (req, res) => {
    controller.allCategories()
    .then((categories) => {
        res.status(200).json(categories);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

/**
 *  @swagger
 *  /category/{id}:
 *    get:
 *      description: Returns a specific category
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The requested category
 *      tags:
 *          - Categories
 */
router.get('/category/:id', (req, res) => {
    const id = req.params.id;
    controller.getCategoryById(id)
    .then((category) => {
        res.status(200).json(category);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

/**
 *  @swagger
 *  /add:
 *    post:
 *      description: Create a new category
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                category_name:
 *                  type: string
 *      responses:
 *        200:
 *          description: The new category
 *      tags:
 *          - Categories
 */
router.post('/add', (req, res) => {
    const category = req.body;
    controller.addCategory(category)
    .then((category) => {
        res.status(200).json(category);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

/**
 *  @swagger
 *  /update:
 *    put:
 *      description: Update a category
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                category_id:
 *                  type: string
 *                category_name:
 *                  type: string
 *      responses:
 *        200:
 *          description: The updated category
 *      tags:
 *          - Categories
 */
router.put('/update', (req, res) => {
    const category = req.body;
    controller.updateCategory(category)
    .then((category) => {
        res.status(200).json(category);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

/**
 *  @swagger
 *  /delete/{id}:
 *    delete:
 *      description: Delete a category
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The deleted category
 *      tags:
 *          - Categories
 */
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    controller.deleteCategory(id)
    .then((category) => {
        res.status(200).json(category);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

export default router;


