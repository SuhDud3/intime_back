import { expect, test } from 'vitest'
import FactoryDbDAO from "../DAO/Factory/FactoryDbDAO.js"   
const factoryDbDAO = new FactoryDbDAO();
await factoryDbDAO.init();

const Users = factoryDbDAO.getUsersDAO();

// Test case for user creation
test('Create User', async () => {

    const user = {
        username: 'testuser',
        password: 'testpassword',
        email: 'test@mail.com'
    };

    const create = await Users.insertUser(user);
    var get = await Users.getUserByMail(user.email);
    create;
    expect(get.email).toBe("test@mail.com")

});

// Test case for user delete
test('Delete User', async () => {
    const user = {
        email : 'test@mail.com'
    }

    const deleteUser = await Users.deleteUser(user);
    deleteUser;
    const get = await Users.getUserByMail(user.email)
    expect(get).toBe(undefined);
})

// Test case for user update
test('Update User', async () => {
    
    const user = {
        username: 'testUpdate' + Math.floor(Math.random() * 5),
        password: 'testpassword',
        email: 'testUpdate@mail.com'
    };

    const updateUser = await Users.updateUserUsername(user);
    updateUser;
    var get = await Users.getUserByMail(user.email);
    expect(get.username).toBe(user.username);

});


