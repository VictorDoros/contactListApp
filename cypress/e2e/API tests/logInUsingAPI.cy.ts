import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"
import LogInLogOutPage from "../../pages/loginLogoutPage"

describe("Log in - API", { tags: ["@api", "@login", "@loginAPI"] }, () => {
  let env: Environment
  let user: User
  let apiRequest: APIRequests
  let loginLogoutPage: LogInLogOutPage

  beforeEach(() => {
    env = new Environment()
    user = new User()
    apiRequest = new APIRequests()
    loginLogoutPage = new LogInLogOutPage()
  })

  it("Log in using API", () => {
    apiRequest.logInUsingAPI(user, env)
  })
})
