import UserAPI from "../api/registerAPI"
import User from "../models/user"
import selectors from "../selectors/register.sel"

export default class RegisterUser {
  private get firstNameInput() {
    return selectors.firstNameField
  }

  private get lastName() {
    return selectors.lastNameField
  }

  private get email() {
    return selectors.emailField
  }

  private get password() {
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
    cy.get(this.lastName).type(user.getLastName())

    cy.step("Fill in the email field")
    cy.get(this.email).type(user.getEmail())

    cy.step("Fill in the password field")
    cy.get(this.password).type(user.getPassword())

    cy.step("Click on [Submit] button")
    cy.get(this.submitButton).click()

    cy.step("Confirm that the user has successfully registered and the user's page is displayed")
    cy.get(this.header).should("have.text", "Contact List")
  }

  registerUsingAPI(user: User){
    return new UserAPI().register(user).then((response) => {
      user.setToken(response.body.token)
    })
  }
}
