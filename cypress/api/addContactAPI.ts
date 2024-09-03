import User from "../models/user"
import Environment from "../support/environment"
export default class AddContactAPI {
  apiAddContact(user: User, env: Environment) {
    cy.step("Add a contatc using the API").api({
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
  }
}
