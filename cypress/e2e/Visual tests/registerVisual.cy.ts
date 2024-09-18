import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import APIRequests from "../../pages/apiRequests"

describe(
  "Register user - Visual",
  { tags: ["@visual", "@userRegister", "@userRegisterVisual"] },
  () => {
    let user: User
    let env: Environment
    let registerUser: RegisterUser
    let apiRequest: APIRequests

    beforeEach(() => {
      user = new User()
      env = new Environment()
      registerUser = new RegisterUser()
      apiRequest = new APIRequests()

      registerUser.loadRegisterPage(env)
    })

    it("Should display the corresponding error when submitting the registration form with no data", () => {
      registerUser.registerUser_noData()

      registerUser.takeScreenshot_noData()
    })

    it("Should display the corresponding error when submitting the registration form with first name only", () => {
      registerUser.registerUser_firstName_visual(user)

      registerUser.takeScreenshot_firstName()
    })

    it("Should display the corresponding error when submitting the registration form with last name only", () => {
      registerUser.registerUser_lastName_Visual(user)

      registerUser.takeScreenshot_lastName()
    })

    it("Should display the corresponding error when submitting the registration form with first and last name only", () => {
      registerUser.registerUser_firstLastName_visual(user)

      registerUser.takeScreenshot_firstLastName()
    })

    it("Should display the corresponding error when submitting the registration form with email only", () => {
      registerUser.registerUser_email_visual(user)

      registerUser.takeScreenshot_email()
    })

    it("Should display the corresponding error when submitting the registration form with first name and email only", () => {
      registerUser.registerUser_firstNameEmail_visual(user)

      registerUser.takeScreenshot_firstNameEmail_visual()
    })

    it("Should display the corresponding error when submitting the registration form with last name and email only", () => {
      registerUser.registerUser_lastNameEmail_visual(user)

      registerUser.takeScreenshot_lastNameEmail_visual()
    })

    it("Should display the corresponding error when submitting the registration form with first name, last name and email only", () => {
      registerUser.registerUser_firstLastNameEmail_visual(user)

      registerUser.takeScreenshot_firstLastNameEmail_visual()
    })

    it("Should display the corresponding error when submitting the registration form with password only", () => {
      registerUser.registerUser_password(user)

      registerUser.takeScreenshot_password_visual()
    })

    it("Should display the corresponding error when submitting the registration form with first name and password only", () => {
      registerUser.registerUser_firstNamePassword_visual(user)

      registerUser.takeScreenshot_firstNamePassword_visual()
    })

    it("Should display the corresponding error when submitting the registration form with last name and password only", () => {
      registerUser.registerUser_lastNamePassword_visual(user)

      registerUser.takeScreenshot_lastNamePassword_visual()
    })

    it("Should display the corresponding error when submitting the registration form with first name, last name and password only", () => {
      registerUser.registerUser_firstLastNamePassword_visual(user)

      registerUser.takeScreenshot_firstLastNamePassword_visual()
    })

    it("Should display the corresponding error when submitting the registration form with email and password only", () => {
      registerUser.registerUser_emailPassword_visual(user)

      registerUser.takeScreenshot_emailPassword_visual()
    })

    it("Should display the corresponding error when submitting the registration form with first name, email and password only", () => {
      registerUser.registerUser_firstNameEmailPassword_visual(user)

      registerUser.takeScreenshot_firstNameEmailPassword_visual()
    })

    it("Should display the corresponding error when submitting the registration form with last name, email and password only", () => {
      registerUser.registerUser_lastNameEmailPassword_visual(user)

      registerUser.takeScreenshot_lastNameEmailPassword_visual()
    })

    it("Should display the corresponding error when submitting the registration form with invalid password", () => {
      registerUser.registerUser_invalidPassword_visual(user)

      registerUser.takeScreenshot_invalidPassword_visual()
    })

    it("Should display the corresponding error when submitting the registration form with invalid email", () => {
      registerUser.registerUser_invalidEmail_visual(user)

      registerUser.takeScreenshot_invalidEmail_visual()
    })

    it("Should display the corresponding error when submitting the registration form with existing email", () => {
      registerUser.registerUser_existingEmail_visual(user)

      registerUser.takeScreenshot_existingEmail_visual()
    })
  }
)
