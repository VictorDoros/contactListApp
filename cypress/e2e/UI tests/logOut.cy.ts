import User from "../../models/user"
import Environment from "../../models/environment"
import LogInLogOut from "../../pages/loginLogoutPage"
import AddContactPage from "../../pages/addContactPage"

describe("Log out - UI", { tags: ["@ui", "@logOut"] }, () => {
  let user: User
  let env: Environment
  let loginLogout: LogInLogOut
  let addContactPage: AddContactPage

  beforeEach(() => {
    user = new User()
    env = new Environment()
    loginLogout = new LogInLogOut()
    addContactPage = new AddContactPage()

    loginLogout.loadLoginPage(env)
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
