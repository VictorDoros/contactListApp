import User from "../../models/user"
import Environment from "../../models/environment"
import LogInLogOutPage from "../../pages/loginLogoutPage"

describe("Log out using API", { tags: ["@api", "@logout"] }, () => {
  let loginLogoutPage: LogInLogOutPage
  let env: Environment
  let user: User

  beforeEach(() => {
    loginLogoutPage = new LogInLogOutPage()
    env = new Environment()
    user = new User()

    loginLogoutPage.logInUsingAPI(user, env)
  })


  it("Log out using API", () => {
    loginLogoutPage.logOutUsingAPI(user, env)
  })
})
