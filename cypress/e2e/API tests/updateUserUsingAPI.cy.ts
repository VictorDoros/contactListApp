import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import APIRequests from "../../pages/apiRequests"

describe("Update user", { tags: ["@api", "@updateUserAPI"] }, () => {
  let user: User
  let env: Environment
  let registerUser: RegisterUser
  let apiRequest: APIRequests

  beforeEach(() => {
    user = new User()
    registerUser = new RegisterUser()
    env = new Environment()
    apiRequest = new APIRequests()

    apiRequest.registerUsingAPI(user, env)
  })

  it("Update user using API", () => {
    apiRequest.updateUserUsingAPI(user, env)
    apiRequest.getUserAfterUpdateUsingAPI(user, env)
  })
})
