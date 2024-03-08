import { CategoriesDAO } from "./CategoriesDAO.js";

export class CategoriesDbDAO extends CategoriesDAO {

    constructor(db) {
        super();
        this.db = db;
    }

    async insertCategory(category) {
        const result = this.db.run(
            'INSERT INTO Categories (categoryName) VALUES (?)',
            [category.name]
        );
        return result;
    }

    async deleteCategory(category) {
        const result = this.db.run(
            'DELETE FROM Categories WHERE categoryName = ?',
            [category.name]
        );
        return result;
    }

    async updateCategory(category) {
        const result = this.db.run(
            'UPDATE Categories SET categoryName = ? WHERE categoryName = ?',
            [category.newName, category.name]
        );
        return result;
    }

    async getCategories() {
        const result = this.db.all(
            'SELECT * FROM Categories'
        );
        return result;
    }

    async getCategoryByName(name) {
        const result = this.db.get(
            'SELECT * FROM Categories WHERE categoryName = ?',
            [name]
        );
        return result;
    }

    async findAll() {
        const result = this.db.all(
            'SELECT * FROM Categories'
        );
        return result;
    }

}