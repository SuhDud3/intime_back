/**
 * @fileOverview Factory DAO for Budgets
 * @namespace Factory
 */

export class BudgetsDAO {

    constructor() {
        if (this.constructor === BudgetsDAO) {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    insertBudgetsDAO(budget) {
        throw new Error("Abstract method!");
    }

    deleteBudgetsDAO(budget) {
        throw new Error("Abstract method!");
    }

    updateBudgetsDAO(budget) {
        throw new Error("Abstract method!");
    }
    
}
