import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import AddContactPage from "../../pages/addContactPage"

describe(
  "Manage contacts - Functional",
  { tags: ["@functional", "@manageContacts", "@manageContactsFunctional"] },
  () => {
    let user: User
    let env: Environment
    let registerUser: RegisterUser
    let addContactPage: AddContactPage

    beforeEach(() => {
      user = new User()
      env = new Environment()
      registerUser = new RegisterUser()
      addContactPage = new AddContactPage()

      cy.step("Reach the page and click on [Sign in] button")
      registerUser.loadRegisterPage(env)

      cy.step("Confirm that user has been redirected to the registration page")
      registerUser.checkRegisterPage()

      cy.step("Fill in the fields in order to register a new user")
      registerUser.registerUser(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step("Load the 'Add Contact' page")
      addContactPage.loadAddContact()

      cy.step("Confirm that user has been redirected to the 'Add Contact' page")
      addContactPage.checkAddContactPage()
    })

    it("Should be able to add a valid contact", () => {
      cy.step("Fill in the fields in order to create a new contact")
      addContactPage.addContact(user)

      cy.step("Click on [Submit] button")
      addContactPage.getSubmit()

      cy.step(
        "Confirm the informatiom from the edited contact OR the contact was not edited after canceling the edit contact"
      )
      addContactPage.confirmAddContact(user)
    })

    it("Should be able to edit the contact", () => {
      cy.step("Fill in the fields in order to create a new contact")
      addContactPage.addContact(user)

      cy.step("Click on [Submit] button")
      addContactPage.getSubmit()

      cy.step(
        "Confirm the informatiom from the edited contact OR the contact was not edited after canceling the edit contact"
      )
      addContactPage.confirmAddContact(user)

      cy.step("Load the details of the contact")
      addContactPage.loadContactDetails()

      cy.step("Confirm that the contact details has been loaded")
      addContactPage.checkContactDetailsPage()

      cy.step("Load the edit mode of the contact")
      addContactPage.loadEditContact()

      cy.step("Confirm that the edit contact mode has been loaded")
      addContactPage.checkEditContactPage()

      cy.step("Edit the contact e.g. change the 'First' and 'Last' name")
      addContactPage.editContact(user)

      cy.step("Click on [Submit] button")
      addContactPage.getSubmit()

      cy.step("Return to the contact list")
      addContactPage.getReturn()

      cy.step("Confirm the informatiom from the edited contact")
      addContactPage.confirmEditContact(user)
    })

    it("Should be able to delete the contact", () => {
      cy.step("Fill in the fields in order to create a new contact")
      addContactPage.addContact(user)

      cy.step("Click on [Submit] button")
      addContactPage.getSubmit()

      cy.step("Load the details of the contact")
      addContactPage.loadContactDetails()

      cy.step("Confirm that the contact details has been loaded")
      addContactPage.checkContactDetailsPage()

      cy.step("Delete the contact")
      addContactPage.getDelete()

      cy.step("Confirm that table has no rows")
      addContactPage.getNoRowsInTable()
    })

    it("Should be able to cancel the edit contact", () => {
      cy.step("Fill in the fields in order to create a new contact")
      addContactPage.addContact(user)

      cy.step("Click on [Submit] button")
      addContactPage.getSubmit()

      cy.step(
        "Confirm the informatiom from the edited contact OR the contact was not edited after canceling the edit contact"
      )
      addContactPage.confirmAddContact(user)

      cy.step("Load the details of the contact")
      addContactPage.loadContactDetails()

      cy.step("Confirm that the contact details has been loaded")
      addContactPage.checkContactDetailsPage()

      cy.step("Load the edit mode of the contact")
      addContactPage.loadEditContact()

      cy.step("Confirm that the edit contact mode has been loaded")
      addContactPage.checkEditContactPage()

      cy.step("Edit the contact e.g. change the 'First' and 'Last' name")
      addContactPage.editContact(user)

      cy.step("Cancel the edit contact")
      addContactPage.getCancel()

      cy.step("Return to the contact list")
      addContactPage.getReturn()

      cy.step("Confirm that the contact is still displayed within the table")
      addContactPage.confirmAddContact(user)
    })
  }
)
