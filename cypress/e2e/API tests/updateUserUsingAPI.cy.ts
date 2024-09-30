import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"

describe("Update user - API", { tags: ["@api", "@updateUserAPI"] }, () => {
  let user: User
  let env: Environment
  let apiRequest: APIRequests

  beforeEach(() => {
    user = new User()
    env = new Environment()
    apiRequest = new APIRequests()

    apiRequest.registerUsingAPI(user, env)
  })

  it("Update user using API", () => {
    apiRequest.updateUserUsingAPI(user, env)

    apiRequest.getUserAfterUpdateUsingAPI(user, env)
  })
})
