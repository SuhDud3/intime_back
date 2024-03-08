/**
 * @class Alert
 * @classdesc An alert that is sent to a user
 */
export class Alert {
    
    constructor(userID, alertType, alertDetail) {
        this.userID = userID;
        this.alertType = alertType;
        this.alertDetail = alertDetail;
    }

    /**
     * @method getAlertType
     * @returns {string} The type of alert
     */
    getAlertType() {
        return this.alertType;
    }

    /**
     * @method getAlertDetail
     * @returns {string} The detail of the alert
     */
    getAlertDetail() {
        return this.alertDetail;
    }

    /**
     * @method getUserID
     * @returns {number} The user ID of the alert
     */
    getUserID() {
        return this.userID;
    }

    /**
     * @method setAlertType
     * @param {string} type The type of alert
     */
    setAlertType(type) {
        this.alertType = type;
    }

    /**
     * @method setAlertDetail
     * @param {string} detail The detail of the alert
     */
    setAlertDetail(detail) {
        this.alertDetail = detail;
    }

    /**
     * @method setUserID
     * @param {number} userID The user ID of the alert
     */
    setUserID(userID) {
        this.userID = userID;
    }

}
