/**
 * @fileoverview CategoriesDAO.js is a file providing connection to the database for the categories.
 */

export class CategoriesDAO {

    constructor() {
        if (this.constructor === CategoriesDAO) {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    insertCategory(category) {
        throw new Error("Abstract method!");
    }

    deleteCategory(category) {
        throw new Error("Abstract method!");
    }

    updateCategory(category) {
        throw new Error("Abstract method!");
    }

    getCategories() {
        throw new Error("Abstract method!");
    }

    findAll() {
        throw new Error("Abstract method!");
    }

}