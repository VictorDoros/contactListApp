import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import AddContactPage from "../../pages/addContactPage"

describe("Manage contacts - UI", { tags: ["@ui", "@manageContacts"] }, () => {
  let user: User
  let env: Environment
  let registerUser: RegisterUser
  let addContactPage: AddContactPage

  beforeEach(() => {
    user = new User()
    env = new Environment()
    registerUser = new RegisterUser()
    addContactPage = new AddContactPage()

    registerUser.loadRegisterPage(env)
    registerUser.checkRegisterPage()
    registerUser.registerUser(user)
  })

  it("Should be able to add a valid contact", () => {
    addContactPage.loadAddContact()
    addContactPage.confirmAddContactPage()
    addContactPage.addContact(user)
    addContactPage.getSubmit()
    addContactPage.confirmAddContact(user)
  })

  it("Should be able to edit the contact", () => {
    addContactPage.loadAddContact()
    addContactPage.confirmAddContactPage()
    addContactPage.addContact(user)
    addContactPage.getSubmit()
    addContactPage.confirmAddContact(user)
    addContactPage.loadContactDetails()
    addContactPage.loadEditContact()
    addContactPage.editContact(user)
    addContactPage.getSubmit()
    addContactPage.getReturn()
    addContactPage.confirmEditContact(user)
  })

  it("Should be able to delete the contact", () => {
    addContactPage.loadAddContact()
    addContactPage.confirmAddContactPage()
    addContactPage.addContact(user)
    addContactPage.getSubmit()
    addContactPage.loadContactDetails()
    addContactPage.getDelete()
    addContactPage.getNoRowsInTable()
  })

  it("Should be able to cancel the edit contact", () => {
    addContactPage.loadAddContact()
    addContactPage.confirmAddContactPage()
    addContactPage.addContact(user)
    addContactPage.getSubmit()
    addContactPage.confirmAddContact(user)
    addContactPage.loadContactDetails()
    addContactPage.loadEditContact()
    addContactPage.editContact(user)
    addContactPage.getCancel()
    addContactPage.getReturn()
    addContactPage.confirmAddContact(user)
  })
})
