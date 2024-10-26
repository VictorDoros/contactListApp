import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"

describe(
  "Register user - API",
  { tags: ["@api", "@userRegister", "@userRegisterAPI"] },
  () => {
    let user: User
    let env: Environment
    let apiRequest: APIRequests

    beforeEach(() => {
      user = new User()
      env = new Environment()
      apiRequest = new APIRequests()
    })

    it("Register user using API", () => {
      apiRequest.registerUser(user, env)
    })
  }
)
