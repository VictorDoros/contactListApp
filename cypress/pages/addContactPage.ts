import Environment from "../support/environment"
import User from "../models/user"
import addContactAPI from "../api/addContactAPI"
import addContactSelectors from "../selectors/addContactSelectors.sel"
import addContactSelectorsSel from "../selectors/addContactSelectors.sel"
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

  private get firstColumnOfRow() {
    return addContactSelectors.firstColumnsOfRow
  }

  private get header() {
    return addContactSelectors.header
  }

  private get editButton() {
    return addContactSelectors.editButton
  }

  private get returnButton() {
    return addContactSelectors.returnButton
  }

  private get deleteButton() {
    return addContactSelectorsSel.deleteButton
  }

  private get cancelButton() {
    return addContactSelectors.cancelButton
  }

  loadAddContact() {
    cy.step("Reach the page")
    cy.visit(new Environment().getEnvironment())
    cy.step("Go to contacts page")
    cy.get(this.addContactButton).click()
  }

  confirmAddContactPage() {
    cy.step("Confirm that the 'Add Contact' page has been loaded")
    cy.get(this.header).invoke("text").should("eq", "Add Contact")
  }

  addContact(user: User) {
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
  }

  confirmAddContact(user: User) {
    cy.step("Confirm the informatiom from the edited contact OR the contact was not edited after canceling the edit contact")
    cy.get(this.rowsNewContact)
      .map("innerText")
      .then((arrayResults) => {
        expect(arrayResults[0]).to.eq(
          `${user.getFirstName()} ${user.getLastName()}`
        )
        expect(arrayResults[1]).to.eq(user.getDateOfBirth())
        expect(arrayResults[2]).to.eq(user.getEmail())
        expect(arrayResults[3]).to.eq(user.getPhone())
        expect(arrayResults[4]).to.include(user.getStreetAddress())
        expect(arrayResults[5]).to.include(
          `${user.getCity()} ${user.getPostalCode()}`
        )
        expect(arrayResults[6]).to.eq(user.getCountry())
      })
  }

  confirmEditContact(user: User) {
    cy.step("Confirm the informatiom from the edited contact")
    cy.get(this.rowsNewContact)
      .map("innerText")
      .then((arrayResults) => {
        expect(arrayResults[0]).to.eq(
          `${user.getStaticFirstName()} ${user.getStaticLastName()}`
        )
        expect(arrayResults[1]).to.eq(user.getDateOfBirth())
        expect(arrayResults[2]).to.eq(user.getEmail())
        expect(arrayResults[3]).to.eq(user.getPhone())
        expect(arrayResults[4]).to.include(user.getStreetAddress())
        expect(arrayResults[5]).to.include(
          `${user.getCity()} ${user.getPostalCode()}`
        )
        expect(arrayResults[6]).to.eq(user.getCountry())
      })
  }

  loadContactDetails() {
    cy.step("Load the details of the contact")
    cy.get(this.firstColumnOfRow).click()
    cy.get(this.header).invoke("text").should("eq", "Contact Details")
  }

  loadEditContact() {
    cy.step("Load the edit mode of the contact")
    cy.get(this.editButton).click()
    cy.get(this.header).invoke("text").should("eq", "Edit Contact")
  }

  editContact(user: User) {
    cy.step("Edit the contact e.g. change the 'First' and 'Last' name")
    cy.get(this.firstNameField, { timeout: 10000 }).should(
      "have.value",
      user.getFirstName()
    )
    cy.get(this.firstNameField).clear().type(user.getStaticFirstName())
    cy.get(this.lastNameField).clear().type(user.getStaticLastName())
  }

  getSubmit() {
    cy.step("Submit the changes")
    cy.get(this.submitButton).click()
  }

  getReturn() {
    cy.step("Return to the contact list")
    cy.get(this.returnButton).click()
  }

  getDelete() {
    cy.step("Delete the contact")
    cy.get(this.deleteButton).click()
  }

  getCancel() {
    cy.step("Cancel the edit contact")
    cy.get(this.cancelButton).click()
  }

  getNoRowsInTable() {
    cy.step("Confirm that table has no rows")
    cy.get("table")
      .then((table) => {
        let rows = table.find("tr td")
        return rows.length
      })
      .then((numberRows) => {
        expect(numberRows).to.eq(0)
      })
  }

  checkError() {
    return cy.step("Check the error").get(this.error)
  }

  addContactUsingAPI(user: User) {
    return new addContactAPI().apiAddContact(user)
  }
}
