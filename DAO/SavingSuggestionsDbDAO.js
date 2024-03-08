import { SavingSuggestionsDAO } from "./SavingSuggestionsDAO.js";

export class SavingSuggestionsDbDAO extends SavingSuggestionsDAO {

    constructor(db) {
        super();
        this.db = db;
    }

    insertSavingSuggestion(savingSuggestion) {
        const result = this.db.run(
            'INSERT INTO SavingSuggestions (userID, savingSuggestion) VALUES (?, ?)',
            [savingSuggestion.getUserID(), savingSuggestion.getSavingSuggestion()]
        );
        return result;
    }

    deleteSavingSuggestion(savingSuggestion) {
        const result = this.db.run(
            'DELETE FROM SavingSuggestions WHERE userID = ? AND savingSuggestion = ?',
            [savingSuggestion.getUserID(), savingSuggestion.getSavingSuggestion()]
        );
        return result;
    }

    updateSavingSuggestion(savingSuggestion) {
        const result = this.db.run(
            'UPDATE SavingSuggestions SET savingSuggestion = ? WHERE userID = ?',
            [savingSuggestion.getSavingSuggestion(), savingSuggestion.getUserID()]
        );
        return result;
    }

    getSavingSuggestions(userID) {
        const result = this.db.all(
            'SELECT * FROM SavingSuggestions WHERE userID = ?',
            [userID]
        );
        return result;
    }

    findAll() {
        const result = this.db.all(
            'SELECT * FROM SavingSuggestions'
        );
        return result;
    }

}