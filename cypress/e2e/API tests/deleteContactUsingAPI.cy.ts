import User from "../../models/user"
import Environment from "../../models/environment"
import APIRequests from "../../pages/apiRequests"

describe(
  "Delete contact - API",
  { tags: ["@api", "@deleteContact", "@deleteContactAPI"] },
  () => {
    let user: User
    let env: Environment
    let apiRequest: APIRequests

    before(() => {
      user = new User()
      env = new Environment()
      apiRequest = new APIRequests()

      apiRequest.logInUsingAPI(user, env)
    })

    beforeEach(() => {
      apiRequest.addStaticContactUsingAPI(user, env)
    })

    it("Should be able to delete the contact", () => {
      apiRequest.deleteContactUsingAPI(user, env)
    })
  }
)
