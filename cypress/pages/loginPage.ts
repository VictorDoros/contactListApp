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

  loadLoginPage() {
    cy.step("Load the page")
    cy.visit("/")

    cy.step("Confirm that the page has been loaded")
    cy.get(this.header).should("have.text", "Contact List App")
  }

  checkLoginPage() {}

  logIn() {
    cy.step("Fill in the email field")
    cy.get(this.emailInputField).type(new User().getStaticEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInputField).type(new User().getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()

    cy.step("Confirm that user has logged in")
    cy.get(this.header).should("have.text", "Contact List")
  }

  logInUsingAPI() {
    return new loginAPI().apiLogIn()
  }
}
