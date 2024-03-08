/**
 * @fileoverview This file contains all the functions that are used to interact with the database for the users table.
 */

export class UsersDAO {

    constructor(db) {
        if (this.constructor === UsersDAO) {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    /**
     * @method insertUser
     * @param {User} user The user to insert
     * @returns {Promise} A promise that resolves with the inserted user
     */
    insertUser(user) {
        throw new Error("Abstract method!");
    }

    /**
     * @method deleteUser
     * @param {User} user The user to delete
     * @returns {Promise} A promise that resolves with the deleted user
     */
    deleteUser(user) {
        throw new Error("Abstract method!");
    }

    /**
     * @method updateUser
     * @param {User} user The user to update
     * @returns {Promise} A promise that resolves with the updated user
     */
    updateUser(user) {
        throw new Error("Abstract method!");
    }

    /**
     * @method getUser
     * @param {string} username The username of the user to get
     * @returns {Promise} A promise that resolves with the user
     */
    getUser(username) {
        throw new Error("Abstract method!");
    }

    /**
     * @method findAll
     * @returns {Promise} A promise that resolves with all the users
     */
    async findAll() {
        throw new Error("Abstract method!");
    }

}