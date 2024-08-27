import User from "../models/user"
import UserAPI from "../api/userAPI"

describe("Register user", () => {
  let user: User
  let userAPI: UserAPI

  beforeEach(() => {
    user = new User()
    userAPI = new UserAPI()
  })

  it("Register user by API", () => {
    userAPI.register(user)
  })
})
