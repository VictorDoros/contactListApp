import User from "../models/user"
import addContactAPI from "../api/addContactAPI"
import addContactSelectors from "../selectors/addContactSelectors.sel"
import "cypress-map"

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

  private get rowsNewContact() {
    return addContactSelectors.rowsNewContact
  }

  loadAddContact() {
    cy.step("Go to contacts page")
    cy.get(this.addContactButton).click()
  }

  addContact(user: User) {
    return cy.then(() => {
      cy.step("Fill in the first name field")
      cy.get(this.firstNameField).type(user.getFirstName())

      cy.step("Fill in the last name field")
      cy.get(this.lastNameField).type(user.getLastName())

      cy.step("Fill in the date of birth field")
      cy.get(this.birthDateField).type(user.getDateOfBirth())

      cy.step("Fill in the email field")
      cy.get(this.emailField).type(user.getEmail())

      cy.step("Fill in the phone field")
      cy.get(this.phoneField).type(user.getPhone())

      cy.step("Fill in the address field")
      cy.get(this.streetField).type(user.getStreetAddress())

      cy.step("Fill in the city field")
      cy.get(this.cityField).type(user.getCity())

      cy.step("Fill in the postal code field")
      cy.get(this.postalCodeField).type(user.getPostalCode())

      cy.step("Fill in the country field")
      cy.get(this.countryField).type(user.getCountry())

      cy.step("Click the [Submit] button")
      cy.get(this.submitButton).click()
    })
  }

  confirmAddContact(user: User) {
    cy.get(this.rowsNewContact)
      .map("innerText")
      .then((arrayResults) => {
        expect(arrayResults[0]).to.include(
          `${user.getFirstName()} ${user.getLastName()}`
        )
        expect(arrayResults[1]).to.include(user.getDateOfBirth())
        expect(arrayResults[2]).to.include(user.getEmail())
        expect(arrayResults[3]).to.include(user.getPhone())
        expect(arrayResults[4]).to.include(user.getStreetAddress())
        expect(arrayResults[5]).to.include(
          `${user.getCity()} ${user.getPostalCode()}`
        )
        expect(arrayResults[6]).to.include(user.getCountry())
      })
  }

  checkError() {
    return cy.step("Check the error").get(this.error)
  }

  addContactUsingAPI(user: User) {
    return new addContactAPI().apiAddContact(user)
  }
}
