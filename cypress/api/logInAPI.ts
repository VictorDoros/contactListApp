import User from "../models/user"
import Environment from "../support/environment"
import "cypress-plugin-api"

export default class LogInAPI {
  apiLogIn(user: User, env: Environment) {
    cy.step("Login using the API")
      .api({
        method: "POST",
        url: env.getEnvironment() + "/users/login",
        body: {
          email: user.getStaticEmail(),
          password: user.getPassword(),
        },
      })
      .then((response) => {
        expect(response.status).eq(200)
      })
  }
}
