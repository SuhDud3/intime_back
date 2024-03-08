/**
 * @class Categories
 * @classdesc Categories class
 */

export class Categories {

    constructor(categoryName) {
        this.categoryName = categoryName;
    }

    /**
     * @method getCategoryName
     * @returns {string} The name of the category
     */
    getCategoryName() {
        return this.categoryName;
    }

    /**
     * @method setCategoryName
     * @param {string} categoryName The name of the category
     */
    setCategoryName(categoryName) {
        this.categoryName = categoryName;
    }

}