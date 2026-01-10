const { When, Then } = require('@wdio/cucumber-framework');
const MenuPage = require('../pages/MenuPage');
const { expect } = require('chai');

When('user navigates to About page', async () => {
    await MenuPage.goToAbout();
});

Then('user should be redirected to Sauce Labs website', async () => {
    expect(await browser.getUrl()).to.include('saucelabs.com');
});
