@regressionTestNavigation
Feature: Navigation Menu

  @smokeTestNavigation @navigationToAboutPage @assignmentNo3
  Scenario: Navigate to About Page
    Given user is logged in
    When user navigates to About page
    Then user should be redirected to Sauce Labs website
