import User from "../../models/user"
import Environment from "../../models/environment"
import LogInLogOutPage from "../../pages/loginLogoutPage"
import loginSelectors from "../../selectors/login.sel"
import basicData from "../../support/basicData"

describe(
  "Log in - Visual",
  { tags: ["@visual", "@login", "@loginVisual"] },
  () => {
    let user: User
    let env: Environment
    let loginLogoutPage: LogInLogOutPage

    beforeEach(() => {
      user = new User()
      env = new Environment()
      loginLogoutPage = new LogInLogOutPage()

      cy.step("Load the 'Login' page")
      loginLogoutPage.loadLoginPage(env)
    })
    
    it("Log in user", () => {
      cy.step("Take the screenshot before logging")
      cy.takeScreenshot("Before filling in the credentials")

      cy.step("Enter the credentials to log in")
      loginLogoutPage.logInVisual(user)

      cy.step(
        "Unfocus the last inserted field and take the screenshot before logging"
      )
      cy.takeScreenshot("After filling in the credentials")

      cy.step("Click on [Submit] button")
      loginLogoutPage.submitLogIn()

      cy.step("Take the screenshot after successful log in in the fields")
      cy.waitForLoadComponentsAndTakeScreenshot(
        loginSelectors.tableHead,
        basicData.stateData.beVisible,
        "User logged in"
      )
    })

    it("Should display the error when submitting with no credentials", () => {
      cy.step("Click on [Submit] button")
      loginLogoutPage.submitLogIn()

      cy.step(
        "Wait untill the error is displayed and take the screenshot after submitting with no credentials"
      )
      cy.waitForLoadComponentsAndTakeScreenshot(
        loginSelectors.error,
        basicData.stateData.beVisible,
        "Error no credentials"
      )
    })

    it("Should display the error when submitting with invalid credentials", () => {
      cy.step("Insert invalid credentials in order ot log in to profile")
      loginLogoutPage.logInInvalidCredentials(user)

      cy.step("Click on [Submit] button")
      loginLogoutPage.submitLogIn()

      cy.step(
        "Wait untill the error is displayed and take the screenshot after submitting with invalid credentials"
      )
      cy.waitForLoadComponentsAndTakeScreenshot(
        loginSelectors.error,
        basicData.stateData.beVisible,
        "Error invalid credentials"
      )
    })
  }
)
