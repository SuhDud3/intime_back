import { expect, test } from 'vitest'
import FactoryDbDAO from "../DAO/Factory/FactoryDbDAO.js"
const factoryDbDAO = new FactoryDbDAO();
await factoryDbDAO.init();

const Alerts = factoryDbDAO.getAlertsDAO();

// Test case for alert creation
test('Create Alert', async () => {

    const alert = {
        type: 2,
        detail: 'testDescription',
        date: '2021-04-20',
        userID: 9999
    };

    const create = await Alerts.insertAlert(alert);
    create;
    var get = await Alerts.getAlert(alert);
    expect(get.userID).toBe(alert.userID);
    expect(get.alertTypeID).toBe(alert.type);
    expect(get.alertDetail).toBe(alert.detail);
    expect(get.alertDate).toBe(alert.date);
});

// Test case for alert deletion
test('Delete Alert', async () => {

    const alert = {
        type: 2,
        detail: 'testDescription',
        date: '2021-04-20',
        userID: 9999
    };

    const del = await Alerts.deleteAlert(alert);
    del;
    var get = await Alerts.getAlert(alert);
    expect(get).toBe(undefined);
});
