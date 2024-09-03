import User from "../../models/user"
import Environment from "../../support/environment"
import LogInLogOutPage from "../../pages/loginLogoutPage"

describe("Log in", { tags: ["@api", "@login"] }, () => {
  let loginLogoutPage: LogInLogOutPage
  let env: Environment
  let user: User

  beforeEach(() => {
    loginLogoutPage = new LogInLogOutPage()
    env = new Environment()
    user = new User()
  })

  it("Log in using API with valid account", () => {
    loginLogoutPage.logInUsingAPI(user, env)
  })
})
