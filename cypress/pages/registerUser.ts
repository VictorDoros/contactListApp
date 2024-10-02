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
    cy.loadEndPoint(env.getEnvironment(), this.signUpButton)
  }

  checkRegisterPage() {
    cy.checkPage(this.header, "Add User")
  }

  registerUser(user: User) {
    cy.typeText(this.firstNameInput, user.getFirstName())
    cy.typeText(this.lastNameInput, user.getLastName())
    cy.typeText(this.emailInput, user.getEmail())
    cy.typeText(this.passwordInput, user.getPassword())
  }

  submitRegistration() {
    cy.clickElement(this.submitButton)
  }

  checkContactListPage() {
    cy.checkPage(this.header, "Contact List")
  }

  cancelRegister() {
    cy.clickElement(this.cancelButton)
  }

  registerUser_firstName(user: User) {
    cy.typeText(this.firstNameInput, user.getFirstName())
  }

  registerUser_firstName_visual(user: User) {
    cy.get(this.firstNameInput).type(user.getStaticFirstName())
  }

  registerUser_lastName(user: User) {
    cy.typeText(this.lastNameInput, user.getLastName())
  }

  registerUser_lastName_Visual(user: User) {
    cy.get(this.lastNameInput).type(user.getStaticLastName())
  }

  registerUser_firstLastName(user: User) {
    cy.typeText(this.firstNameInput, user.getFirstName())
    cy.typeText(this.lastNameInput, user.getLastName())
  }

  registerUser_firstLastName_visual(user: User) {
    cy.get(this.firstNameInput).type(user.getStaticFirstName())
    cy.get(this.lastNameInput).type(user.getStaticLastName())
  }

  registerUser_email(user: User) {
    cy.typeText(this.emailInput, user.getEmail())
  }

  registerUser_email_visual(user: User) {
    cy.get(this.emailInput).type(user.getStaticEmail())
  }

  registerUser_firstNameEmail(user: User) {
    cy.typeText(this.firstNameInput, user.getFirstName())
    cy.typeText(this.emailInput, user.getEmail())
  }

  registerUser_firstNameEmail_visual(user: User) {
    cy.get(this.firstNameInput).type(user.getStaticFirstName())
    cy.get(this.emailInput).type(user.getStaticEmail())
  }

  registerUser_lastNameEmail(user: User) {
    cy.typeText(this.lastNameInput, user.getLastName())
    cy.typeText(this.emailInput, user.getEmail())
  }

  registerUser_lastNameEmail_visual(user: User) {
    cy.get(this.lastNameInput).type(user.getStaticLastName())
    cy.get(this.emailInput).type(user.getStaticEmail())
  }

  registerUser_firstLastNameEmail(user: User) {
    cy.typeText(this.firstNameInput, user.getFirstName())
    cy.typeText(this.lastNameInput, user.getLastName())
    cy.typeText(this.emailInput, user.getEmail())
  }

  registerUser_firstLastNameEmail_visual(user: User) {
    cy.get(this.firstNameInput).type(user.getStaticFirstName())
    cy.get(this.lastNameInput).type(user.getStaticLastName())
    cy.get(this.emailInput).type(user.getStaticEmail())
  }

  registerUser_password(user: User) {
    cy.typeText(this.passwordInput, user.getPassword())
  }

  registerUser_firstNamePassword(user: User) {
    cy.typeText(this.firstNameInput, user.getFirstName())
    cy.typeText(this.passwordInput, user.getPassword())
  }

  registerUser_firstNamePassword_visual(user: User) {
    cy.get(this.firstNameInput).type(user.getStaticFirstName())
    cy.get(this.passwordInput).type(user.getPassword())
  }

  registerUser_lastNamePassword(user: User) {
    cy.typeText(this.lastNameInput, user.getLastName())
    cy.typeText(this.passwordInput, user.getPassword())
  }

  registerUser_lastNamePassword_visual(user: User) {
    cy.get(this.lastNameInput).type(user.getStaticLastName())
    cy.get(this.passwordInput).type(user.getStaticEmail())
  }

  registerUser_firstLastNamePassword(user: User) {
    cy.typeText(this.firstNameInput, user.getFirstName())
    cy.typeText(this.lastNameInput, user.getLastName())
    cy.typeText(this.passwordInput, user.getPassword())
  }

  registerUser_firstLastNamePassword_visual(user: User) {
    cy.get(this.firstNameInput).type(user.getStaticFirstName())
    cy.get(this.lastNameInput).type(user.getStaticLastName())
    cy.get(this.passwordInput).type(user.getPassword())
  }

  registerUser_emailPassword(user: User) {
    cy.typeText(this.emailInput, user.getEmail())
    cy.typeText(this.passwordInput, user.getPassword())
  }

  registerUser_emailPassword_visual(user: User) {
    cy.get(this.emailInput).type(user.getStaticEmail())
    cy.get(this.passwordInput).type(user.getPassword())
  }

  registerUser_firstNameEmailPassword(user: User) {
    cy.typeText(this.firstNameInput, user.getFirstName())
    cy.typeText(this.emailInput, user.getEmail())
    cy.typeText(this.passwordInput, user.getPassword())
  }

  registerUser_firstNameEmailPassword_visual(user: User) {
    cy.get(this.firstNameInput).type(user.getStaticFirstName())
    cy.get(this.emailInput).type(user.getStaticEmail())
    cy.get(this.passwordInput).type(user.getPassword())
  }

  registerUser_lastNameEmailPassword(user: User) {
    cy.typeText(this.lastNameInput, user.getLastName())
    cy.typeText(this.emailInput, user.getEmail())
    cy.typeText(this.passwordInput, user.getPassword())
  }

  registerUser_lastNameEmailPassword_visual(user: User) {
    cy.get(this.lastNameInput).type(user.getStaticLastName())
    cy.get(this.emailInput).type(user.getStaticEmail())
    cy.get(this.passwordInput).type(user.getPassword())
  }

  registerUser_invalidPassword(user: User) {
    cy.typeText(this.firstNameInput, user.getFirstName())
    cy.typeText(this.lastNameInput, user.getLastName())
    cy.typeText(this.emailInput, user.getEmail())
    cy.typeText(this.passwordInput, user.getInvalidPassword())
  }

  registerUser_invalidPassword_visual(user: User) {
    cy.get(this.firstNameInput).type(user.getStaticFirstName())
    cy.get(this.lastNameInput).type(user.getStaticLastName())
    cy.get(this.emailInput).type(user.getStaticEmail())
    cy.get(this.passwordInput).type(user.getInvalidPassword())
  }

  registerUser_invalidEmail(user: User) {
    cy.typeText(this.firstNameInput, user.getFirstName())
    cy.typeText(this.lastNameInput, user.getLastName())
    cy.typeText(this.emailInput, user.getInvalidEmail())
    cy.typeText(this.passwordInput, user.getPassword())
  }

  registerUser_invalidEmail_visual(user: User) {
    cy.get(this.firstNameInput).type(user.getStaticFirstName())
    cy.get(this.lastNameInput).type(user.getStaticLastName())
    cy.get(this.emailInput).type(user.getInvalidEmail())
    cy.get(this.passwordInput).type(user.getPassword())
  }

  registerUser_existingEmail(user: User) {
    cy.typeText(this.firstNameInput, user.getFirstName())
    cy.typeText(this.lastNameInput, user.getLastName())
    cy.typeText(this.emailInput, user.getStaticEmail())
    cy.typeText(this.passwordInput, user.getPassword())
  }

  registerUser_existingEmail_visual(user: User) {
    cy.get(this.firstNameInput).type(user.getStaticEmail())
    cy.get(this.lastNameInput).type(user.getStaticLastName())
    cy.get(this.emailInput).type(user.getStaticEmail())
    cy.get(this.passwordInput).type(user.getPassword())
  }

  getError(state: string, errorText: string) {
    cy.checkTextVisibility(this.error, state, errorText)
  }
}
