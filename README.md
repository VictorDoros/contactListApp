# Contact List App

For testing purposes, the application created by Kristin Jackvony was used, which contains the creation, edition and deletion of the contacts from a list.
The API documentation can be found [here](https://documenter.getpostman.com/view/4012288/TzK2bEa8).

The purpose of the project is to show one of the ways on structuring a big project in Cypress.

The focus was on the creation of the E2E tests, which includes:

- functional tests
- api tests
- visual tests

# Prerequisites

- Node.js (v14.x or later)
- npm (v7.x or later)

# Installation

1. Clone the repo locally:
2. Navigate to the project directory and install the npm dependencies:

```
npm install
```

3. Run Cypress using one of the 2 options:

_Open mode:_

```
npx cypress open --env env='prod'
```

_Headless mode:_

```
npx cypress run
```

# Dependencies used within the project

1. @cypress/grep - [@cypress/grep documentation](https://www.npmjs.com/package/@cypress/grep)
2. @faker-js/faker - [@faker-js/faker documentation](https://www.npmjs.com/package/@faker-js/faker)
3. cypress-image-diff-js - [cypress-image-diff-js documentation](https://www.npmjs.com/package/cypress-image-diff-js)
4. cypress-map - [cypress-map documentation](https://github.com/bahmutov/cypress-map)
5. cypress-mochawesome-reporter - [cypress-mochawesome-reporter documentation](https://www.npmjs.com/package/cypress-mochawesome-reporter)
6. cypress-plugin-api - [cypress-plugin-api documentation](https://github.com/filiphric/cypress-plugin-api)
7. cypress-plugin-steps - [cypress-plugin-steps documentation](https://github.com/filiphric/cypress-plugin-steps)
