import User from "../models/user"
import Environment from "../models/environment"

export default class GetUser {
  getUser(user: User, env: Environment) {
    return cy
      .step("Get the user's profile")
      .api({
        method: "GET",
        url: env.getEnvironment() + "/users/me",
        headers: {
          Authorization: `Bearer ${user.getToken()}`,
        },
      })
      .then((response) => {
        expect(response.status).eq(200)
      })
  }
}
