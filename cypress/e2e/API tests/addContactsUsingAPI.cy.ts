import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"

describe("Add contact - API", { tags: ["@api", "@addContactsAPI"] }, () => {
  let user: User
  let env: Environment
  let apiRequest: APIRequests

  beforeEach(() => {
    user = new User()
    env = new Environment()
    apiRequest = new APIRequests()

    apiRequest.registerUser(user, env)
  })

  it("Should be able to add a contact using API", () => {
    apiRequest.addContact(user, env)
  })
})
