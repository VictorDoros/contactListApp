export default class Environment {
  getEnvironment() {
    let env = Cypress.env("env")
    if (env == "dev") {
      return "https://thinking-tester-contact-list.herokuapp.com"
    } else if (env == "staging") {
      return "https://thinking-tester-contact-list.herokuapp.com"
    } else if (env == "prod") {
      return "https://thinking-tester-contact-list.herokuapp.com"
    }
  }
}
