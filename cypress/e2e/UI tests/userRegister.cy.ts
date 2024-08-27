import User from "../../models/user"
import RegisterUser from "../../pages/registerUser"

describe("Register user", () => {
  let user: User
  let registerUser: RegisterUser

  beforeEach(() => {
    user = new User()
    registerUser = new RegisterUser()
  })

  it("Should be able to register from UI", () => {
    registerUser.loadRegisterPage()
    registerUser.registerUser(user)
  })
})
