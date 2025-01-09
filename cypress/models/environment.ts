export default class Environment {
  getEnvironment() {
    let env = Cypress.env("env")
    if (env == "dev") {
      return Cypress.config(
        "baseUrl",
        "https://thinking-tester-contact-list.herokuapp.com"
      )
    } else if (env == "staging") {
      return Cypress.config(
        "baseUrl",
        "https://thinking-tester-contact-list.herokuapp.com"
      )
    } else if (env == "prod") {
      return Cypress.config(
        "baseUrl",
        "https://thinking-tester-contact-list.herokuapp.com"
      )
    }
  }
}
