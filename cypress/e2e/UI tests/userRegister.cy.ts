import User from "../../models/user"
import RegisterUser from "../../pages/registerUser"
import registerData from "../../fixtures/registerData.cy"
import basicData from "../../support/basicData"

describe("Register user", () => {
  let user: User
  let registerUser: RegisterUser

  beforeEach(() => {
    user = new User()
    registerUser = new RegisterUser()
    registerUser.loadRegisterPage()
  })

  it("Should be able to register from UI", () => {
    registerUser.registerUser(user)
  })

  it("Should display the error when submiting with no data", () => {
    registerUser.registerUser_noData()
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noData
    )
  })

  it("Should display the error when submiting with first name only", () => {
    registerUser.registerUser_onlyFirstName(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noLastNameEmailPassword
    )
  })

  it("Should display the error when submiting with last name only", () => {
    registerUser.registerUser_onlyLastName(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noFirstNameEmailPassword
    )
  })

  it("Should display the error when submiting with first and last name only", () => {
    registerUser.registerUser_onlyFirstLastName(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noEmailPassword
    )
  })

  it("Should display the error when submiting with email only", () => {
    registerUser.registerUser_onlyEmail(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noFirstLastNamePassword
    )
  })

  it("Should display the error when submiting with first name and email only", () => {
    registerUser.registerUser_onlyFirstNameEmail(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noLastNamePassword
    )
  })

  it("Should display the error when submiting with last name and email only", () => {
    registerUser.registerUser_onlyLastNameEmail(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noFirstNamePassword
    )
  })

  it("Should display the error when submiting with first name, last name and email only", () => {
    registerUser.registerUser_onlyFirstLastNameEmail(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noPassword
    )
  })

  it("Should display the error when submiting with password only", () => {
    registerUser.registerUser_onlyPassword(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noFirstLastNameEmail
    )
  })

  it("Should display the error when submiting with first name and password only", () => {
    registerUser.registerUser_onlyFirstNamePassword(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noLastNameEmail
    )
  })

  it("Should display the error when submiting with last name and password only", () => {
    registerUser.registerUser_onlyLastNamePassword(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noFirstNameEmail
    )
  })

  it("Should display the error when submiting with first name, last name and password only", () => {
    registerUser.registerUser_onlyFirstLastNamePassword(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.invalid_noEmail
    )
  })

  it("Should display the error when submiting with email and password only", () => {
    registerUser.registerUser_onlyEmailPassword(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noFirstLastName
    )
  })

  it("Should display the error when submiting with first name, email and password only", () => {
    registerUser.registerUser_onlyFirstNameEmailPassword(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noLastName
    )
  })

  it("Should display the error when submiting with last name, email and password only", () => {
    registerUser.registerUser_onlyLastNameEmailPassword(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.noFirstName
    )
  })

  it("Should display the error when submiting with invalid password", () => {
    registerUser.registerUser_invalidPassword(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.invalidPassword
    )
  })

  it("Should display the error when submiting with invalid email", () => {
    registerUser.registerUser_invalidEmail(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.invalid_noEmail
    )
  })

  it("Should display the error when submiting with existing email", () => {
    registerUser.registerUser_existingEmail(user)
    registerUser.getError(
      basicData.stateData.beVisible,
      registerData.errorMessages.existingEmail
    )
  })
})
