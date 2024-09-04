import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import AddContactPage from "../../pages/addContactPage"
import APIRequests from "../../pages/apiRequests"

describe("Add contact using API", { tags: ["@api", "@addContactsAPI"] }, () => {
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

  it("Should be able to add a contact using API", () => {
    apiRequest.addContactUsingAPI(user, env)
  })
})
