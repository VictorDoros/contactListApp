import User from "../models/user"
import Environment from "../models/environment"
import "cypress-plugin-api"

export default class UserAPI {
  register(user: User, env: Environment) {
    return cy
      .step("Register using the API")
      .api({
        method: "POST",
        url: `${env.getEnvironment()}/users`,
        body: {
          firstName: user.getFirstName(),
          lastName: user.getLastName(),
          email: user.getEmail(),
          password: user.getPassword(),
        },
      })
      .then((response) => {
        expect(response.status).to.eq(201)
      })
  }
}
