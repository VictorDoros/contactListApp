import User from "../models/user"
import "cypress-plugin-api"

export default class LogInAPI {
  apiLogIn() {
    cy.step("Login using the API")
      .api({
        method: "POST",
        url: "/users/login",
        body: {
          email: new User().getStaticEmail(),
          password: new User().getPassword(),
        },
      })
      .then((response) => {
        expect(response.status).eq(200)
      })
  }
}
