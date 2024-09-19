import User from "../models/user"
import Environment from "../models/environment"

export default class DeleteContactAPI {
  apiDeleteContact(user: User, env: Environment) {
    return cy
      .step("Delete the contact using the API")
      .api({
        method: "DELETE",
        url: `${env.getEnvironment()}/contacts/${user.getIDContact()}`,
        body: {
          firstName: user.getStaticFirstName(),
          lastName: user.getStaticLastName(),
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
