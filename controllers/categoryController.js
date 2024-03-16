import FactoryDbDAO from "../DAO/Factory/FactoryDbDAO.js";
const factoryDbDAO = new FactoryDbDAO();
await factoryDbDAO.init();

const categoriesDAO = factoryDbDAO.getCategoriesDAO();

export const allCategories = async (req, res, next) => {
    try {
        const categories = await categoriesDAO.getCategories(req);
        return categories;
    } catch (error) {
        return error.message;
    }
}