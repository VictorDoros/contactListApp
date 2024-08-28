import UserAPI from "../api/registerAPI"
import User from "../models/user"
import selectors from "../selectors/register.sel"
import loginData from "../fixtures/loginData.cy"

export default class RegisterUser {
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

  loadRegisterPage() {
    cy.step("Load the page")
    cy.visit("/")

    cy.step("Click on [Sign in] button")
    cy.get(this.signUpButton).click()

    cy.step("Confirm that user has been redirected to the registration page")
    cy.get(this.header).should("have.text", "Add User")
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
    cy.get(this.header).should("have.text", "Contact List")
  }

  registerUser_noData() {
    cy.step("Click on [Submit] button with no data filled in")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyFirstName(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyLastName(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyFirstLastName(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyEmail(user: User) {
    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyFirstNameEmail(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyLastNameEmail(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyFirstLastNameEmail(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyPassword(user: User) {
    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyFirstNamePassword(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyLastNamePassword(user: User) {
    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyFirstLastNamePassword(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the last name field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyEmailPassword(user: User) {
    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyFirstNameEmailPassword(user: User) {
    cy.step("Fill in the first name field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the email field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Fill in the password field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUser_onlyLastNameEmailPassword(user: User) {
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
    cy.get(this.emailInput).type(loginData.email)

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

  registerUsingAPI(user: User) {
    return new UserAPI().register(user).then((response) => {
      user.setToken(response.body.token)
    })
  }
}
