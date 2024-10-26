import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"

describe("Get contact - API", { tags: ["@api", "@getContactListAPI"] }, () => {
  let user: User
  let env: Environment
  let apiRequest: APIRequests

  beforeEach(() => {
    user = new User()
    env = new Environment()
    apiRequest = new APIRequests()

    apiRequest.loginUser(user, env)
  })

  it("Get the contact list using API", () => {
    apiRequest.addContact(user, env)

    apiRequest.getContactList(user, env)
  })
})
