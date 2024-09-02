import LogInPage from "../../pages/loginPage"
import User from "../../models/user"
import AddContactPage from "../../pages/addContactPage"

describe("Log out", () => {
  let loginPage: LogInPage
  let user: User
  let addContactPage: AddContactPage

  beforeEach(() => {
    loginPage = new LogInPage()
    user = new User()
    addContactPage = new AddContactPage()

    loginPage.loadLoginPage()
    loginPage.logIn(user)
    loginPage.submitLogIn()
    loginPage.checkUserLoggedIn()
  })

  it("Should be able to log out after log in", () => {
    loginPage.getLogout()
    loginPage.checkLoginPage()
  })

  it("Should be able to log out from 'Add Contact' page", () => {
    addContactPage.loadAddContact()
    addContactPage.confirmAddContactPage()
    loginPage.getLogout()
    loginPage.checkLoginPage()
  })

  it("Should be able to log out from 'Contact Details' page", () => {
    loginPage.loadContactDetails()
    loginPage.getLogout()
    loginPage.checkLoginPage()
  })

  it("Should be able to log out from 'Edit Contact' page", () => {
    loginPage.loadContactDetails()
    addContactPage.loadEditContact()
    loginPage.getLogout()
    loginPage.checkLoginPage()
  })
})
