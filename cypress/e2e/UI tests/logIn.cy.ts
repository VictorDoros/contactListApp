import LogInPage from "../../pages/loginPage"
import basicData from "../../support/basicData"
import logInData from "../../fixtures/logInData"

describe("Log in", () => {
  let logInPage: LogInPage

  beforeEach(() => {
    logInPage = new LogInPage()
    logInPage.loadLoginPage()
    logInPage.checkLoginPage()
  })

  it("Should be able to log in", () => {
    logInPage.logIn()
    logInPage.submitLogIn()
    logInPage.checkUserLoggedIn()
  })

  it("Should display the error when submitting with no credentials", () => {
    logInPage.submitLogIn()
    logInPage.checkError(basicData.stateData.beVisible, logInData.logInError)
  })

  it("Should display the error when submitting with invalid credentials", () => {
    logInPage.logInInvalidCredentials()
    logInPage.submitLogIn()
    logInPage.checkError(basicData.stateData.beVisible, logInData.logInError)
  })
})
