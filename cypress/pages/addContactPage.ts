import User from "../models/user"
import addContactAPI from "../api/addContactAPI"
import addContactSelectors from "../selectors/addContactSelectors.sel"

export default class AddContactPage {
  private get addContactButton() {
    return addContactSelectors.addContactButton
  }

  private get firstNameField() {
    return addContactSelectors.firstNameField
  }

  private get lastNameField() {
    return addContactSelectors.lastNameField
  }

  private get birthDateField() {
    return addContactSelectors.birthDateField
  }

  private get emailField() {
    return addContactSelectors.emailField
  }

  private get phoneField() {
    return addContactSelectors.phoneField
  }

  private get streetField() {
    return addContactSelectors.streetField
  }

  private get cityField() {
    return addContactSelectors.cityField
  }

  private get postalCodeField() {
    return addContactSelectors.postalCodeField
  }

  private get countryField() {
    return addContactSelectors.countryField
  }

  private get submitButton() {
    return addContactSelectors.submitButton
  }

  private get error() {
    return addContactSelectors.error
  }

  loadAddContact() {
    cy.get(this.addContactButton).click()
  }

  addContact(user: User) {
    cy.get(this.firstNameField).type(user.getFirstName())
    cy.get(this.lastNameField).type(user.getLastName())
    cy.get(this.birthDateField).type(user.getDateOfBirth())
    cy.get(this.emailField).type(user.getEmail())
    cy.get(this.phoneField).type(user.getPhone())
    cy.get(this.streetField).type(user.getStreetAddress())
    cy.get(this.cityField).type(user.getCity())
    cy.get(this.postalCodeField).type(user.getPostalCode())
    cy.get(this.countryField).type(user.getCountry())
    cy.get(this.submitButton).click()
  }

  checkError() {
   return cy.get(this.error)
  }

  addContactUsingAPI(user: User) {
    return new addContactAPI().apiAddContact(user)
  }
}
