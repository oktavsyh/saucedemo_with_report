class CheckoutPage {
    // Selectors
    get addToCartButtons() { return $$('//button[contains(text(),"Add to cart")]'); }
    get cartIcon() { return $('#shopping_cart_container'); }
    get cartBadge() { return $('.shopping_cart_badge'); }
    get checkoutBtn() { return $('#checkout'); }

    get firstNameInput() { return $('#first-name'); }
    get lastNameInput() { return $('#last-name'); }
    get postalCodeInput() { return $('#postal-code'); }
    get continueBtn() { return $('#continue'); }

    get finishBtn() { return $('#finish'); }
    get successMessage() { return $('.complete-header'); }

    // Actions
    async addItemsToCart(count = 2) {
        const buttons = await this.addToCartButtons;
        for (let i = 0; i < Math.min(count, buttons.length); i++) {
        await buttons[i].click();
        await browser.pause(1000);
        }
    }

    async openCart() {
        await this.cartIcon.click();
        await browser.pause(1000);
    }

    async getCartBadgeText() {
        await this.cartBadge.waitForDisplayed();
        return await this.cartBadge.getText();
    }

    async checkout() {
        await browser.execute(
        el => el.scrollIntoView({ block: 'center' }),
        await this.checkoutBtn
        );
        await this.checkoutBtn.click();
    }

    async fillPersonalInfo(first, last, postal) {
        await this.firstNameInput.setValue(first);
        await this.lastNameInput.setValue(last);
        await this.postalCodeInput.setValue(postal);
        await this.continueBtn.click();
    }

    async finishCheckout() {
        await this.finishBtn.click();
    }

    async getSuccessMessage() {
        await this.successMessage.waitForDisplayed();
        return await this.successMessage.getText();
    }
}
module.exports = new CheckoutPage();
