import User from "../../models/user"
import Environment from "../../models/environment"
import LogInLogOutPage from "../../pages/loginLogoutPage"
import APIRequests from "../../pages/apiRequests"

describe("Log out using API", { tags: ["@api", "@logoutAPI"] }, () => {
  let loginLogoutPage: LogInLogOutPage
  let env: Environment
  let user: User
  let apiRequest: APIRequests

  beforeEach(() => {
    loginLogoutPage = new LogInLogOutPage()
    env = new Environment()
    user = new User()
    apiRequest = new APIRequests()

    apiRequest.logInUsingAPI(user, env)
  })


  it("Log out using API", () => {
    apiRequest.logOutUsingAPI(user, env)
  })
})
