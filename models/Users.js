/**
 * @class Users
 * @classdesc Users class
 */

export default class Users {

    constructor(id, username, password, email, totalIncome, totalExpense, notifications, lastLogin, creationDate, isPremium, authTokens) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.totalIncome = totalIncome;
        this.totalExpense = totalExpense;
        this.notifications = notifications;
        this.lastLogin = lastLogin;
        this.creationDate = creationDate;
        this.isPremium = isPremium;
        this.authTokens = authTokens;
    }

    /**
     * @method getId
     * @returns {string} The id of the user
     */
    getId() {
        return this.id;
    }

    /**
     * @method getUsername
     * @returns {string} The username of the user
     */
    getUsername() {
        return this.username;
    }

    /**
     * @method getPassword
     * @returns {string} The password of the user
     */
    getPassword() {
        return this.password;
    }

    /**
     * @method getEmail
     * @returns {string} The email of the user
     */
    getEmail() {
        return this.email;
    }

    /**
     * @method getTotalIncome
     * @returns {number} The total income of the user
     */
    getTotalIncome() {
        return this.totalIncome;
    }

    /**
     * @method getTotalExpense
     * @returns {number} The total expense of the user
     */
    getTotalExpense() {
        return this.totalExpense;
    }

    /**
     * @method getNotifications
     * @returns {boolean} The notifications of the user
     */
    getNotifications() {
        return this.notifications;
    }

    /**
     * @method getLastLogin
     * @returns {Date} The last login of the user
     */
    getLastLogin() {
        return this.lastLogin;
    }

    /**
     * @method getCreationDate
     * @returns {Date} The creation date of the user
     */
    getCreationDate() {
        return this.creationDate;
    }

    /**
     * @method getIsPremium
     * @returns {boolean} The isPremium of the user
     */
    getIsPremium() {
        return this.isPremium;
    }

    /**
     * @method setUsername
     * @param {string} username The username of the user
     */
    setUsername(username) {
        this.username = username;
    }

    /**
     * @method setPassword
     * @param {string} password The password of the user
     */
    setPassword(password) {
        this.password = password;
    }

    /**
     * @method setEmail
     * @param {string} email The email of the user
     */
    setEmail(email) {
        this.email = email;
    }

    /**
     * @method setTotalIncome
     * @param {number} totalIncome The total income of the user
     */
    setTotalIncome(totalIncome) {
        this.totalIncome = totalIncome;
    }

    /**
     * @method setTotalExpense
     * @param {number} totalExpense The total expense of the user
     */
    setTotalExpense(totalExpense) {
        this.totalExpense = totalExpense;
    }

    /**
     * @method setNotifications
     * @param {boolean} notifications The notifications of the user
     */
    setNotifications(notifications) {
        this.notifications = notifications;
    }

    /**
     * @method setLastLogin
     * @param {Date} lastLogin The last login of the user
     */
    setLastLogin(lastLogin) {
        this.lastLogin = lastLogin;
    }

    /**
     * @method setCreationDate
     * @param {Date} creationDate The creation date of the user
     */
    setCreationDate(creationDate) {
        this.creationDate = creationDate;
    }

    /**
     * @method setIsPremium
     * @param {boolean} isPremium The isPremium of the user
     */
    setIsPremium(isPremium) {
        this.isPremium = isPremium;
    }

    /**
     * @method save
     * @returns {Promise} The promise of the user
     */
    save() {
        return new Promise((resolve, reject) => {
            const user = new Users({
                username: this.username,
                password: this.password,
                email: this.email,
                totalIncome: this.totalIncome,
                totalExpense: this.totalExpense,
                notifications: this.notifications,
                lastLogin: this.lastLogin,
                creationDate: this.creationDate,
                isPremium: this.isPremium
            });

            user.save().then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * @method findUser
     * @param {string} username The username of the user
     * @param {string} password The password of the user
     * @returns {Promise} The promise of the user
     */
    static findUser(username, password) {
        return new Promise((resolve, reject) => {
            Users.findOne({
                username: username,
                password: password
            }).then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * @method findUserById
     * @param {string} id The id of the user
     * @returns {Promise} The promise of the user
     */
    static findUserById(id) {
        return new Promise((resolve, reject) => {
            Users.findById(id).then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * @method generateAuthTokenAndSaveUser
     * @returns {Promise} The promise of the user
     */
    static async generateAuthTokenAndSaveUser() {
        const authToken = jwt.sign({
            id: this.id.toString()
        }, 'foo');
        this.authTokens.push({authToken});
        await this.save();
        return authToken;
    }


}