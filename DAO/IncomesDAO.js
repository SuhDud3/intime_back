/**
 * @fileoverview  File to manage the IncomesDAO methods.
 * 
 */

export class IncomesDAO {

    constructor() {
        if (this.constructor === IncomesDAO) {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    /**
     * @method insertIncomeSource
     * @param {IncomeSources} incomeSource The income source to insert
     * @returns {boolean} True if the income source was inserted, false otherwise
     */
    insertIncomeSource(incomeSource) {
        throw new Error("Abstract method!");
    }

    /**
     * @method deleteIncomeSource
     * @param {IncomeSources} incomeSource The income source to delete
     * @returns {boolean} True if the income source was deleted, false otherwise
     */
    deleteIncomeSource(incomeSource) {
        throw new Error("Abstract method!");
    }

    /**
     * @method updateIncomeSource
     * @param {IncomeSources} incomeSource The income source to update
     * @returns {boolean} True if the income source was updated, false otherwise
     */
    updateIncomeSource(incomeSource) {
        throw new Error("Abstract method!");
    }

    /**
     * @method getIncomeSources
     * @param {number} userID The user ID of the income source
     * @returns {IncomeSources[]} The income sources of the user
     */
    getIncomeSources(userID) {
        throw new Error("Abstract method!");
    }   

}