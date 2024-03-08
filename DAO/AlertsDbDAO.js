import { AlertsDAO } from "./AlertsDAO.js";

export class AlertsDbDAO extends AlertsDAO {

    constructor(db) {
        super();
        this.db = db;
    }

    async insertAlert(alert) {    
        const result = this.db.run(
            'INSERT INTO Alerts (userID, alertTypeID, alertDetail, alertDate) VALUES (?, ?, ?, ?)',
            [alert.userID, alert.type, alert.detail, alert.date]
        );
        return result;
    }

    async deleteAlert(alert) {
        const result = this.db.run(
            'DELETE FROM Alerts WHERE userID = ? AND alertTypeID = ? AND alertDetail = ? AND alertDate = ?',
            [alert.userID, alert.type, alert.detail, alert.date]
        );
        return result;
    }

    async updateAlert(alert) {
        const result = this.db.run(
            'UPDATE Alerts SET alertTypeID = ?, alertDetail = ? WHERE userID = ?',
            [alert.getAlertType(), alert.getAlertDetail(), alert.getUserID()]
        );
        return result;
    }

    async getAlerts(userID) {
        const result = this.db.all(
            'SELECT * FROM Alerts WHERE userID = ?',
            [userID]
        );
        return result;
    }

    async getAlert(alert) {
        const result = this.db.get(
            'SELECT * FROM Alerts WHERE userID = ? AND alertTypeID = ? AND alertDate = ?',
            [alert.userID, alert.type, alert.date]
        );
        return result;
    }

    async findAll() {
        const result = this.db.all(
            'SELECT * FROM Alerts'
        );
        return result;
    }

}
