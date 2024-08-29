import User from "../models/user"
import loginSelectors from "../selectors/login.sel"
import loginAPI from "../api/logInAPI"

export default class LogInPage {
  private get emailInputField() {
    return loginSelectors.emailField
  }

  private get passwordInputField() {
    return loginSelectors.passwordField
  }

  private get submitButton() {
    return loginSelectors.submitButton
  }

  private get header() {
    return loginSelectors.header
  }

  private get error() {
    return loginSelectors.error
  }

  loadLoginPage() {
    cy.step("Load the page")
    cy.visit("/")
  }

  checkLoginPage() {
    cy.step("Confirm that the page has been loaded")
    cy.get(this.header).should("have.text", "Contact List App")
  }

  logIn() {
    cy.step("Fill in the email field")
    cy.get(this.emailInputField).type(new User().getStaticEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInputField).type(new User().getPassword())
  }

  logInInvalidCredentials() {
    cy.step("Fill in the email field with invalid value")
    cy.get(this.emailInputField).type(new User().getEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInputField).type(new User().getPassword())
  }

  submitLogIn() {
    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  checkUserLoggedIn() {
    cy.step("Confirm that user has logged in")
    cy.get(this.header).should("have.text", "Contact List")
  }

  checkError(state: string, text: string) {
    return cy
      .step("Check the corresponding error message")
      .get(this.error)
      .should(state)
      .and("have.text", text)
  }

  logInUsingAPI() {
    return new loginAPI().apiLogIn()
  }
}
