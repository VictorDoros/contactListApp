import LogInPage from "../pages/loginPage"

describe("Log in", () => {
  let logInPage: LogInPage

  beforeEach(() => {
    logInPage = new LogInPage()
  })

  it("Should be able to log in", () => {
    logInPage.loadLoginPage()
    logInPage.logIn()
  })
})
