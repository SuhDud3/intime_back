import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { FactoryDAO } from "./FactoryDAO.js";
import { AlertsDbDAO } from "../AlertsDbDAO.js";
import { BudgetsDbDAO } from "../BudgetsDbDAO.js";
import { CategoriesDbDAO } from "../CategoriesDbDAO.js";
import { ExpensesDbDAO } from "../ExpensesDbDAO.js";
import { IncomesDbDAO } from "../IncomesDbDAO.js";
import { UsersDbDAO } from "../UsersDbDAO.js";
import { SavingSuggestionsDbDAO } from "../SavingSuggestionsDbDAO.js";
import { AuthentificationDbDAO } from "../AuthentificationDbDAO.js";

export default class FactoryDbDAO extends FactoryDAO {

    constructor() {
        super();
    }

    async init() {
        this.db = await open({
            filename: './sae.db',
            driver: sqlite3.Database
        });
    }

    getAlertsDAO() {
        return new AlertsDbDAO(this.db);
    }

    getBudgetsDAO() {
        return new BudgetsDbDAO(this.db);
    }

    getCategoriesDAO() {
        return new CategoriesDbDAO(this.db);
    }

    getExpensesDAO() {
        return new ExpensesDbDAO(this.db);
    }

    getIncomesDAO() {
        return new IncomesDbDAO(this.db);
    }

    getUsersDAO() {
        return new UsersDbDAO(this.db);
    }

    getSavingSuggestionsDAO() {
        return new SavingSuggestionsDbDAO(this.db);
    }

    getAuthentificationDAO() {
        return new AuthentificationDbDAO(this.db);
    }
}
