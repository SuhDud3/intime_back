/**
 * @fileOverview FactoryDAO
 * @namespace Factory
 */

export class FactoryDAO {

    constructor(db) {
        if (this.constructor === FactoryDAO) {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    /**
     * @method getAlertDAO
     * @returns {AlertDAO} The alert DAO
     */
    static getAlertDAO() {
        throw new Error("Abstract method!");
    }

    /**
     * @method getBudgetsDAO
     * @returns {BudgetsDAO} The budgets DAO
     */
    static getBudgetsDAO() {
        throw new Error("Abstract method!");
    }

    /**
     * @method getCategoriesDAO
     * @returns {CategoriesDAO} The categories DAO
     */
    static getCategoriesDAO() {
        throw new Error("Abstract method!");
    }

    /**
     * @method getExpensesDAO
     * @returns {ExpensesDAO} The expenses DAO
     */
    static getExpensesDAO() {
        throw new Error("Abstract method!");
    }

    /**
     * @method getIncomeSourcesDAO
     * @returns {IncomeSourcesDAO} The income sources DAO
     */
    static getIncomeSourcesDAO() {
        throw new Error("Abstract method!");
    }   

    /**
     * @method getUsersDAO
     * @returns {UsersDAO} The users DAO
     */
     static getUsersDAO() {
        throw new Error("Abstract method!");
     }

    /**
     * @method getSavingSuggestionsDAO
     * @returns {SavingSuggestionsDAO} The saving suggestions DAO
     */
    static getSavingSuggestionsDAO() {
        throw new Error("Abstract method!");
    }

}