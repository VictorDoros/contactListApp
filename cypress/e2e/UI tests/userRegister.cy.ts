import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import LogInLogOutPage from "../../pages/loginLogoutPage"
import registerData from "../../fixtures/registerData"
import basicData from "../../support/basicData"

describe(
  "Register user - UI",
  { tags: ["@ui", "@userRegister", "@userRegisterUI"] },
  () => {
    let user: User
    let env: Environment
    let registerUser: RegisterUser
    let loginLogoutPage: LogInLogOutPage

    beforeEach(() => {
      user = new User()
      env = new Environment()
      registerUser = new RegisterUser()
      loginLogoutPage = new LogInLogOutPage()

      registerUser.loadRegisterPage(env)
      registerUser.checkRegisterPage()
    })

    it("Should be able to register from UI", () => {
      registerUser.registerUser(user)
    })

    it("Should be able to cancel the registration", () => {
      registerUser.cancelRegister()

      loginLogoutPage.checkLoginPage()
    })

    it("Should display the corresponding error when submiting with no data", () => {
      registerUser.registerUser_noData()

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noData
      )
    })

    it("Should display the corresponding error when submitting with first name only", () => {
      registerUser.registerUser_firstName(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noLastNameEmailPassword
      )
    })

    it("Should display the corresponding error when submitting with last name only", () => {
      registerUser.registerUser_lastName(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstNameEmailPassword
      )
    })

    it("Should display the corresponding error when submitting with first and last name only", () => {
      registerUser.registerUser_firstLastName(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noEmailPassword
      )
    })

    it("Should display the corresponding error when submitting with email only", () => {
      registerUser.registerUser_email(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstLastNamePassword
      )
    })

    it("Should display the corresponding error when submitting with first name and email only", () => {
      registerUser.registerUser_firstNameEmail(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noLastNamePassword
      )
    })

    it("Should display the corresponding error when submitting with last name and email only", () => {
      registerUser.registerUser_lastNameEmail(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstNamePassword
      )
    })

    it("Should display the corresponding error when submitting with first name, last name and email only", () => {
      registerUser.registerUser_firstLastNameEmail(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noPassword
      )
    })

    it("Should display the corresponding error when submitting with password only", () => {
      registerUser.registerUser_password(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstLastNameEmail
      )
    })

    it("Should display the corresponding error when submitting with first name and password only", () => {
      registerUser.registerUser_firstNamePassword(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noLastNameEmail
      )
    })

    it("Should display the corresponding error when submitting with last name and password only", () => {
      registerUser.registerUser_lastNamePassword(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstNameEmail
      )
    })

    it("Should display the corresponding error when submitting with first name, last name and password only", () => {
      registerUser.registerUser_firstLastNamePassword(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.invalid_noEmail
      )
    })

    it("Should display the corresponding error when submitting with email and password only", () => {
      registerUser.registerUser_emailPassword(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstLastName
      )
    })

    it("Should display the corresponding error when submitting with first name, email and password only", () => {
      registerUser.registerUser_firstNameEmailPassword(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noLastName
      )
    })

    it("Should display the corresponding error when submitting with last name, email and password only", () => {
      registerUser.registerUser_lastNameEmailPassword(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstName
      )
    })

    it("Should display the corresponding error when submitting with invalid password", () => {
      registerUser.registerUser_invalidPassword(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.invalidPassword
      )
    })

    it("Should display the corresponding error when submitting with invalid email", () => {
      registerUser.registerUser_invalidEmail(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.invalid_noEmail
      )
    })

    it("Should display the corresponding error when submitting with existing email", () => {
      registerUser.registerUser_existingEmail(user)

      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.existingEmail
      )
    })
  }
)
