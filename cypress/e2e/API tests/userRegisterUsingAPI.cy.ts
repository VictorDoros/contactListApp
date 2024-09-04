import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"

describe("Register user", { tags: ["@api", "@userRegister"] }, () => {
  let user: User
  let env: Environment
  let registerUser: RegisterUser

  beforeEach(() => {
    user = new User()
    registerUser = new RegisterUser()
    env = new Environment()
  })

  it("Register user by API", () => {
    registerUser.registerUsingAPI(user, env)
  })
})
