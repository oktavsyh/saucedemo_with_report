class CartPage {
    // Selectors
    product(name) {
        return $(`//div[@class='inventory_item_name' and normalize-space(text())="${name}"]`);
    }
}
module.exports = new CartPage();
