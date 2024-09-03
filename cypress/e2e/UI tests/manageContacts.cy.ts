import User from "../../models/user"
import AddContactPage from "../../pages/addContactPage"
import RegisterUser from "../../pages/registerUser"

describe("Manage contacts", { tags: ["@ui", "@manageContacts"] }, () => {
  let user: User
  let addContactPage: AddContactPage
  let registerUser: RegisterUser

  beforeEach(() => {
    user = new User()
    addContactPage = new AddContactPage()
    registerUser = new RegisterUser()

    registerUser.loadRegisterPage()
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
