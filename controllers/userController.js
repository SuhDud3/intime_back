import FactoryDbDAO from "../DAO/Factory/FactoryDbDAO.js";
const factoryDbDAO = new FactoryDbDAO();
await factoryDbDAO.init();

export const newUser = async (req, next) => {
    try {
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

export const updateUser = async (req, res, next) => {
    try {
        const user = await factoryDbDAO.getUsersDAO().updateUser(req.body);
        return res.status(200).json({
            status: 200,
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const updateUserFirstName = async (req, res, next) => {
    try {
        const user = await factoryDbDAO.getUsersDAO().updateUserFirstName(req.body);
        return res.json({
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const updateUserLastName = async (req, res, next) => {
    try {
        const user = await factoryDbDAO.getUsersDAO().updateUserLastName(req.body);
        return res.json({
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
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

export const updateUserEmail = async (req, res, next) => {
    try {
        const user = await factoryDbDAO.getUsersDAO().updateUserEmail(req.body);
        return res.json({
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const updateUserPassword = async (req, res, next) => {
    try {
        const user = await factoryDbDAO.getUsersDAO().updateUserPassword(req.body);
        return res.json({
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const updateUserTotalExpense = async (req, res, next) => {
    try {
        const user = await factoryDbDAO.getUsersDAO().updateUserTotalExpense(req.body);
        return res.json({
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}



