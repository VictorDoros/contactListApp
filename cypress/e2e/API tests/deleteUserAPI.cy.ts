import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import AddContactPage from "../../pages/addContactPage"
import APIRequests from "../../pages/apiRequests"

describe("Delete user - API", { tags: ["@api", "@deleteUserAPI"] }, () => {
  let user: User
  let env: Environment
  let registerUser: RegisterUser
  let addContactPage: AddContactPage
  let apiRequest: APIRequests

  beforeEach(() => {
    user = new User()
    env = new Environment()
    registerUser = new RegisterUser()
    addContactPage = new AddContactPage()
    apiRequest = new APIRequests()

    apiRequest.registerUsingAPI(user, env)
  })

  it("Should be able to delete the user using API", () => {
    apiRequest.deleteUserUsingAPI(user, env)
  })
})
