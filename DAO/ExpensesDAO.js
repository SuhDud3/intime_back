/**
 * @fileoverview This file contains all database operations related to expenses.
 */

export class ExpensesDAO {

    constructor() {
        if (this.constructor === ExpensesDAO) {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    insertExpense(expense) {
        throw new Error("Abstract method!");
    }

    deleteExpense(expense) {
        throw new Error("Abstract method!");
    }

    updateExpense(expense) {
        throw new Error("Abstract method!");
    }

    getExpense(expense) {
        throw new Error("Abstract method!");
    }

    getAllExpenses(userID) {
        throw new Error("Abstract method!");
    }

    getExpensesByCategory(categoryID) {
        throw new Error("Abstract method!");
    }

    getExpensesByDate(date) {
        throw new Error("Abstract method!");
    }

    getExpensesByDateRange(startDate, endDate) {
        throw new Error("Abstract method!");
    }

    getExpensesByCategoryAndDate(categoryID, date) {
        throw new Error("Abstract method!");
    }

    getExpensesByCategoryAndDateRange(categoryID, startDate, endDate) {
        throw new Error("Abstract method!");
    }

    getExpensesByUserAndDate(userID, date) {
        throw new Error("Abstract method!");
    }

    getExpensesByUserAndDateRange(userID, startDate, endDate) {
        throw new Error("Abstract method!");
    }

    getExpensesByUserAndCategory(userID, categoryID) {
        throw new Error("Abstract method!");
    }

    getExpensesByUserAndCategoryAndDate(userID, categoryID, date) {
        throw new Error("Abstract method!");
    }

}