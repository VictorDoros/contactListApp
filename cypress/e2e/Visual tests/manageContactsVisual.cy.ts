import User from "../../models/user"
import Environment from "../../models/environment"
import LogInLogOutPage from "../../pages/loginLogoutPage"
import AddContactPage from "../../pages/addContactPage"
import addContactSelectorsSel from "../../selectors/addContactSelectors.sel"
import basicData from "../../support/basicData"

describe(
  "Log in - Visual",
  { tags: ["@visual", "@manageContacts", "@manageContactsVisual"] },
  () => {
    let user: User
    let env: Environment
    let loginLogoutPage: LogInLogOutPage
    let addContactPage: AddContactPage

    beforeEach(() => {
      user = new User()
      env = new Environment()
      loginLogoutPage = new LogInLogOutPage()
      addContactPage = new AddContactPage()

      cy.step("Load the 'Login' page")
      loginLogoutPage.loadLoginPage(env)

      cy.step("Enter the credentials to log in")
      loginLogoutPage.logInVisual(user)

      cy.step("Click on [Submit] button")
      loginLogoutPage.submitLogIn()
    })

    it("Should be able to add a new contact", () => {
      cy.step("Load the contacts page")
      addContactPage.loadAddContact()

      cy.step(
        "Wait until the page is entirely displayed and take the screenshot before filling in the fields"
      )
      cy.waitForLoadComponentsAndTakeScreenshot(
        addContactSelectorsSel.postalCodeField,
        basicData.stateData.beVisible,
        "Before filling in the fields"
      )

      cy.step(
        "Fill in the first name and last name fields in order to add a new contact for visual test"
      )
      addContactPage.addContactVisual(user)

      cy.step(
        "Wait until the page is entirely displayed and take the screenshot after filling in the fields"
      )
      cy.waitForLoadComponentsAndTakeScreenshot(
        addContactSelectorsSel.postalCodeField,
        basicData.stateData.beVisible,
        "After filling in the fields"
      )

      cy.step("Click on [Submit] button")
      addContactPage.getSubmit()

      cy.step(
        "Wait until the page is entirely displayed and take the screenshot with the new added contact"
      )
      cy.waitForLoadComponentsAndTakeScreenshot(
        addContactSelectorsSel.firstColumnsOfRow,
        basicData.stateData.beVisible,
        "New contact added"
      )
    })

    it("Should be able to edit the new contact", () => {
      cy.step("Load the details of the new added contact")
      addContactPage.loadContactDetailsVisual_newContact(user)

      cy.step("Confirm that the contact details has been loaded")
      addContactPage.checkContactDetailsPage()

      cy.step(
        "Wait until the page is loaded with the contact details and take the screenshot with the contact details"
      )
      cy.waitForLoadComponentsAndTakeScreenshot(
        addContactSelectorsSel.editButton,
        basicData.stateData.beVisible,
        "Contact details"
      )

      cy.step("Load the edit mode of the contact")
      addContactPage.loadEditContact()

      cy.step("Confirm that the edit contact mode has been loaded")
      addContactPage.checkEditContactPage()

      cy.step(
        "Wait until the page is loaded for editing the contact and take the screenshot for editing the contact"
      )
      cy.waitForLoadComponentsAndTakeScreenshot(
        addContactSelectorsSel.postalCodeField,
        basicData.stateData.beVisible,
        "Edit contact"
      )

      cy.step("Edit the contact e.g. change the 'First' and 'Last' name")
      addContactPage.editContactVisual(user)

      cy.step("Click on [Submit] button")
      addContactPage.getSubmit()

      cy.step("Return to the contact list")
      addContactPage.getReturn()

      cy.step(
        "Wait until the page is loaded with the edited contact and take the screenshot with the edited contact"
      )
      cy.waitForLoadComponentsAndTakeScreenshot(
        addContactSelectorsSel.firstColumnsOfRow,
        basicData.stateData.beVisible,
        "Edited contact"
      )
    })

    it("Should be able to delete the contact", () => {
      cy.step("Load the details of the contact of the new added contact")
      addContactPage.loadContactDetailsVisual_editedContact(user)

      cy.step("Delete the contact")
      addContactPage.getDelete()

      cy.step(
        "Wait until the page is loaded with the deleted contact and take the screenshot with the deleted contact"
      )
      cy.waitForLoadComponentsAndTakeScreenshot(
        addContactSelectorsSel.firstColumnsOfRow,
        basicData.stateData.beVisible,
        "Deleted contact"
      )
    })
  }
)
