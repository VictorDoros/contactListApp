import LogInLogOut from "../../pages/loginLogoutPage"
import basicData from "../../support/basicData"
import logInData from "../../fixtures/logInData"
import User from "../../models/user"

describe("Log in", { tags: ["@ui", "@login"] }, () => {
  let logInLogOutPage: LogInLogOut
  let user: User

  beforeEach(() => {
    logInLogOutPage = new LogInLogOut()
    user = new User()
    logInLogOutPage.loadLoginPage()
    logInLogOutPage.checkLoginPage()
  })

  it("Should be able to log in", () => {
    logInLogOutPage.logIn(user)
    logInLogOutPage.submitLogIn()
    logInLogOutPage.checkUserLoggedIn()
  })

  it("Should display the error when submitting with no credentials", () => {
    logInLogOutPage.submitLogIn()
    logInLogOutPage.checkError(
      basicData.stateData.beVisible,
      logInData.logInError
    )
  })

  it("Should display the error when submitting with invalid credentials", () => {
    logInLogOutPage.logInInvalidCredentials(user)
    logInLogOutPage.submitLogIn()
    logInLogOutPage.checkError(
      basicData.stateData.beVisible,
      logInData.logInError
    )
  })
})
