import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"

describe("Log in - API", { tags: ["@api", "@login", "@loginAPI"] }, () => {
  let env: Environment
  let user: User
  let apiRequest: APIRequests

  beforeEach(() => {
    env = new Environment()
    user = new User()
    apiRequest = new APIRequests()
  })

  it("Log in using API", () => {
    apiRequest.logInUsingAPI(user, env)
  })
})
