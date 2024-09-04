import User from "../models/user"
import Environment from "../models/environment"
import selectors from "../selectors/register.sel"

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

  registerUser_lastName(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

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

  registerUser_email(user: User) {
    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

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

  registerUser_lastNameEmail(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

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

  registerUser_lastNamePassword(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

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

  registerUser_emailPassword(user: User) {
    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

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

  getError(state: string, text: string) {
    return cy
      .step("Check the corresponding error message")
      .get(this.error)
      .should(state)
      .and("have.text", text)
  }
}
