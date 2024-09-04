import User from "../models/user"
import Environment from "../models/environment"

export default class UpdateUserAPI {
  updateUser(user: User, env: Environment) {
    return cy
      .step("Update the user using API")
      .api({
        method: "PATCH",
        url: env.getEnvironment() + "/users/me",
        body: {
          firstName: `${user.getFirstName()}_updated`,
          lastName: `${user.getLastName()}_updated`,
        },
        headers: {
          Authorization: `Bearer ${user.getToken()}`,
        },
      })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  }
}
