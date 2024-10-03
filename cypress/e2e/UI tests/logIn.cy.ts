import User from "../../models/user"
import Environment from "../../models/environment"
import LogInLogOut from "../../pages/loginLogoutPage"
import basicData from "../../support/basicData"
import logInData from "../../fixtures/logInData"

describe("Log in - UI", { tags: ["@ui", "@login", "@loginUI"] }, () => {
  let user: User
  let env: Environment
  let logInLogOutPage: LogInLogOut

  beforeEach(() => {
    user = new User()
    env = new Environment()
    logInLogOutPage = new LogInLogOut()

    cy.step("Load the 'Login' page")
    logInLogOutPage.loadLoginPage(env)

    cy.step("Confirm that the 'Log in' page has been loaded")
    logInLogOutPage.checkLoginPage()
  })

  it("Should be able to log in", () => {
    cy.step("Insert the credentials in order ot log in to profile")
    logInLogOutPage.logIn(user)

    cy.step("Click on [Submit] button")
    logInLogOutPage.submitLogIn()

    cy.step("Confirm that user has logged in")
    logInLogOutPage.checkUserLoggedIn()
  })

  it("Should display the error when submitting with no credentials", () => {
    cy.step("Click on [Submit] button")
    logInLogOutPage.submitLogIn()

    cy.step("Check the error after submitting with no credentials")
    logInLogOutPage.checkError(
      basicData.stateData.beVisible,
      logInData.logInError
    )
  })

  it("Should display the error when submitting with invalid credentials", () => {
    cy.step("Insert invalid credentials in order ot log in to profile")
    logInLogOutPage.logInInvalidCredentials(user)

    cy.step("Click on [Submit] button")
    logInLogOutPage.submitLogIn()

    cy.step("Check the error after submitting with invalid credentials")
    logInLogOutPage.checkError(
      basicData.stateData.beVisible,
      logInData.logInError
    )
  })
})
