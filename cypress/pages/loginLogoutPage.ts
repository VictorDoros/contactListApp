import User from "../models/user"
import Environment from "../models/environment"
import loginSelectors from "../selectors/login.sel"
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

  private get tableHead() {
    return loginSelectors.tableHead
  }

  loadLoginPage(env: Environment) {
    cy.visit(env.getEnvironment())
  }

  checkLoginPage() {
    cy.checkPage(this.header, "Contact List App")
  }

  logIn(user: User) {
    cy.typeText(this.emailInputField, user.getStaticEmail())
    cy.typeText(this.passwordInputField, user.getPassword())
  }

  logInVisual(user: User) {
    cy.typeText(this.emailInputField, user.getStaticSecondEmail())
    cy.typeText(this.passwordInputField, user.getPassword())
  }

  logInInvalidCredentials(user: User) {
    cy.typeText(this.emailInputField, user.getInvalidEmail())
    cy.typeText(this.passwordInputField, user.getPassword())
  }

  submitLogIn() {
    cy.clickElement(this.submitButton)
  }

  checkUserLoggedIn() {
    cy.checkPage(this.header, "Contact List")
  }

  checkError(stateError: string, textError: string) {
    cy.checkError(this.error, stateError, textError)
  }

  getLogout() {
    cy.clickElement(this.logoutButton)
  }

  loadContactDetails() {
    cy.step("Load the details of the contact")
    cy.get(this.firstColumnFirstRow).click()
    cy.get(this.header).invoke("text").should("eq", "Contact Details")
  }
}
