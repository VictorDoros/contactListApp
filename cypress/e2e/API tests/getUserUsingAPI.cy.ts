import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"

describe("Get the user - API", { tags: ["@api", "@getUserAPI"] }, () => {
  let user: User
  let env: Environment
  let apiRequest: APIRequests

  beforeEach(() => {
    user = new User()
    env = new Environment()
    apiRequest = new APIRequests()

    apiRequest.logInUsingAPI(user, env)
  })

  it("Get the user using API", () => {
    apiRequest.getUserUsingAPI(user, env)
  })
})
