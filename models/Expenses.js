/**
 * @class Expenses
 * @classdesc This class is used to create an expense object.
 */

export class Expenses {

    /**
     * @constructor Expenses
     * @param {number} userID The user ID of the expense
     * @param {number} categoryID The category ID of the expense
     * @param {number} amount The amount of the expense
     * @param {string} date The date of the expense
     * @param {string} detail The detail of the expense
     */
    constructor(userID, categoryID, amount, date, detail) {
        this.userID = userID;
        this.categoryID = categoryID;
        this.amount = amount;
        this.date = date;
        this.detail = detail;
    }

    /**
     * @method getUserID
     * @returns {number} The user ID of the expense
     */
    getUserID() {
        return this.userID;
    }

    /**
     * @method getCategoryID
     * @returns {number} The category ID of the expense
     */
    getCategoryID() {
        return this.categoryID;
    }

    /**
     * @method getAmount
     * @returns {number} The amount of the expense
     */
    getAmount() {
        return this.amount;
    }

    /**
     * @method getDate
     * @returns {string} The date of the expense
     */
    getDate() {
        return this.date;
    }

    /**
     * @method getDetail
     * @returns {string} The detail of the expense
     */
    getDetail() {
        return this.detail;
    }

    /**
     * @method setUserID
     * @param {number} userID The user ID of the expense
     */
    setUserID(userID) {
        this.userID = userID;
    }

    /**
     * @method setCategoryID
     * @param {number} categoryID The category ID of the expense
     */
    setCategoryID(categoryID) {
        this.categoryID = categoryID;
    }

    /**
     * @method setAmount
     * @param {number} amount The amount of the expense
     */
    setAmount(amount) {
        this.amount = amount;
    }

    /**
     * @method setDate
     * @param {string} date The date of the expense
     */
    setDate(date) {
        this.date = date;
    }

    /**
     * @method setDetail
     * @param {string} detail The detail of the expense
     */
    setDetail(detail) {
        this.detail = detail;
    }

}