import LogInLogOutPage from "../../pages/loginLogoutPage"

describe("Log in", () => {
  let loginLogoutPage: LogInLogOutPage

  beforeEach(() => {
    loginLogoutPage = new LogInLogOutPage()
  })

  it("Log in using API with valid account", () => {
    loginLogoutPage.logInUsingAPI()
  })
})
