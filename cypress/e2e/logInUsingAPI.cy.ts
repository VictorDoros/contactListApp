import LogInAPI from "../api/logInAPI"

describe("Log in", () => {
  let logInAPI: LogInAPI

  beforeEach(() => {
    logInAPI = new LogInAPI()
  })

  it("Log in using API with valid account", () => {
    logInAPI.apiLogIn()
  })
})
