import User from "../models/user"

export default class RegisterUser {
  private get firstNameInput() {
    return "#firstName"
  }

  private get lastName() {
    return "#lastName"
  }

  private get email() {
    return "#email"
  }

  private get password() {
    return "#password"
  }

  private get signUpButton() {
    return "#signup"
  }

  private get submitButton() {
    return "#submit"
  }

  private get header() {
    return "h1"
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
}
