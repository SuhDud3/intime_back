import { AuthentificationDAO } from '../DAO/AuthentificationDAO.js';
import jwt from 'jsonwebtoken';

export class AuthentificationDbDAO extends AuthentificationDAO {

    constructor(db) {
        super();
        this.db = db;
    }

    insertToken(token) {
        const result = this.db.run(
            'INSERT INTO Users (token) VALUES (?) WHERE email = ?',
            [token.value, token.user.email]
        );
        return result;
    }

    deleteToken(user) {
        const result = this.db.run(
            'DELETE authTokens FROM Users WHERE email = ?',
            [user.email]
        );
        return result;
    }

    updateToken(token) {
        const result = this.db.run(
            'UPDATE Users SET token = ? WHERE email = ?',
            [token.value, token.user.email]
        );
        return result;
    }

    getToken(user) {
        const result = this.db.get(
            'SELECT * FROM Users WHERE email = ?',
            [user.email]
        );
        return result;
    }

    findAll() {
        const result = this.db.all(
            'SELECT * FROM Users'
        );
        return result;
    }

    // Authentification of the user and with the token
    authenticateUser(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

        if (token == null) return res.sendStatus(401);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => { // Verify the token
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
        
    }


      async generateAccessToken(user, callback) {
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    
        // Prepare SQL statement to insert token
        const sql = `UPDATE Users SET authTokens = ? WHERE email = ?`;
    
        // Run the query
        const result = await this.db.run(sql, [accessToken, user.email]);
        if (result) {
            callback(null, accessToken);
        }
    }
    
    refreshAccessToken(user) {
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
        const sql = `UPDATE Users SET authTokens = ? WHERE id = ?`;
        this.db.run(sql, [refreshToken, user.id], function(err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`Token inserted into Users table for user with id ${user.id}`);
                closeDbConnection();
            }
        });
    }
    
    authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
    
        if (token == null) return res.sendStatus(401);
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => { // Verify the token
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    }
    
    async login(req, res, next) {
        const user = req.body;
        const sql = `SELECT * FROM Users WHERE email = ? AND password = ?`;
        const result = await this.db.get(sql, [user.email, user.password]);
        if (result) {
            this.generateAccessToken(user, function(err, accessToken) {
                    console.log(`Token generated for user with email ${user.email}`);
                    return accessToken
            });
        } else {
            console.log(`User with email ${user.email} and password ${user.password} not found`);
            return 'Invalid credentials'
        }
    }
    
    async logout(req, res, next) {
        const user = req.body;
        const sql = `UPDATE Users SET authTokens = ? WHERE email = ?`;
        const result = await this.db.run(sql, [null, user.email]);
        if (result) {
            console.log(`Token deleted for user with email ${user.email}`);
        } else {
            console.log(`User with email ${user.email} not found`);
        }
    }

}