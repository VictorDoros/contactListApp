import User from "../models/user"
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
    cy.clickElement(this.addContactButton)
  }

  checkAddContactPage() {
    cy.checkPage(this.header, "Add Contact")
  }

  checkContactDetailsPage() {
    cy.checkPage(this.header, "Contact Details")
  }

  checkEditContactPage() {
    cy.checkPage(this.header, "Edit Contact")
  }

  addContact(user: User) {
    cy.typeText(this.firstNameField, user.getFirstName())
    cy.typeText(this.lastNameField, user.getLastName())
    cy.typeText(this.birthDateField, user.getDateOfBirth())
    cy.typeText(this.emailField, user.getEmail())
    cy.typeText(this.phoneField, user.getPhone())
    cy.typeText(this.streetField, user.getStreetAddress())
    cy.typeText(this.cityField, user.getCity())
    cy.typeText(this.postalCodeField, user.getPostalCode())
    cy.typeText(this.countryField, user.getCountry())
  }

  addContactVisual(user: User) {
    cy.typeText(this.firstNameField, user.getStaticFirstName())
    cy.typeText(this.lastNameField, user.getStaticLastName())
  }

  confirmAddContact(user: User) {
    cy.getRow(this.rowsNewContact, (arrayResults) => {
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
    cy.getRow(this.rowsNewContact, (arrayResults) => {
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
    cy.clickElement(this.firstColumnOfRow)
  }

  loadContactDetailsVisual_newContact(user: User) {
    cy.pickElement(
      this.firstColumnOfRow,
      `${user.getStaticFirstName()} ${user.getStaticLastName()}`
    )
  }

  loadContactDetailsVisual_editedContact(user: User) {
    cy.pickElement(
      this.firstColumnOfRow,
      `${user.getStaticFirstName()}_new ${user.getStaticLastName()}_new`
    )
  }

  loadEditContact() {
    cy.clickElement(this.editButton)
  }

  editContact(user: User) {
    cy.waitUntilElementHasValue(this.firstNameField, user.getFirstName())
    cy.clearFieldAndTypeText(this.firstNameField, user.getStaticFirstName())
    cy.clearFieldAndTypeText(this.lastNameField, user.getStaticLastName())
  }

  editContactVisual(user: User) {
    cy.waitUntilElementHasValue(this.firstNameField, user.getStaticFirstName())
    cy.clearFieldAndTypeText(
      this.firstNameField,
      `${user.getStaticFirstName()}_new`
    )
    cy.clearFieldAndTypeText(
      this.lastNameField,
      `${user.getStaticLastName()}_new`
    )
  }

  getSubmit() {
    cy.clickElement(this.submitButton)
  }

  getReturn() {
    cy.clickElement(this.returnButton)
  }

  getDelete() {
    cy.clickElement(this.deleteButton)
  }

  getCancel() {
    cy.clickElement(this.cancelButton)
  }

  getNoRowsInTable() {
    cy.getEmtpyTable(
      "table",
      (table) => {
        let rows = table.find("tr td")
        return rows.length
      },
      (numberRows) => {
        expect(numberRows).to.eq(0) 
      }
    )
  }

  checkError() {
    return cy.step("Check the error").get(this.error)
  }
}
