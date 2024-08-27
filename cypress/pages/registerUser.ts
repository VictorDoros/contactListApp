import UserAPI from "../api/userAPI"
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
    cy.visit("/")
    cy.get(this.signUpButton).click()
    cy.get(this.header).should("have.text", "Add User")
  }

  registerUser(user: User) {
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.get(this.lastName).type(user.getLastName())

    cy.get(this.email).type(user.getEmail())

    cy.get(this.password).type(user.getPassword())

    cy.get(this.submitButton).click()

    cy.get(this.header).should("have.text", "Contact List")
  }

  registerUsingAPI(user: User){
    return new UserAPI().register(user).then((response) => {
      user.setToken(response.body.token)
    })
  }
}
