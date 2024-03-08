/**
 * @fileOverview Factory DAO for Alerts
 * @namespace Factory
 */

export class AlertsDAO {

    constructor() {
        if (this.constructor === AlertsDAO) {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    insertAlert(alert) {
        throw new Error("Abstract method!");
    }

    deleteAlert(alert) {
        throw new Error("Abstract method!");
    }

    updateAlert(alert) {
        throw new Error("Abstract method!");
    }

    getAlerts(userID) {
        throw new Error("Abstract method!");
    }

    findAll() {
        throw new Error("Abstract method!");
    }
    
}
