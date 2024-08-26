import LogInPage from "../pages/loginPage"
import LogInAPI from "../api/logInAPI"
import "cypress-plugin-api"

describe("Log in", () => {

    let logInAPI: LogInAPI
    let logInPage: LogInPage

    beforeEach(() => {
        logInAPI = new LogInAPI()
        logInPage = new LogInPage()
      })

    it("Should be able to log in", () => {
        logInPage.loadLoginPage()
        logInPage.logIn()
    })

    it("Log in using API with valid account", () => {
    logInAPI.apiLogIn()
    })

})