const { Given, When } = require('@wdio/cucumber-framework');
const LoginPage = require('../pages/LoginPage');

Given('user is on login page', async () => {
    await LoginPage.open();
});

When('user login with valid credentials', async () => {
    await LoginPage.login();
});

Given('user is logged in', async () => {
    await LoginPage.open();
    await LoginPage.login();
});
