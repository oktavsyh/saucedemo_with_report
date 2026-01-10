@regressionTestLogin @regressionTestShopSingleProduct
Feature: Login and Add Single Product to Cart

  @smokeTestLoginAndShop @loginAndShopSingleProduct @assignmentNo1
  Scenario: Add Sauce Labs Backpack to Cart
    Given user is on login page
    When user login with valid credentials
    And user adds "Sauce Labs Backpack" to cart
    Then cart should contain "Sauce Labs Backpack"

  @loginAndShopSingleProduct @assignmentNo2
  Scenario: Add Sauce Labs Fleece Jacket to Cart
    Given user is on login page
    When user login with valid credentials
    And user adds "Sauce Labs Fleece Jacket" to cart
    Then cart should contain "Sauce Labs Fleece Jacket"

