import { IncomesDAO } from './IncomesDAO.js';

export class IncomesDbDAO extends IncomesDAO {

    constructor(db) {
        super();
        this.db = db;
    }

    insertIncomes(incomeSource) {
        const result = this.db.run(
            'INSERT INTO Income_Sources (userID, incomeSourceName, incomeSourceAmount) VALUES (?, ?, ?)',
            [incomeSource.getUserID(), incomeSource.getIncomeSourceName(), incomeSource.getIncomeSourceAmount()]
        );
        return result;
    }

    deleteIncomes(incomeSource) {
        const result = this.db.run(
            'DELETE FROM Income_Sources WHERE userID = ? AND incomeSourceName = ? AND incomeSourceAmount = ?',
            [incomeSource.getUserID(), incomeSource.getIncomeSourceName(), incomeSource.getIncomeSourceAmount()]
        );
        return result;
    }

    updateIncomes(incomeSource) {
        const result = this.db.run(
            'UPDATE Income_Sources SET incomeSourceName = ?, incomeSourceAmount = ? WHERE userID = ?',
            [incomeSource.getIncomeSourceName(), incomeSource.getIncomeSourceAmount(), incomeSource.getUserID()]
        );
        return result;
    }

    getIncomes(userID) {
        const result = this.db.all(
            'SELECT * FROM Income_Sources WHERE userID = ?',
            [userID]
        );
        return result;
    }

    findAll() {
        const result = this.db.all(
            'SELECT * FROM Income_Sources'
        );
        return result;
    }

    getIncomeByUserID(userID) {
        const result = this.db.all(
            'SELECT * FROM Income_Sources WHERE userID = ?',
            [userID]
        );
        return result;
    }

    getIncomesLabels() {
        const result = this.db.all(
            'SELECT * FROM Income_Sources_Labels'
        );
        return result;
    }

}