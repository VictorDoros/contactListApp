import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"
import LogInLogOutPage from "../../pages/loginLogoutPage"

describe("Log out using API", { tags: ["@api", "@logoutAPI"] }, () => {
  let env: Environment
  let user: User
  let apiRequest: APIRequests
  let loginLogoutPage: LogInLogOutPage

  beforeEach(() => {
    env = new Environment()
    user = new User()
    apiRequest = new APIRequests()
    loginLogoutPage = new LogInLogOutPage()

    apiRequest.logInUsingAPI(user, env)
  })

  it("Log out using API", () => {
    apiRequest.logOutUsingAPI(user, env)
  })
})
