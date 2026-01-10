const { When, Then } = require('@wdio/cucumber-framework');
const CheckoutPage = require('../pages/CheckoutPage');
const { expect } = require('chai');

When('user adds two items to the cart', async () => {
    await CheckoutPage.addItemsToCart(2);
});

When('user opens the shopping cart', async () => {
    await CheckoutPage.openCart();
});

Then('the cart badge should display {string}', async (expected) => {
    const text = await CheckoutPage.getCartBadgeText();
    expect(text).to.equal(expected);
});

When('user proceeds to checkout', async () => {
    await CheckoutPage.checkout();
});

When('user fills out personal info', async () => {
    await CheckoutPage.fillPersonalInfo('Okta', 'Viansyah', '16610');
});

When('user completes the checkout', async () => {
    await CheckoutPage.finishCheckout();
});

Then('the thank you message should appear', async () => {
    const message = await CheckoutPage.getSuccessMessage();
    expect(message).to.contain('Thank you for your order!');
});