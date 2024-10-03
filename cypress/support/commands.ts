/// <reference types="cypress" />
import "cypress-map"

export {}
declare global {
  namespace Cypress {
    interface Chainable {
      unfocusField(): Chainable<void>
      waitUntilElementHasState(
        elementLocator: string,
        state: string
      ): Chainable<void>
      waitUntilElementHasValue(
        elementLocator: string,
        state: string
      ): Chainable<void>
      pickElement(elementLocator: string, elementText: string): Chainable<void>
      loadEndPoint(url: string, buttonElementLocator: string): Chainable<void>
      clickElement(elementLocator: string): Chainable<void>
      checkPage(
        headerElementLocator: string,
        headerText: string
      ): Chainable<void>
      typeText(
        elementLocator: string,
        textToBeInserted: string
      ): Chainable<void>
      clearFieldAndTypeText(
        elementLocator: string,
        textToBeInserted: string
      ): Chainable<void>
      checkTextVisibility(
        elementLocator: string,
        state: string,
        elementText: string
      ): Chainable<void>
      takeScreenshot(
        elementLocator: string,
        elementState: string,
        fileName: string
      ): Chainable<void>
      getRow(elementLocator: string, fn: any): Chainable<Element>
      getEmtpyTable(
        tableElementLocator: string,
        fnReturnEmptyTable,
        fnCompareEmptyTable
      ): Chainable<Element>
    }
  }
}

/**
 * Unfocus the field
 */
Cypress.Commands.add("unfocusField", () => {
  cy.get("body").click(0, 0)
})

/**
 * Wait until element has the corresponding state
 */

Cypress.Commands.add("waitUntilElementHasState", (elementLocator, state) => {
  cy.get(elementLocator, { timeout: 10000 }).should(state)
})

/**
 * Wait until element has a corresponding value
 */

Cypress.Commands.add("waitUntilElementHasValue", (elementLocator, value) => {
  cy.get(elementLocator, { timeout: 10000 }).should("have.value", value)
})

/**
 * Pick an element from multiple elements
 */

Cypress.Commands.add("pickElement", (elementLocator, elementText) => {
  cy.get(elementLocator).each(($el) => {
    if ($el.text() == elementText) {
      cy.wrap($el).click()
      return
    }
  })
})

Cypress.Commands.add("clickElement", (elementLocator) => {
  cy.get(elementLocator).click()
})

Cypress.Commands.add("loadEndPoint", (url, buttonElementLocator) => {
  cy.visit(url)
  cy.clickElement(buttonElementLocator)
})

Cypress.Commands.add("checkPage", (headerElementLocator, headerText) => {
  cy.get(headerElementLocator).invoke("text").should("eq", headerText)
})

Cypress.Commands.add("typeText", (elementLocator, textToBeInserted) => {
  cy.get(elementLocator).type(textToBeInserted)
})

Cypress.Commands.add(
  "clearFieldAndTypeText",
  (elementLocator, textToBeInserted) => {
    cy.get(elementLocator).clear().type(textToBeInserted)
  }
)

Cypress.Commands.add(
  "checkTextVisibility",
  (elementLocator, state, elementText) => {
    cy.get(elementLocator).should(state).and("have.text", elementText)
  }
)

Cypress.Commands.add(
  "takeScreenshot",
  (elementLocator, elementState, fileName) => {
    cy.waitUntilElementHasState(elementLocator, elementState)
    cy.unfocusField()
    cy.compareSnapshot(fileName)
  }
)

Cypress.Commands.add("getRow", (elementLocator, fn) => {
  cy.get(elementLocator).map("innerText").then(fn)
})

Cypress.Commands.add(
  "getEmtpyTable",
  (tableElementLocator, fnReturnEmptyTable, fnCompareEmptyTable) => {
    cy.get(tableElementLocator)
      .then(fnReturnEmptyTable)
      .then(fnCompareEmptyTable)
  }
)

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
