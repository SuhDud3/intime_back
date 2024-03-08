import { test, expect } from "vitest";
import FactoryDbDAO from "../DAO/Factory/FactoryDbDAO.js";
const factoryDbDAO = new FactoryDbDAO();
await factoryDbDAO.init();

const Categories = factoryDbDAO.getCategoriesDAO();

// Test case for category creation
test('Create Category', async () => {

    const category = {
        name: 'testcategory',
    };

    const create = await Categories.insertCategory(category);
    create;
    var get = await Categories.getCategoryByName(category.name);
    expect(get.categoryName).toBe("testcategory")

});

// Test case for category delete
test('Delete Category', async () => {
    const category = {
        name: 'testcategory'
    }

    const deleteCategory = await Categories.deleteCategory(category);
    deleteCategory;
    const get = await Categories.getCategoryByName(category.name)
    expect(get).toBe(undefined);
})

// Test case for category update
test('Update Category', async () => {
    
    const category = {
        name: 'testcategoryupdate',
        newName: 'testUpdate' + Math.floor(Math.random() * 5),
    };

    const updateCategory = await Categories.updateCategory(category);
    updateCategory;
    var get = await Categories.getCategoryByName(category.newName);
    expect(get.categoryName).toBe(category.newName);

    const reUpdateCategory = await Categories.updateCategory({name: category.newName, newName: category.name});
    reUpdateCategory; 

});