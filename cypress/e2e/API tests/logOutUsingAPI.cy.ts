import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"

describe("Log out - API", { tags: ["@api", "@logoutAPI"] }, () => {
  let env: Environment
  let user: User
  let apiRequest: APIRequests

  beforeEach(() => {
    env = new Environment()
    user = new User()
    apiRequest = new APIRequests()

    apiRequest.logInUsingAPI(user, env)
  })

  it("Log out using API", () => {
    apiRequest.logOutUsingAPI(user, env)
  })
})
