import User from "../models/user"
import UserAPI from "../api/userAPI"
import RegisterUser from "../pages/registerUser"

describe("User", () => {
  let user: User
  let userAPI: UserAPI
  let registerUser: RegisterUser

  beforeEach(() => {
    user = new User()
    userAPI = new UserAPI()
    registerUser = new RegisterUser()
  })

  it("Should be able to register from UI", () => {
    registerUser.loadRegisterPage()
    registerUser.registerUser(user)
  })

  it("Register user by API", () => {
    userAPI.register(user)
  })
})
