import User from "../models/user"
import Environment from "../models/environment"
import selectors from "../selectors/register.sel"
import { unfocusField, waitUntilElementHasState } from "../support/commands"
import basicData from "../support/basicData"

export default class RegisterUser {
  private get cancelButton() {
    return selectors.cancelButton
  }

  private get firstNameInput() {
    return selectors.firstNameField
  }

  private get lastNameInput() {
    return selectors.lastNameField
  }

  private get emailInput() {
    return selectors.emailField
  }

  private get passwordInput() {
    return selectors.passwordField
  }

  private get signUpButton() {
    return selectors.signUpButton
  }

  private get submitButton() {
    return selectors.submitButton
  }

  private get header() {
    return selectors.header
  }

  private get error() {
    return selectors.error
  }

  loadRegisterPage(env: Environment) {
    cy.step("Reach the page")
    cy.visit(env.getEnvironment())

    cy.step("Click on [Sign in] button")
    cy.get(this.signUpButton).click()
  }

  checkRegisterPage() {
    cy.step("Confirm that user has been redirected to the registration page")
    cy.get(this.header).invoke("text").should("eq", "Add User")
  }

  registerUser(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()

    cy.step(
      "Confirm that the user has successfully registered and the user's page is displayed"
    )
    cy.get(this.header).invoke("text").should("eq", "Contact List")
  }

  cancelRegister() {
    cy.step("Cancel the registration")
    cy.get(this.cancelButton).click()
  }

  registerUser_noData() {
    cy.step("Click on [Submit] button with no data filled in")
    cy.get(this.submitButton).click()
  }

  registerUser_firstName(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstName_visual(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getStaticFirstName())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_lastName(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_lastName_Visual(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getStaticLastName())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstLastName(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstLastName_visual(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getStaticFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getStaticLastName())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_email(user: User) {
    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_email_visual(user: User) {
    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getStaticEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstNameEmail(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstNameEmail_visual(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getStaticFirstName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getStaticEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_lastNameEmail(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_lastNameEmail_visual(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getStaticLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getStaticEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstLastNameEmail(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstLastNameEmail_visual(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getStaticFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getStaticLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getStaticEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_password(user: User) {
    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstNamePassword(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstNamePassword_visual(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getStaticFirstName())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_lastNamePassword(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_lastNamePassword_visual(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getStaticLastName())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getStaticEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstLastNamePassword(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstLastNamePassword_visual(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getStaticFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getStaticLastName())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_emailPassword(user: User) {
    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_emailPassword_visual(user: User) {
    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getStaticEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstNameEmailPassword(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_firstNameEmailPassword_visual(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getStaticFirstName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getStaticEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_lastNameEmailPassword(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_lastNameEmailPassword_visual(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getStaticLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getStaticEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_invalidPassword(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getInvalidPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_invalidPassword_visual(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getStaticFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getStaticLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getStaticEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getInvalidPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_invalidEmail(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getInvalidEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_invalidEmail_visual(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getStaticFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getStaticLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getInvalidEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_existingEmail(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getStaticEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_existingEmail_visual(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getStaticEmail())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getStaticLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getStaticEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  getError(state: string, text: string) {
    return cy
      .step("Check the corresponding error message")
      .get(this.error)
      .should(state)
      .and("have.text", text)
  }

  takeScreenshot_noData() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with no data"
    )
    cy.compareSnapshot("Register with no data")
  }

  takeScreenshot_firstName() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with first name only"
    )
    cy.compareSnapshot("Register with first name only")
  }

  takeScreenshot_lastName() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with last name only"
    )
    cy.compareSnapshot("Register with last name only")
  }

  takeScreenshot_firstLastName() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with first and last name only"
    )
    cy.compareSnapshot("Register with first and last name only")
  }

  takeScreenshot_email() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with email only"
    )
    cy.compareSnapshot("Register with email only")
  }

  takeScreenshot_firstNameEmail_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with first name and email only"
    )
    cy.compareSnapshot("Register with first name and email only")
  }

  takeScreenshot_lastNameEmail_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with last name and email only"
    )
    cy.compareSnapshot("Register with last name and email only")
  }

  takeScreenshot_firstLastNameEmail_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with first name, last name and email only"
    )
    cy.compareSnapshot("Register with first name, last name and email only")
  }

  takeScreenshot_password_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with password only"
    )
    cy.compareSnapshot("Register with password only")
  }

  takeScreenshot_firstNamePassword_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with first name and password only"
    )
    cy.compareSnapshot("Register with first name and password only")
  }

  takeScreenshot_lastNamePassword_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with last name and password only"
    )
    cy.compareSnapshot("Register with last name and password only")
  }

  takeScreenshot_firstLastNamePassword_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with first name, last name and password only"
    )
    cy.compareSnapshot("Register with first name, last name and password only")
  }

  takeScreenshot_emailPassword_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with email and password only"
    )
    cy.compareSnapshot("Register with email and password only")
  }

  takeScreenshot_firstNameEmailPassword_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with first name, email and password only"
    )
    cy.compareSnapshot("Register with first name, email and password only")
  }

  takeScreenshot_lastNameEmailPassword_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with last name, email and password only"
    )
    cy.compareSnapshot("Register with last name, email and password only")
  }

  takeScreenshot_invalidPassword_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with invalid password"
    )
    cy.compareSnapshot("Register with invalid password")
  }

  takeScreenshot_invalidEmail_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with invalid email"
    )
    cy.compareSnapshot("Register with invalid email")
  }

  takeScreenshot_existingEmail_visual() {
    cy.step("Wait untill the error is displayed")
    waitUntilElementHasState(selectors.error, basicData.stateData.beVisible)

    cy.step("Unfocus the [Submit] button")
    unfocusField()

    cy.step(
      "Take the screenshot with the error after submitting the registration form with existing email"
    )
    cy.compareSnapshot("Register with existing email")
  }
}
