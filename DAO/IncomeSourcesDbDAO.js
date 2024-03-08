import { IncomeSourcesDAO } from './IncomeSourcesDAO.js';

export class IncomeSourcesDbDAO extends IncomeSourcesDAO {

    constructor(db) {
        super();
        this.db = db;
    }

    insertIncomeSource(incomeSource) {
        const result = this.db.run(
            'INSERT INTO IncomeSources (userID, incomeSourceName, incomeSourceAmount) VALUES (?, ?, ?)',
            [incomeSource.getUserID(), incomeSource.getIncomeSourceName(), incomeSource.getIncomeSourceAmount()]
        );
        return result;
    }

    deleteIncomeSource(incomeSource) {
        const result = this.db.run(
            'DELETE FROM IncomeSources WHERE userID = ? AND incomeSourceName = ? AND incomeSourceAmount = ?',
            [incomeSource.getUserID(), incomeSource.getIncomeSourceName(), incomeSource.getIncomeSourceAmount()]
        );
        return result;
    }

    updateIncomeSource(incomeSource) {
        const result = this.db.run(
            'UPDATE IncomeSources SET incomeSourceName = ?, incomeSourceAmount = ? WHERE userID = ?',
            [incomeSource.getIncomeSourceName(), incomeSource.getIncomeSourceAmount(), incomeSource.getUserID()]
        );
        return result;
    }

    getIncomeSources(userID) {
        const result = this.db.all(
            'SELECT * FROM IncomeSources WHERE userID = ?',
            [userID]
        );
        return result;
    }

    findAll() {
        const result = this.db.all(
            'SELECT * FROM IncomeSources'
        );
        return result;
    }

}