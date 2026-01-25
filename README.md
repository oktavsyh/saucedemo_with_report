# SauceDemo Web Automation – WDIO, Cucumber, and Allure (by Oktaviansyah)

## Overview

This repository contains a web automation test project built to fulfill personal project of Oktaviansyah. The automation targets https://www.saucedemo.com/ and focuses on validating critical user flows (on this case Online Shop on web saucedemo.com) using a maintainable, scalable, and industry-standard approach.

The project is intentionally designed to reflect real-world QA automation practices rather than a minimal proof of concept. It demonstrates clear test structure, behavior-driven design, reusable automation logic, and professional reporting.

---

## Tools, Technologies, and Versions

### Required Software

The project was built and validated using the following tools and versions. Using similar versions is recommended to avoid compatibility issues.

- IDE: Visual Studio Code
- Node.js: v18.x (LTS)
- npm: v9.x
- Google Chrome: v120 or later
- Java JDK: v8 or later

### Automation Stack

- WebdriverIO v8
- Cucumber (BDD)
- JavaScript (CommonJS)
- Allure Report

---

## Why These Tools Were Chosen

- WebdriverIO was selected for its strong WebDriver implementation, modern API, and native support for Cucumber.
- Cucumber enables behavior-driven development by allowing test scenarios to be written in a business-readable format.
- Allure Report provides structured, visual reporting with clear traceability between scenarios, steps, and results.
- JavaScript was chosen for its mature ecosystem, fast feedback loop, and wide industry adoption.

---

## Behavior Driven Development (BDD) Approach

This automation framework is implemented using the **Behavior Driven Development (BDD)** approach with Cucumber.

BDD focuses on describing system behavior from the user and business perspective rather than technical implementation details.  
Test scenarios are written using **Gherkin syntax** (Given, When, Then) so that they are readable by both technical and non-technical stakeholders.

### Why BDD Is Used in This Project

BDD was chosen intentionally for the following reasons:

1. **Clear Communication**
   Test scenarios read like real user behavior. This makes the intent of each test easy to understand without reading the automation code.

2. **Strong Traceability**
   Each scenario directly maps to a real business flow on the SauceDemo website, such as logging in, adding items to cart, or navigating through menus.

3. **Maintainability**
   By separating feature files (what the system should do) from step definitions (how it is automated), changes to business rules or UI flows can be handled with minimal impact.

4. **Scalability**
   The use of Scenario Outline and data tables allows the same behavior to be tested with multiple data sets without duplicating scenarios.

### Relationship Between BDD and Automation Implementation

In this project:
- **Feature files** define expected behavior in plain language
- **Step definitions** act as a bridge between business intent and technical execution
- **Page Object classes** encapsulate UI interactions and selectors

This separation ensures:
- Clean test design
- Reusable automation logic
- Reduced duplication across test cases

BDD is particularly suitable for this assignment because the test cases are clearly behavior-driven and user-focused, making the resulting automation easier to review, validate, and extend.

---

## Project Structure

features/
- advanced_cart.feature
- checkout.feature
- login_and_cart.feature
- navigation.feature
- scenario_outline_cart.feature

step-definitions/
- advanced-cart.steps.js
- cart.steps.js
- checkout.steps.js
- common.steps.js
- login.steps.js
- navigation.steps.js

pages/
- CartPage.js
- CheckoutPage.js
- InventoryPage.js
- LoginPage.js
- MenuPage.js

reports/
- allure-report/
- allure-results/

Other key files:
- wdio.conf.js
- package.json

---

## Feature Files Explanation

advanced_cart.feature  
Demonstrates looping, conditional logic, and dynamic element handling to add multiple products.

checkout.feature  
Demonstrates an extended end-to-end flow to show framework extensibility.

login_and_cart.feature  
Covers login flow and adding individual products to the cart.

navigation.feature  
Covers hamburger menu interaction and navigation to the About page.

scenario_outline_cart.feature  
Demonstrates data-driven testing using Scenario Outline and multiple input examples. This file shows framework scalability.


These features are included intentionally to demonstrate advanced automation capabilities and scalability.

---

## Reporting

Allure Report is used for test reporting. Each scenario produces a clear execution result with step-level screenshots captured automatically. This approach provides strong traceability and visual evidence of test execution.

---

## Installation Steps

1. Install Node.js v18 LTS
2. Verify installation:
   node -v
   npm -v

3. Install project dependencies:
   npm install

4. Ensure Java is installed:
   java -version

---

## How to Run Tests

### Run All Tests

This command runs all scenarios under the features directory.

npm run test

Use this option when running the full test suite or performing regression testing.

---

### Run Tests by Single Tag

You can execute scenarios with a specific tag.

$env:TAGS='@smokeTest'
npm run test

This is useful for smoke testing or targeted validation.

---

### Run Tests by Multiple Tags

Multiple tags can be combined using logical expressions.

$env:TAGS='@smokeTest and @regressionTest'
npm run test

Only scenarios containing both tags will be executed.

---

### Clearing Tag Filters

If tests were previously executed using tag filters and you want to run all scenarios again,
make sure to clear the TAGS environment variable.

Remove-Item Env:TAGS  
or  
$env:TAGS=""

---

## Allure Report

Allure Report is used to visualize test execution results.

### Generate and View Report

npm run allure:clean  
npm run test  
npm run allure:generate  
npm run allure:open  

The Allure dashboard provides:
- Overall execution summary
- Individual scenario results
- Step-level details
- Automatically attached screenshots for each step

This reporting approach provides clear traceability and visual evidence of test execution.

---

## Final Notes

- This automation framework is designed to be stable, readable, and extensible.
- The implementation reflects how automation would be built and maintained in a real production QA environment.
