import User from "../models/user"
import Environment from "../models/environment"

export default class LogOutAPI {
  apiLogOut(user: User, env: Environment) {
    cy.step("Logout using the API")
      .api({
        method: "POST",
        url: `${env.getEnvironment()}/users/logout`,
        headers: {
          Authorization: `Bearer ${user.getToken()}`,
        },
      })
      .then((response) => {
        expect(response.status).eq(200)
      })
  }
}
