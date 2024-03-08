/**
 * @fileOverview DAO for authentification
 * 
 */

export class AuthentificationDAO {
    
        constructor() {
            if (this.constructor === AuthentificationDAO) {
                throw new Error("Can't instantiate abstract class!");
            }
        }
    
        insertToken(token) {
            throw new Error("Abstract method!");
        }
    
        deleteToken(token) {
            throw new Error("Abstract method!");
        }
    
        updateToken(token) {
            throw new Error("Abstract method!");
        }
    
        getToken(userID) {
            throw new Error("Abstract method!");
        }
    
        findAll() {
            throw new Error("Abstract method!");
        }
        
    }