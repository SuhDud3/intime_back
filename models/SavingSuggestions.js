/**
 * @class SavingSuggestions
 * @description SavingSuggestions class is used to save the suggestions in the database
 */

export class SavingSuggestions {

    /**
     * @constructor
     * @param {number} userID The user ID of the suggestion
     * @param {string} suggestionDetail The suggestion
     */
    constructor(userID, suggestionDetail) {
        this.userID = userID;
        this.suggestionDetail = suggestionDetail;
    }

    /**
     * @method getUserID
     * @returns {number} The user ID of the suggestion
     */
    getUserID() {
        return this.userID;
    }


    /**
     * @method getSuggestionDetail
     * @returns {string} The suggestion
     */
    getSuggestionDetail() {
        return this.suggestionDetail;
    }

    /**
     * @method setUserID
     * @param {number} userID The user ID of the suggestion
     */
    setUserID(userID) {
        this.userID = userID;
    }

    /**
     * @method setSuggestionDetail
     * @param {string} suggestionDetail The suggestion
     */
    setSuggestionDetail(suggestionDetail) {
        this.suggestionDetail = suggestionDetail;
    }

    /**
     * @method toString
     * @returns {string} A string representation of the suggestion
     */
    toString() {
        return "User ID: " + this.userID + ", Suggestion: " + this.suggestionDetail;
    }

}