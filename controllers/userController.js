import FactoryDbDAO from "../DAO/Factory/FactoryDbDAO.js";
const factoryDbDAO = new FactoryDbDAO();
await factoryDbDAO.init();

export const newUser = async (req, next) => {
    try {
        console.log("newUser " + req);
        const user = await factoryDbDAO.getUsersDAO().insertUser(req);
        return user;
    } catch (error) {
        return error.message;
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await factoryDbDAO.getUsersDAO().findAll();
        return res.json({
            users: users
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await factoryDbDAO.getUsersDAO().deleteUser(req.body);
        return res.json({
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const getUser = async (req, next) => {
    try {
        const user = await factoryDbDAO.getUsersDAO().getUserByMail(req);
        return user;
    } catch (error) {
        return error;
    }
}

export const getUserById = async (req, next) => {
    try {
        const user = await factoryDbDAO.getUsersDAO().getUserById(req);
        return user;
    } catch (error) {
        return error;
    }
}

export const getUserByEmail = async (req, next) => {
    try {
        const user = await factoryDbDAO.getUsersDAO().getUserByMail(req);
        return user;
    } catch (error) {
        return error;
    }
}

export const updateUserUsername = async (req, res, next) => {
    try {
        const user = await factoryDbDAO.getUsersDAO().updateUserUsername(req.body);
        return res.json({
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}



