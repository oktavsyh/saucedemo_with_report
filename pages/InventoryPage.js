class InventoryPage {
    // Selectors
    get items() { return $$('.inventory_item'); }
    get cartIcon() { return $('.shopping_cart_link'); }

    // Actions
    async addProductByName(name) {
        const target = name.trim().toLowerCase();

        for (const item of await this.items) {
            const title = await item.$('.inventory_item_name').getText();
            if (title.trim().toLowerCase() === target) {
                await item.$('button').click();
                return;
            }
        }
        throw new Error('Product not found: ' + name);
    }

    async addProductsByName(products) {
        for (const product of products) {
            await this.addProductByName(product);
        }
    }

    async openCart() {
        await this.cartIcon.click();
    }
}
module.exports = new InventoryPage();
