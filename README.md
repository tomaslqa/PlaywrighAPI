#  Automation Framework - Petson Webshop






## Tech

This framework was built with the following:

- Javascript
- node.js
- Playwright
- CI - github
- IDE - Visual Studio Code


 ## Framework Design
 
The pages package contains page classes:

- LoginPage - login page object
- HomePage - home page objects
- PetCleanupPage - products in the cleanup category


## Test Design

- Each test in the tests package is independent and complete.
- For each Test new playwright server is launched which is isolated from other playwright instance.
- The tests are designed with the use of playwright assertions.
- Test data files used in tests are created/populated before any test run.
- Authorization Token is saved in the .env file before test run. (Note: Enviroment file is pushed to git)


  ## Installation

Run these commands.



```sh
git clone https://github.com/tomaslqa/PlaywrighAPI.git
```


```sh
npm install
```


```sh
npx playwright install
```


## Test Execution


•   Run all tests with one of these commands:

 
**npx playwright test** : Runs the end-to-end tests in headless mode

**npx playwright test --headed** : Runs the end-to-end tests in browser

____________________________________




•   Run one of the test files separately with one of these command:



**npx playwright test login_failed_tests.spec** : Runs the tests in a specific file

**npx playwright test login_successful_tests.spec** : Runs the tests in a specific file

**npx playwright test product_category_tests.specc** : Runs the tests in a specific file

**npx playwright test sort_by_price_test.spec** : Runs the tests in a specific file

____________________________________



•   Open generated report:


**npx playwright show report** : Open playwright report



  

