import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"
import LogInLogOutPage from "../../pages/loginLogoutPage"

describe("Log in using API", { tags: ["@api", "@loginAPI"] }, () => {
  let loginLogoutPage: LogInLogOutPage
  let env: Environment
  let user: User
  let apiRequest : APIRequests

  beforeEach(() => {
    loginLogoutPage = new LogInLogOutPage()
    env = new Environment()
    user = new User()
    apiRequest = new APIRequests
  })

  it("Log in using API", () => {
    apiRequest.logInUsingAPI(user, env)
  })

})
