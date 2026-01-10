const { When, Then } = require('@wdio/cucumber-framework');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const { expect } = require('chai');

When('user adds {string} to cart', async (product) => {
    await InventoryPage.addProductByName(product);
    await InventoryPage.openCart();
});

Then('cart should contain {string}', async (product) => {
    expect(await CartPage.product(product).isDisplayed()).to.be.true;
});
