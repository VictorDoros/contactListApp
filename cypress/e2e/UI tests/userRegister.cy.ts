import User from "../../models/user"
import RegisterUser from "../../pages/registerUser"

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
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., email: Email is invalid, password: Path `password` is required."
      )
  })

  it("Should display the error when submiting with first name only", () => {
    registerUser.registerUser_onlyFirstName(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: lastName: Path `lastName` is required., email: Email is invalid, password: Path `password` is required."
      )
  })

  it("Should display the error when submiting with last name only", () => {
    registerUser.registerUser_onlyLastName(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: firstName: Path `firstName` is required., email: Email is invalid, password: Path `password` is required."
      )
  })

  it("Should display the error when submiting with first and last name only", () => {
    registerUser.registerUser_onlyFirstLastName(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: email: Email is invalid, password: Path `password` is required."
      )
  })

  it("Should display the error when submiting with email only", () => {
    registerUser.registerUser_onlyEmail(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., password: Path `password` is required."
      )
  })

  it("Should display the error when submiting with first name and email only", () => {
    registerUser.registerUser_onlyFirstNameEmail(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: lastName: Path `lastName` is required., password: Path `password` is required."
      )
  })

  it("Should display the error when submiting with last name and email only", () => {
    registerUser.registerUser_onlyLastNameEmail(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: firstName: Path `firstName` is required., password: Path `password` is required."
      )
  })

  it("Should display the error when submiting with first name, last name and email only", () => {
    registerUser.registerUser_onlyFirstLastNameEmail(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: password: Path `password` is required."
      )
  })

  it("Should display the error when submiting with password only", () => {
    registerUser.registerUser_onlyPassword(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., email: Email is invalid"
      )
  })

  it("Should display the error when submiting with first name and password only", () => {
    registerUser.registerUser_onlyFirstNamePassword(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: lastName: Path `lastName` is required., email: Email is invalid"
      )
  })

  it("Should display the error when submiting with last name and password only", () => {
    registerUser.registerUser_onlyLastNamePassword(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: firstName: Path `firstName` is required., email: Email is invalid"
      )
  })

  it("Should display the error when submiting with first name, last name and password only", () => {
    registerUser.registerUser_onlyFirstLastNamePassword(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: email: Email is invalid"
      )
  })

  it("Should display the error when submiting with email and password only", () => {
    registerUser.registerUser_onlyEmailPassword(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required."
      )
  })

  it("Should display the error when submiting with first name, email and password only", () => {
    registerUser.registerUser_onlyFirstNameEmailPassword(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: lastName: Path `lastName` is required."
      )
  })

  it("Should display the error when submiting with last name, email and password only", () => {
    registerUser.registerUser_onlyLastNameEmailPassword(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: firstName: Path `firstName` is required."
      )
  })

  it("Should display the error when submiting with invalid password", () => {
    registerUser.registerUser_invalidPassword(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        `User validation failed: password: Path \`password\` (\`${user.getInvalidPassword()}\`) is shorter than the minimum allowed length (7).`
      )
  })

  it("Should display the error when submiting with invalid email", () => {
    registerUser.registerUser_invalidEmail(user)
    registerUser
      .getError()
      .should("be.visible")
      .and(
        "have.text",
        "User validation failed: email: Email is invalid"
      )
  })
})
