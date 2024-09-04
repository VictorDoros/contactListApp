import User from "../models/user"
import Environment from "../models/environment"

export default class DeleteUserAPI {
  deleteUser(user: User, env: Environment) {
    return cy
      .step("Delete the user using the API")
      .api({
        method: "DELETE",
        url: env.getEnvironment() + "/users/me",
        headers: {
          Authorization: `Bearer ${user.getToken()}`,
        },
      })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  }
}
