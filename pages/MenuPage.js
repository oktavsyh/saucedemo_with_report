class MenuPage {
    // Selectors
    get menuBtn() { return $('#react-burger-menu-btn'); }
    get aboutLink() { return $('#about_sidebar_link'); }

    // Actions
    async goToAbout() {
        await this.menuBtn.click();
        await this.aboutLink.waitForDisplayed();
        await this.aboutLink.click();
    }
}
module.exports = new MenuPage();
