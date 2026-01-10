const { Given } = require('@wdio/cucumber-framework');
const LoginPage = require('../pages/LoginPage');

Given('user login', async () => {
    await browser.url('/');
    await LoginPage.login('standard_user', 'secret_sauce');
});