import { BudgetsDAO } from "./BudgetsDAO.js";

export class BudgetsDbDAO extends BudgetsDAO {

    constructor(db) {
        super();
        this.db = db;
    }

    insertBudget(budget) {
        const result = this.db.run(
            'INSERT INTO Budgets (userID, budgetType, budgetAmount) VALUES (?, ?, ?)',
            [budget.getUserID(), budget.getBudgetType(), budget.getBudgetAmount()]
        );
        return result;
    }

    deleteBudget(budget) {
        const result = this.db.run(
            'DELETE FROM Budgets WHERE userID = ? AND budgetType = ? AND budgetAmount = ?',
            [budget.getUserID(), budget.getBudgetType(), budget.getBudgetAmount()]
        );
        return result;
    }

    updateBudget(budget) {
        const result = this.db.run(
            'UPDATE Budgets SET budgetType = ?, budgetAmount = ? WHERE userID = ?',
            [budget.getBudgetType(), budget.getBudgetAmount(), budget.getUserID()]
        );
        return result;
    }

    getBudgets(userID) {
        const result = this.db.all(
            'SELECT * FROM Budgets WHERE userID = ?',
            [userID]
        );
        return result;
    }

    findAll() {
        const result = this.db.all(
            'SELECT * FROM Budgets'
        );
        return result;
    }

}
