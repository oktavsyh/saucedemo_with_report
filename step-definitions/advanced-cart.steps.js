const { When, Then } = require('@wdio/cucumber-framework');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const { expect } = require('chai');

let selectedProducts = [];

When('user adds multiple products to cart:', async (dataTable) => {
    selectedProducts = dataTable.raw().flat();
    await InventoryPage.addProductsByName(selectedProducts);
    await InventoryPage.openCart();
});

Then('all selected products should exist in cart', async () => {
    for (const product of selectedProducts) {
        expect(await CartPage.product(product).isDisplayed()).to.be.true;
    }
});
