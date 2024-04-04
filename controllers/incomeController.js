import FactoryDbDAO from "../DAO/Factory/FactoryDbDAO.js";
const factoryDbDAO = new FactoryDbDAO();
await factoryDbDAO.init();

export const newIncome = async (req, next) => {
    try {
        const income = await factoryDbDAO.getIncomesDAO().insertIncome(req);
        return income;
    } catch (error) {
        return error.message;
    }
}

export const getAllIncomes = async (req, res, next) => {
    try {
        const incomes = await factoryDbDAO.getIncomesDAO().findAll();
        return res.status(200).json({
            incomes: incomes
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const getIncomeById = async (req, next) => {
    try {
        const income = await factoryDbDAO.getIncomesDAO().getIncomeById(req);
        return income;
    } catch (error) {
        return error;
    }
}

export const deleteIncome = async (req, res, next) => {
    try {
        const income = await factoryDbDAO.getIncomesDAO().deleteIncome(req.body);
        return res.json({
            income: income
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const updateIncome = async (req, res, next) => {
    try {
        const income = await factoryDbDAO.getIncomesDAO().updateIncome(req.body);
        return res.json({
            income: income
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const getIncomeByUserID = async (req, res, next) => {
    try {
        const income = await factoryDbDAO.getIncomesDAO().getIncomeByUserID(req.params.id);
        return res.status(200).json({
            income: income
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

