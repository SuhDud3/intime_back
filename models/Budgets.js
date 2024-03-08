/**
 * @class Budgets
 * @classdesc Budgets class that contains all the budgets
 */

export class Budgets {

    constructor(userID, categoryID, amount) {
        this.userID = userID;
        this.categoryID = categoryID;
        this.amount = amount;
    }

    /**
     * @method getUserID
     * @returns {number} The user ID of the budget
     */
    getUserID() {
        return this.userID;
    }

    /**
     * @method getCategoryID
     * @returns {number} The category ID of the budget
     */
    getCategoryID() {
        return this.categoryID;
    }

    /**
     * @method getAmount
     * @returns {number} The amount of the budget
     */
    getAmount() {
        return this.amount;
    }

    /**
     * @method setUserID
     * @param {number} userID The user ID of the budget
     */
    setUserID(userID) {
        this.userID = userID;
    }
    
    /**
     * @method setCategoryID
     * @param {number} categoryID The category ID of the budget
     */
    setCategoryID(categoryID) {
        this.categoryID = categoryID;
    }

    /**
     * @method setAmount
     * @param {number} amount The amount of the budget
     */
    setAmount(amount) {
        this.amount = amount;
    }

    /**
     * @method toString
     * @returns {string} A string representation of the budget
     */
    toString() {
        return "Budgets{" + "userID=" + this.userID + ", categoryID=" + this.categoryID + ", amount=" + this.amount + '}';
    }
    
}
