import User from "../../models/user"
import RegisterUser from "../../pages/registerUser"
import Environment from "../../support/environment"

describe("Register user", { tags: ["@api", "@userRegister"] }, () => {
  let user: User
  let registerUser: RegisterUser
  let env: Environment

  beforeEach(() => {
    user = new User()
    registerUser = new RegisterUser()
    env = new Environment()
  })

  it("Register user by API", () => {
    registerUser.registerUsingAPI(user, env)
  })
})
