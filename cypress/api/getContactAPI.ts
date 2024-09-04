import User from "../models/user"
import Environment from "../models/environment"

export default class GetContactAPI {
    getContactList(user: User, env: Environment) {
      return cy.step("Get the contact list using the API").api({
        method: "GET",
        url: env.getEnvironment() + "/contacts",
        headers: {
          Authorization: `Bearer ${user.getToken()}`,
        },
      })
    }
  }