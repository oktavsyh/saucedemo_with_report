@regressionTestScenarioOutline 
Feature: Scenario Outline Cart

  @smokeTestScenarioOutline @addProductWithScenarioOutline
  Scenario Outline: Add Product to Cart using Scenario Outline - <product>
    Given user is on login page
    When user login with valid credentials
    And user adds "<product>" to cart
    Then cart should contain "<product>"

    Examples:
      | product                 |
      | Sauce Labs Backpack     |
      | Sauce Labs Bolt T-Shirt |
