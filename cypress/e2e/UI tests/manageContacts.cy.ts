import LogInPage from "../../pages/loginPage"
import User from "../../models/user"
import AddContactPage from "../../pages/addContactPage"
import RegisterUser from "../../pages/registerUser"


describe("Add contact", () => {
  let logInPage: LogInPage
  let user: User
  let addContactPage: AddContactPage
  let registerUser: RegisterUser

  beforeEach(() => {
    logInPage = new LogInPage()
    user = new User()
    addContactPage = new AddContactPage()
    registerUser = new RegisterUser()

    registerUser.loadRegisterPage()
    registerUser.checkRegisterPage()
    registerUser.registerUser(user)
  })

  it("Should be able to add a valid contact", () => {
    addContactPage.loadAddContact()
    addContactPage.addContact(user)

    addContactPage.confirmAddContact(user)
  })
})
