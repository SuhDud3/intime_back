import { UsersDAO } from "./UsersDAO.js";

export class UsersDbDAO extends UsersDAO {

    constructor(db) {
        super();
        this.db = db;
    }

    async insertUser(user) {
        try {
            const result = await this.db.run(
                'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)',
                [user.username, user.email, user.password]
            );
            return result;
        } catch (error) {
            return error;
        }
    }

    async deleteUser(user) {
        const result = this.db.run(
            'DELETE FROM Users WHERE email = ?',
            [user.email]
        );
        return result;
    }

    async updateUser(user) {
        try {
            const result = this.db.run(
                'UPDATE Users SET username = COALESCE(NULLIF(?, \'\'), username), email = COALESCE(NULLIF(?, \'\'), email), firstname = COALESCE(NULLIF(?, \'\'), firstname), lastname = COALESCE(NULLIF(?, \'\'), lastname), paidByHour = COALESCE(NULLIF(?, \'\'), paidByHour) WHERE userID = ?',
                [user.username, user.email, user.firstname, user.lastname, user.paidByHour, user.id]
            );
            return result;
        } catch (error) {
            return error;
        }
    }

    async updateUserFirstName(user) {
        const result = this.db.run(
            'UPDATE Users SET firstname = ? WHERE email = ?',
            [user.firstname, user.email]
        );
        return result;
    }

    async updateUserLastName(user) {
        const result = this.db.run(
            'UPDATE Users SET lastname = ? WHERE email = ?',
            [user.lastname, user.email]
        );
        return result;
    }

    async updateUserUsername(user) {
        const result = this.db.run(
            'UPDATE Users SET username = ? WHERE email = ?',
            [user.username, user.email]
        );
        return result;
    }

    async updateUserPassword(user) {
        const result = this.db.run(
            'UPDATE Users SET password = ? WHERE email = ?',
            [user.password, user.email]
        );
        return result;
    }

    async updateUserEmail(user) {
        const result = this.db.run(
            'UPDATE Users SET email = ? WHERE email = ?',
            [user.newEmail, user.email]
        );
        return result;
    }

    async updateUserPaidByHour(user) {
        const result = this.db.run(
            'UPDATE Users SET paidByHour = ? WHERE email = ?',
            [user.paidByHour, user.email]
        );
        return result;
    }

    async getUser(username) {
        const result = this.db.get(
            'SELECT * FROM Users WHERE username = ?',
            [username]
        );
        return result;
    }

    async getUserByMail(email) {
        try {
            const result = await this.db.get(
                'SELECT * FROM Users WHERE email = ?',
                [email]
            );
            return result;
        } catch (error) {
            return error;
        }
    }

    async getUserById(userID) {
        const result = this.db.get(
            'SELECT * FROM Users WHERE userID = ?',
            [userID]
        );
        return result;
    }

    async findAll() {
        const result = await this.db.all(
            'SELECT * FROM Users'
        );
        return result;
    }

    async deleteAll() {
        const result = await this.db.run(
            'DELETE FROM Users'
        );
        return result;
    }

}