import { test, expect } from "vitest";
import FactoryDbDAO from "../DAO/Factory/FactoryDbDAO.js";
const factoryDbDAO = new FactoryDbDAO();
await factoryDbDAO.init();

const Expenses = factoryDbDAO.getExpensesDAO();

// Test case for expense creation
test('Create Expense', async () => {

    const expense = {
        userID: 1,
        amount: 666,
        date: '2021-12-12',
        detail: 'test',
        categoryID: Math.floor(Math.random() * 5),
    };

    const create = await Expenses.insertExpense(expense);
    create;
    var get = await Expenses.getExpensesByUserAndCategoryAndDate(expense.userID, expense.categoryID, expense.date);
    expect(get[0].userID).toBe(expense.userID);
    expect(get[0].amount).toBe(expense.amount);
    expect(get[0].dateOfExpense).toBe(expense.date);
    expect(get[0].detail).toBe(expense.detail);
});

// Test case for expense delete
test('Delete Expense', async () => {
    const expense = {
        userID: 1,
        amount: 666,
        date: '2021-12-12',
        detail: 'test',
    }

    const deleteExpense = await Expenses.deleteExpense(expense);
    deleteExpense;
    const get = await Expenses.getExpense(expense)
    expect(get).toBe(undefined);
}); 

