import User from "../models/user"
import loginSelectors from "../selectors/login.sel"
import loginAPI from "../api/logInAPI"
import logoutSelctors from "../selectors/logout.sel"

export default class LogInLogOutPage {
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

  private get logoutButton() {
    return logoutSelctors.logoutButton
  }

  private get firstColumnFirstRow() {
    return logoutSelctors.firstColumnOfFirstRow
  }

  loadLoginPage() {
    cy.step("Load the page")
    cy.visit("/")
  }

  checkLoginPage() {
    cy.step("Confirm that the page has been loaded")
    cy.get(this.header).invoke("text").should("eq", "Contact List App")
  }

  logIn(user: User) {
    cy.step("Fill in the email field")
    cy.get(this.emailInputField).type(user.getStaticEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInputField).type(user.getPassword())
  }

  logInInvalidCredentials(user: User) {
    cy.step("Fill in the email field with invalid value")
    cy.get(this.emailInputField).type(user.getEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInputField).type(user.getPassword())
  }

  submitLogIn() {
    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  checkUserLoggedIn() {
    cy.step("Confirm that user has logged in")
    cy.get(this.header).invoke('text').should("eq", "Contact List")
  }

  checkError(state: string, text: string) {
    return cy
      .step("Check the corresponding error message")
      .get(this.error)
      .should(state)
      .and("have.text", text)
  }

  getLogout(){
    cy.step("Logout from the APP")
    cy.get(this.logoutButton).click()
  }

  loadContactDetails() {
    cy.step("Load the details of the contact")
    cy.get(this.firstColumnFirstRow).click()
    cy.get(this.header).invoke("text").should("eq", "Contact Details")
  }

  logInUsingAPI() {
    return new loginAPI().apiLogIn()
  }
}
