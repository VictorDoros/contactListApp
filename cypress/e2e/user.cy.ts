import { faker } from "@faker-js/faker"
import 'cypress-plugin-api'

describe("User", () => {
  it("Should be able to register from UI", () => {
    cy.visit("/")

    cy.get("#signup").click()
    cy.get("h1").should("have.text", "Add User")

    cy.get("#firstName").type(faker.person.firstName())
    cy.get("#lastName").type(faker.person.lastName())
    cy.get("#email").type(faker.internet.email())
    cy.get("#password").type("Test1234")

    cy.get("#submit").click()
    cy.get("h1").should("have.text", "Contact List")
  })

  it("Add user by API", () => {
    cy.api({
        method: "POST",
        url: "/users",
        body: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: "Test1234"
        }
    })
  })
})
