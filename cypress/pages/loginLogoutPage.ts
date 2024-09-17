import User from "../models/user"
import Environment from "../models/environment"
import loginSelectors from "../selectors/login.sel"
import logoutSelctors from "../selectors/logout.sel"
import basicData from "../support/basicData"
import { waitUntilElementHasState, unfocusField } from "../support/commands"

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
    cy.step("Load the page")
    cy.visit(env.getEnvironment())
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

  logInVisual(user: User) {
    cy.step("Fill in the email field")
    cy.get(this.emailInputField).type(user.getStaticSecondEmail())

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
    cy.get(this.header).invoke("text").should("eq", "Contact List")
  }

  checkError(state: string, text: string) {
    return cy
      .step("Check the corresponding error message")
      .get(this.error)
      .should(state)
      .and("have.text", text)
  }

  getLogout() {
    cy.step("Logout from the APP")
    cy.get(this.logoutButton).click()
  }

  loadContactDetails() {
    cy.step("Load the details of the contact")
    cy.get(this.firstColumnFirstRow).click()
    cy.get(this.header).invoke("text").should("eq", "Contact Details")
  }

  takeScreenshotBeforeLogin() {
    cy.step("Take the screenshot before logging")
    cy.compareSnapshot("Before filling in the credentials")
  }

  takeScreenshotAfterFillDataLogin() {
    cy.step("Unfocus the last inserted field")
    unfocusField()

    cy.step("Take the screenshot before logging")
    cy.compareSnapshot("After filling in the credentials")
  }

  takeScreenshotLogin() {
    cy.step("Wait untill the page is loaded")
    waitUntilElementHasState(this.tableHead, basicData.stateData.beVisible)

    cy.step("Take the screenshot after filling in the fields")
    cy.compareSnapshot("User logged in")
  }

  takeScreenshotErrorNoCredentials() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(this.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step("Take the screenshot after submitting with no credentials")
    cy.compareSnapshot("Error no credentials")
  }

  takeScreenshotErrorInvalidCredentials() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(this.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step("Take the screenshot after submitting with invalid credentials")
    cy.compareSnapshot("Error invalid credentials")
  }
}
