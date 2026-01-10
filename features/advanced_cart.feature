@regressionTestAdvancedCart
Feature: Add Multiple Products to Cart

  @smokeTestAdvancedCart @advancedCart
  Scenario: Add Multiple Products to Cart with Advanced Function and Steps
    Given user is on login page
    When user login with valid credentials
    And user adds multiple products to cart:
      | Sauce Labs Backpack       |
      | Sauce Labs Bolt T-Shirt   |
      | Sauce Labs Fleece Jacket  |
    Then all selected products should exist in cart
