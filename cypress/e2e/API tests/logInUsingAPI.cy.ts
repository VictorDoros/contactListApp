import LogInPage from "../../pages/loginPage"

describe("Log in", () => {
  let loginPage: LogInPage

  beforeEach(() => {
    loginPage = new LogInPage()
  })

  it("Log in using API with valid account", () => {
    loginPage.logInUsingAPI()
  })
})
