import User from "../../models/user"
import Environment from "../../models/environment"
import LogInLogOutPage from "../../pages/loginLogoutPage"
import AddContactPage from "../../pages/addContactPage"

describe("Log out - UI", { tags: ["@ui", "@logOut"] }, () => {
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

    cy.step("Insert the credentials in order ot log in to profile")
    loginLogoutPage.logIn(user)

    cy.step("Click on [Submit] button")
    loginLogoutPage.submitLogIn()

    cy.step("Confirm that user has logged in")
    loginLogoutPage.checkUserLoggedIn()
  })

  it("Should be able to log out after log in", () => {
    cy.step("Logout from the APP")
    loginLogoutPage.getLogout()

    cy.step(
      "Confirm that the user has logged out and the 'Log in' page has been loaded"
    )
    loginLogoutPage.checkLoginPage()
  })

  it("Should be able to log out from 'Add Contact' page", () => {
    cy.step("Load the 'Add Contact' page")
    addContactPage.loadAddContact()

    cy.step("Confirm that user has been redirected to the 'Add Contact' page")
    addContactPage.checkAddContactPage()

    cy.step("Logout from the APP")
    loginLogoutPage.getLogout()

    cy.step(
      "Confirm that the user has logged out and the 'Log in' page has been loaded"
    )
    loginLogoutPage.checkLoginPage()
  })

  it("Should be able to log out from 'Contact Details' page", () => {
    cy.step("Load the details of the contact")
    loginLogoutPage.loadContactDetails()

    cy.step("Confirm that the contact details has been loaded")
    addContactPage.checkContactDetailsPage()

    cy.step("Logout from the APP")
    loginLogoutPage.getLogout()

    cy.step(
      "Confirm that the user has logged out and the 'Log in' page has been loaded"
    )
    loginLogoutPage.checkLoginPage()
  })

  it("Should be able to log out from 'Edit Contact' page", () => {
    cy.step("Load the details of the contact")
    loginLogoutPage.loadContactDetails()

    cy.step("Confirm that the contact details has been loaded")
    addContactPage.checkContactDetailsPage()

    cy.step("Load the edit mode of the contact")
    addContactPage.loadEditContact()

    cy.step("Confirm that the edit contact mode has been loaded")
    addContactPage.checkEditContactPage()

    cy.step("Logout from the APP")
    loginLogoutPage.getLogout()

    cy.step(
      "Confirm that the user has logged out and the 'Log in' page has been loaded"
    )
    loginLogoutPage.checkLoginPage()
  })
})
