class LoginPage {
    // Selectors
    get username() { return $('#user-name'); }
    get password() { return $('#password'); }
    get loginBtn() { return $('#login-button'); }

    // Actions 
    async open() {
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
    }

    async login() {
        await this.username.setValue('standard_user');
        await this.password.setValue('secret_sauce');
        await this.loginBtn.click();
    }
}
module.exports = new LoginPage();
