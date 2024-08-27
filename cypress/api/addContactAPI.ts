import User from "../models/user";
export default class AddContactAPI {
    apiAddContact(user: User){
        cy.api({
            method: "POST",
            url: "/contacts",
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
              Authorization: `Bearer ${user.getToken()}`
            }
          }) 
    }
}