import User from "../models/user"
import "cypress-plugin-api"

export default class UserAPI {
  register(user: User) {
    return cy.step("Register using the API").api({
      method: "POST",
      url: "/users",
      body: {
        firstName: user.getFirstName(),
        lastName: user.getLastName(),
        email: user.getEmail(),
        password: user.getPassword(),
      },
    })
  }
}
