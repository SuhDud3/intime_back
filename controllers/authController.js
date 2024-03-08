import FactoryDbDAO from "../DAO/Factory/FactoryDbDAO.js";
const factoryDbDAO = new FactoryDbDAO();
await factoryDbDAO.init();

export const login = async (req, res, next) => {
    try {
        await factoryDbDAO.getAuthentificationDAO().login(req);
        return res.json({
            message: "Login successful",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const logout = async (req, res, next) => {
    try {
        await factoryDbDAO.getAuthentificationDAO().logout(req);
        return res.json({
            message: "Logout successful",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const refreshToken = async (req, res, next) => {
    try {
        const user = factoryDbDAO.getAuthentificationDAO().refreshToken(req.body);
        return res.json({
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const authenticateUser = async (req, res, next) => {
    try {
        const user = factoryDbDAO.getAuthentificationDAO().authenticateUser(req);
        next();
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
    
}

export const authenticateToken = async (req, res, next) => {
    try {
        const user = factoryDbDAO.getAuthentificationDAO().authenticateToken(req.body);
        return res.json({
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const generateAccessToken = async (req, res, next) => {
    try {
        const user = factoryDbDAO.getAuthentificationDAO().generateAccessToken(req.body);
        return res.json({
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const refreshAccessToken = async (req, res, next) => {
    try {
        const user = factoryDbDAO.getAuthentificationDAO().refreshAccessToken(req.body);
        return res.json({
            user: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}





