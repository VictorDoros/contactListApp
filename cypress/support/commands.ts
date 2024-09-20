/// <reference types="cypress" />

/**
 * Unfocus the field
 */
export const unfocusField = () => {
  cy.get("body").click(0, 0)
}

/**
 * Wait until element has the corresponding state
 */
export const waitUntilElementHasState = (
  elementLocator: string,
  state: string
) => {
  cy.get(elementLocator, { timeout: 10000 }).should(state)
}

/**
 * Wait until element has the corresponding state
 */
export const pickElement = (elementLocator: string, elementText: string) => {
  cy.get(elementLocator).each(($el) => {
    if ($el.text() == elementText) {
      cy.wrap($el).click()
      return
    }
  })
}
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
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
