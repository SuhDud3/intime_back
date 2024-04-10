import FactoryDbDAO from "../DAO/Factory/FactoryDbDAO.js";
const factoryDbDAO = new FactoryDbDAO();
await factoryDbDAO.init();

const expensesDAO = factoryDbDAO.getExpensesDAO();

export const allExpensesUserID = async (req, res, next) => {
    try {
        const expenses = await expensesDAO.getAllExpenses(req);
        return expenses;
    } catch (error) {
        return error.message;
    }
}

export const getExpenseById = async (req, res, next) => {
    try {
        const expense = await expensesDAO.getExpenseById(req);
        return expense;
    } catch (error) {
        return error.message;
    }
}

export const addExpense = async (req, res, next) => {
    try {
        const expense = await expensesDAO.insertExpense(req);
        return expense;
    } catch (error) {
        return error.message;
    }
}