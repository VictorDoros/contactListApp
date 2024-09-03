import LogInLogOut from "../../pages/loginLogoutPage"
import User from "../../models/user"
import AddContactPage from "../../pages/addContactPage"

describe("Log out", { tags: ["@ui", "@logOut"] }, () => {
  let loginLogout: LogInLogOut
  let user: User
  let addContactPage: AddContactPage

  beforeEach(() => {
    loginLogout = new LogInLogOut()
    user = new User()
    addContactPage = new AddContactPage()

    loginLogout.loadLoginPage()
    loginLogout.logIn(user)
    loginLogout.submitLogIn()
    loginLogout.checkUserLoggedIn()
  })

  it("Should be able to log out after log in", () => {
    loginLogout.getLogout()
    loginLogout.checkLoginPage()
  })

  it("Should be able to log out from 'Add Contact' page", () => {
    addContactPage.loadAddContact()
    addContactPage.confirmAddContactPage()
    loginLogout.getLogout()
    loginLogout.checkLoginPage()
  })

  it("Should be able to log out from 'Contact Details' page", () => {
    loginLogout.loadContactDetails()
    loginLogout.getLogout()
    loginLogout.checkLoginPage()
  })

  it("Should be able to log out from 'Edit Contact' page", () => {
    loginLogout.loadContactDetails()
    addContactPage.loadEditContact()
    loginLogout.getLogout()
    loginLogout.checkLoginPage()
  })
})
