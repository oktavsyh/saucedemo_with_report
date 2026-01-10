@regressionTestCheckout
Feature: Checkout with Multi Products

  @smokeTestCheckout @shopUntilCheckoutProducts
  Scenario: Add to Cart Multi Products and Checkout those Products
    Given user is on login page
    When user login with valid credentials
    And user adds two items to the cart
    And user opens the shopping cart
    Then the cart badge should display "2"
    When user proceeds to checkout
    And user fills out personal info
    And user completes the checkout
    Then the thank you message should appear