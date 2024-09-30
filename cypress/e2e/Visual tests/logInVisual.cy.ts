import User from "../../models/user"
import Environment from "../../models/environment"
import LogInLogOutPage from "../../pages/loginLogoutPage"

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

      loginLogoutPage.loadLoginPage(env)
    })
    it("Log in user", () => {
      loginLogoutPage.takeScreenshotBeforeLogin()

      loginLogoutPage.logInVisual(user)

      loginLogoutPage.takeScreenshotAfterFillDataLogin()

      loginLogoutPage.submitLogIn()

      loginLogoutPage.takeScreenshotLogin()
    })

    it("Should display the error when submitting with no credentials", () => {
      loginLogoutPage.submitLogIn()

      loginLogoutPage.takeScreenshotErrorNoCredentials()
    })

    it("Should display the error when submitting with invalid credentials", () => {
      loginLogoutPage.logInInvalidCredentials(user)

      loginLogoutPage.submitLogIn()

      loginLogoutPage.takeScreenshotErrorInvalidCredentials()
    })
  }
)
