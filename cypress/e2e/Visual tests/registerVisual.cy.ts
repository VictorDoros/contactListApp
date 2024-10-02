import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import registerSel from "../../selectors/register.sel"
import basicData from "../../support/basicData"

describe(
  "Register user - Visual",
  { tags: ["@visual", "@userRegister", "@userRegisterVisual"] },
  () => {
    let user: User
    let env: Environment
    let registerUser: RegisterUser

    beforeEach(() => {
      user = new User()
      env = new Environment()
      registerUser = new RegisterUser()

      cy.step("Reach the page and click on [Sign in] button")
      registerUser.loadRegisterPage(env)
    })

    it("Should display the corresponding error when submitting the registration form with no data", () => {
      cy.step("Click on [Submit] button with no data filled in")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with no data"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with no data"
      )
    })

    it("Should display the corresponding error when submitting the registration form with first name only", () => {
      cy.step("Fill in the first name field")
      registerUser.registerUser_firstName_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with first name only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with first name only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with last name only", () => {
      cy.step("Fill in the last name field")
      registerUser.registerUser_lastName_Visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with last name only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with last name only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with first and last name only", () => {
      cy.step("Fill in the first and last name fields")
      registerUser.registerUser_firstLastName_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with first and last name only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with first and last name only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with email only", () => {
      cy.step("Fill in the email field")
      registerUser.registerUser_email_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with email only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with email only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with first name and email only", () => {
      cy.step("Fill in the first name and email fields")
      registerUser.registerUser_firstNameEmail_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with first name and email only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with first name and email only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with last name and email only", () => {
      cy.step("Fill in the last name and email fields")
      registerUser.registerUser_lastNameEmail_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with last name and email only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with last name and email only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with first name, last name and email only", () => {
      cy.step("Fill in the first name, last name and email fields")
      registerUser.registerUser_firstLastNameEmail_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with first name, last name and email only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with first name, last name and email only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with password only", () => {
      cy.step("Fill in the password field")
      registerUser.registerUser_password(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with password only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with password only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with first name and password only", () => {
      cy.step("Fill in the first name and password fields")
      registerUser.registerUser_firstNamePassword_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with first name and password only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with first name and password only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with last name and password only", () => {
      cy.step("Fill in the last name and password fields")
      registerUser.registerUser_lastNamePassword_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with last name and password only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with last name and password only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with first name, last name and password only", () => {
      cy.step("Fill in the first name, last name and password fields")
      registerUser.registerUser_firstLastNamePassword_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with first name, last name and password only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with first name, last name and password only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with email and password only", () => {
      cy.step("Fill in the email and password fields")
      registerUser.registerUser_emailPassword_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with email and password only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with email and password only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with first name, email and password only", () => {
      cy.step("Fill in the first name, email and password fields")
      registerUser.registerUser_firstNameEmailPassword_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with first name, email and password only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with first name, email and password only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with last name, email and password only", () => {
      cy.step("Fill in the last name, email and password fields")
      registerUser.registerUser_lastNameEmailPassword_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with last name, email and password only"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with last name, email and password only"
      )
    })

    it("Should display the corresponding error when submitting the registration form with invalid password", () => {
      cy.step("Fill in the fields, having an invalid password")
      registerUser.registerUser_invalidPassword_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with invalid password"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with invalid password"
      )
    })

    it("Should display the corresponding error when submitting the registration form with invalid email", () => {
      cy.step("Fill in the fields, having an invalid email")
      registerUser.registerUser_invalidEmail_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form with invalid email"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register with invalid email"
      )
    })

    it("Should display the corresponding error when submitting the registration form with existing email", () => {
      cy.step("Fill in the fields, having an existing email")
      registerUser.registerUser_existingEmail_visual(user)

      cy.step("Click on [Submit] button")
      registerUser.submitRegistration()

      cy.step(
        "Wait until the error is displayed and take the screenshot with the error after submitting the registration form  with existing email"
      )
      cy.takeScreenshot(
        registerSel.error,
        basicData.stateData.beVisible,
        "Register  with existing email"
      )
    })
  }
)
