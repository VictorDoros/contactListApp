import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"

describe("Get contact using API", { tags: ["@api", "@getContactList"] }, () => {
  let user: User
  let env: Environment
  let apiRequest: APIRequests

  beforeEach(() => {
    user = new User()
    env = new Environment()
    apiRequest = new APIRequests()

    apiRequest.logInUsingAPI(user, env)
  })

  it("Get the contact list using API", () => {
    apiRequest.addContactUsingAPI(user, env)
    apiRequest.getContactListUsingAPI(user, env)
  })
})
