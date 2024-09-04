import User from "../models/user"
import Environment from "../models/environment"

export default class AddContactAPI {
  apiAddContact(user: User, env: Environment) {
    return cy
      .step("Add a contact using the API")
      .api({
        method: "POST",
        url: env.getEnvironment() + "/contacts",
        body: {
          firstName: user.getFirstName(),
          lastName: user.getLastName(),
          birthdate: user.getDateOfBirth(),
          email: user.getEmail(),
          phone: user.getPhone(),
          street1: user.getStreetAddress(),
          city: user.getCity(),
          postalCode: user.getPostalCode(),
          country: user.getCountry(),
        },
        headers: {
          Authorization: `Bearer ${user.getToken()}`,
        },
      })
      .then((response) => {
        expect(response.status).to.eq(201)
      })
  }
}
