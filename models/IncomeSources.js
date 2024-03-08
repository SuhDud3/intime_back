/**
 * @class IncomeSources
 * @classdesc This class is used to store the income sources of the user.
 */

export class IncomeSources {

    /**
     * @constructor IncomeSources
     * @param {number} userID The user ID of the income source
     * @param {string} incomeSource The name of the income source
     * @param {number} amount The amount of the income source
     * @param {string} frequency The frequency of the income source
     */
    constructor(userID, incomeSource, amount, frequency) {
        this.userID = userID;
        this.incomeSource = incomeSource;
        this.amount = amount;
        this.frequency = frequency;
    }

    /**
     * @method getUserID
     * @returns {number} The user ID of the income source
     */
    getUserID() {
        return this.userID;
    }

    /**
     * @method getIncomeSource
     * @returns {string} The name of the income source
     */
    getIncomeSource() {
        return this.incomeSource;
    }

    /**
     * @method getAmount
     * @returns {number} The amount of the income source
     */
    getAmount() {
        return this.amount;
    }

    /**
     * @method getFrequency
     * @returns {string} The frequency of the income source
     */
    getFrequency() {
        return this.frequency;
    }

    /**
     * @method setUserID
     * @param {number} userID The user ID of the income source
     */
    setUserID(userID) {
        this.userID = userID;
    }

    /**
     * @method setIncomeSource
     * @param {string} incomeSource The name of the income source
     */
    setIncomeSource(incomeSource) {
        this.incomeSource = incomeSource;
    }

    /**
     * @method setAmount
     * @param {number} amount The amount of the income source
     */
    setAmount(amount) {
        this.amount = amount;
    }

    /**
     * @method setFrequency
     * @param {string} frequency The frequency of the income source
     */
    setFrequency(frequency) {
        this.frequency = frequency;
    }

    /**
     * @method toString
     * @returns {string} A string representation of the income source
     */
    toString() {
        return "Income Source: " + this.incomeSource + " Amount: " + this.amount + " Frequency: " + this.frequency;
    }

}