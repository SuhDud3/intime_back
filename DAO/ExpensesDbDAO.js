import { ExpensesDAO } from "./ExpensesDAO.js";

export class ExpensesDbDAO extends ExpensesDAO {

    constructor(db) {
        super();
        this.db = db;
    }

    async insertExpense(expense) {
        const result = this.db.run(
            'INSERT INTO Expenses (userID, categoryID, dateOfExpense, amount, detail) VALUES (?, ?, ?, ?, ?)',
            [expense.userID, expense.categoryID, expense.date, expense.amount, expense.detail]
        );
        return result;
    }

    async deleteExpense(expense) {
        const result = this.db.run(
            'DELETE FROM Expenses WHERE userID = ? AND dateOfExpense = ? AND amount = ? AND detail = ?',
            [expense.userID, expense.dateOfExpense, expense.amount, expense.detail]
        );
        return result;
    }

    async updateExpense(expense) {
        const result = this.db.run(
            'UPDATE Expenses SET categoryID = ?, dateOfExpense = ?, amount = ?, detail = ? WHERE userID = ?',
            [expense.categoryID, expense.dateOfExpense, expense.amount, expense.detail, expense.userID]
        );
        return result;
    }

    async getExpense(expense) {
        const result = this.db.get(
            'SELECT * FROM Expenses WHERE userID = ? AND categoryID = ? AND dateOfExpense = ? AND amount = ? AND detail = ?',
            [expense.userID, expense.categoryID, expense.dateOfExpense, expense.amount, expense.detail]
        );
        return result;
    }

    async getAllExpenses(userID) {
        const result = this.db.all(
            'SELECT * FROM Expenses WHERE userID = ? ORDER BY dateOfExpense DESC',
            [userID]
        );
        return result;
    }

    async getExpensesByCategory(categoryID) {
        const result = this.db.all(
            'SELECT * FROM Expenses WHERE categoryID = ?',
            [categoryID]
        );
        return result;
    }

    async getExpensesByDate(date) {
        const result = this.db.all(
            'SELECT * FROM Expenses WHERE dateOfExpense = ?',
            [date]
        );
        return result;
    }

    async getExpensesByDateRange(startDate, endDate) {
        const result = this.db.all(
            'SELECT * FROM Expenses WHERE dateOfExpense >= ? AND dateOfExpense <= ?',
            [startDate, endDate]
        );
        return result;
    }

    async getExpensesByCategoryAndDate(categoryID, date) {
        const result = this.db.all(
            'SELECT * FROM Expenses WHERE categoryID = ? AND dateOfExpense = ?',
            [categoryID, date]
        );
        return result;
    }

    async getExpensesByCategoryAndDateRange(categoryID, startDate, endDate) {
        const result = this.db.all(
            'SELECT * FROM Expenses WHERE categoryID = ? AND dateOfExpense >= ? AND dateOfExpense <= ?',
            [categoryID, startDate, endDate]
        );
        return result;
    }

    async getExpensesByUserAndDate(userID, date) {
        const result = this.db.all(
            'SELECT * FROM Expenses WHERE userID = ? AND dateOfExpense = ?',
            [userID, date]
        );
        return result;
    }

    async getExpensesByUserAndDateRange(userID, startDate, endDate) {
        const result = this.db.all(
            'SELECT * FROM Expenses WHERE userID = ? AND dateOfExpense >= ? AND dateOfExpense <= ?',
            [userID, startDate, endDate]
        );
        return result;
    }

    async getExpensesByUserAndCategory(userID, categoryID) {
        const result = this.db.all(
            'SELECT * FROM Expenses WHERE userID = ? AND categoryID = ?',
            [userID, categoryID]
        );
        return result;
    }

    async getExpensesByUserAndCategoryAndDate(userID, categoryID, date) {
        const result = this.db.all(
            'SELECT * FROM Expenses WHERE userID = ? AND categoryID = ? AND dateOfExpense = ?',
            [userID, categoryID, date]
        );
        return result;
    }

    async getExpensesByDescription(description) {
        const result = this.db.get(
            'SELECT * FROM Expenses WHERE detail = ?',
            [description]
        );
        return result;
    }

}