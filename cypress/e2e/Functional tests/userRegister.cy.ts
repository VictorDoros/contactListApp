import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import LogInLogOutPage from "../../pages/loginLogoutPage"
import registerData from "../../fixtures/registerData"
import basicData from "../../support/basicData"

describe(
  "Register user - Functional",
  { tags: ["@functional", "@userRegister", "@userRegisterFunctional"] },
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

      cy.step("Reach the page and click on [Sign in] button")
      registerUser.loadRegisterPage(env)

      cy.step("Confirm that user has been redirected to the registration page")
      registerUser.checkRegisterPage()
    })

    it("Should be able to register from UI", () => {
      cy.step("Fill in the fields in order to register a new user")
      registerUser.registerUser(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Confirm that the user has successfully registered and the user's page is displayed"
      )
      registerUser.checkContactListPage()
    })

    it("Should be able to cancel the registration", () => {
      cy.step("Cancel the registration")
      registerUser.cancelRegister()

      cy.step("Confirm that the 'Login' page has been loaded")
      loginLogoutPage.checkLoginPage()
    })

    it("Should display the corresponding error when submiting with no data", () => {
      cy.step("Click on [Submit] button with no data filled in")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with no data"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noData
      )
    })

    it("Should display the corresponding error when submitting with first name only", () => {
      cy.step("Fill in the first name field")
      registerUser.registerUser_firstName(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with first name only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noLastNameEmailPassword
      )
    })

    it("Should display the corresponding error when submitting with last name only", () => {
      cy.step("Fill in the last name field")
      registerUser.registerUser_lastName(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with last name only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstNameEmailPassword
      )
    })

    it("Should display the corresponding error when submitting with first and last name only", () => {
      cy.step("Fill in the first and last name fields")
      registerUser.registerUser_firstLastName(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with first and last name only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noEmailPassword
      )
    })

    it("Should display the corresponding error when submitting with email only", () => {
      cy.step("Fill in the email field")
      registerUser.registerUser_email(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with email only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstLastNamePassword
      )
    })

    it("Should display the corresponding error when submitting with first name and email only", () => {
      cy.step("Fill in the first name and email fields")
      registerUser.registerUser_firstNameEmail(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with first name and email only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noLastNamePassword
      )
    })

    it("Should display the corresponding error when submitting with last name and email only", () => {
      cy.step("Fill in the last name and email fields")
      registerUser.registerUser_lastNameEmail(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with last name and email only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstNamePassword
      )
    })

    it("Should display the corresponding error when submitting with first name, last name and email only", () => {
      cy.step("Fill in the first name, last name and email fields")
      registerUser.registerUser_firstLastNameEmail(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with first name, last name and email only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noPassword
      )
    })

    it("Should display the corresponding error when submitting with password only", () => {
      cy.step("Fill in the password field")
      registerUser.registerUser_password(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with password only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstLastNameEmail
      )
    })

    it("Should display the corresponding error when submitting with first name and password only", () => {
      cy.step("Fill in the first name and password fields")
      registerUser.registerUser_firstNamePassword(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with first name and password only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noLastNameEmail
      )
    })

    it("Should display the corresponding error when submitting with last name and password only", () => {
      cy.step("Fill in the last name and password fields")
      registerUser.registerUser_lastNamePassword(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with last name and password only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstNameEmail
      )
    })

    it("Should display the corresponding error when submitting with first name, last name and password only", () => {
      cy.step("Fill in the first name, last name and password fields")
      registerUser.registerUser_firstLastNamePassword(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with first name, last name and password only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.invalid_noEmail
      )
    })

    it("Should display the corresponding error when submitting with email and password only", () => {
      cy.step("Fill in the email and password fields")
      registerUser.registerUser_emailPassword(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with email and password only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstLastName
      )
    })

    it("Should display the corresponding error when submitting with first name, email and password only", () => {
      cy.step("Fill in the first name, email and password fields")
      registerUser.registerUser_firstNameEmailPassword(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with first name, email and password only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noLastName
      )
    })

    it("Should display the corresponding error when submitting with last name, email and password only", () => {
      cy.step("Fill in the last name, email and password fields")
      registerUser.registerUser_lastNameEmailPassword(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with last name, email and password only"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.noFirstName
      )
    })

    it("Should display the corresponding error when submitting with invalid password", () => {
      cy.step("Fill in the fields, having an invalid password")
      registerUser.registerUser_invalidPassword(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with invalid password"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.invalidPassword
      )
    })

    it("Should display the corresponding error when submitting with invalid email", () => {
      cy.step("Fill in the fields, having an invalid email")
      registerUser.registerUser_invalidEmail(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with invalid email"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.invalid_noEmail
      )
    })

    it("Should display the corresponding error when submitting with existing email", () => {
      cy.step("Fill in the fields, having an existing email")
      registerUser.registerUser_existingEmail(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Check the corresponding error when submitting the registration form with existing email"
      )
      registerUser.getError(
        basicData.stateData.beVisible,
        registerData.errorMessages.existingEmail
      )
    })
  }
)
