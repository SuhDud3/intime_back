/**
 * @fileOverview File containing the SavingSuggestionsDAO class.
 */

export class SavingSuggestionsDAO {

    constructor() {
        if (this.constructor === SavingSuggestionsDAO) {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    /**
     * @method getSavingSuggestions
     * @param {number} userID The user ID of the user
     * @returns {Array} The saving suggestions of the user
     */
    getSavingSuggestions(userID) {
        throw new Error("Abstract method!");
    }

    /**
     * @method insertSavingSuggestion
     * @param {SavingSuggestions} savingSuggestion The saving suggestion to insert
     */
    insertSavingSuggestion(savingSuggestion) {
        throw new Error("Abstract method!");
    }

    /**
     * @method deleteSavingSuggestion
     * @param {SavingSuggestions} savingSuggestion The saving suggestion to delete
     */
    deleteSavingSuggestion(savingSuggestion) {
        throw new Error("Abstract method!");
    }

    /**
     * @method updateSavingSuggestion
     * @param {SavingSuggestions} savingSuggestion The saving suggestion to update
     */
    updateSavingSuggestion(savingSuggestion) {
        throw new Error("Abstract method!");
    }

    /**
     * @method findAll
     * @returns {Array} All saving suggestions
     */
    findAll() {
        throw new Error("Abstract method!");
    }

}