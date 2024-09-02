import LogInPage from "../../pages/loginPage"
import basicData from "../../support/basicData"
import logInData from "../../fixtures/logInData"
import User from "../../models/user"

describe("Log in", () => {
  let logInPage: LogInPage
  let user: User

  beforeEach(() => {
    logInPage = new LogInPage()
    user = new User()
    logInPage.loadLoginPage()
    logInPage.checkLoginPage()
  })

  it("Should be able to log in", () => {
    logInPage.logIn(user)
    logInPage.submitLogIn()
    logInPage.checkUserLoggedIn()
  })

  it("Should display the error when submitting with no credentials", () => {
    logInPage.submitLogIn()
    logInPage.checkError(basicData.stateData.beVisible, logInData.logInError)
  })

  it("Should display the error when submitting with invalid credentials", () => {
    logInPage.logInInvalidCredentials(user)
    logInPage.submitLogIn()
    logInPage.checkError(basicData.stateData.beVisible, logInData.logInError)
  })
})
