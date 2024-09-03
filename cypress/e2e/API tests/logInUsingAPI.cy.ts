import LogInLogOutPage from "../../pages/loginLogoutPage"

describe("Log in", { tags: ["@api", "@login"] }, () => {
  let loginLogoutPage: LogInLogOutPage

  beforeEach(() => {
    loginLogoutPage = new LogInLogOutPage()
  })

  it("Log in using API with valid account", () => {
    loginLogoutPage.logInUsingAPI()
  })
})
