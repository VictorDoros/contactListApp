import LogInPage from "../../pages/loginPage"
import User from "../../models/user"
import AddContactPage from "../../pages/addContactPage"
import "cypress-plugin-api"

describe("Add contact", () => {
  let logInPage: LogInPage
  let user: User
  let addContactPage: AddContactPage

  beforeEach(() => {
    logInPage = new LogInPage()
    user = new User()
    addContactPage = new AddContactPage()
  })

  it("Should be able to add a valid contact", () => {
    logInPage.loadLoginPage()
    logInPage.logIn()

    addContactPage.loadAddContact()
    addContactPage.addContact(user)

    addContactPage.checkError().should("not.exist")
  })

  it("Should be able to edit the contact", () => {
    
  })
})
