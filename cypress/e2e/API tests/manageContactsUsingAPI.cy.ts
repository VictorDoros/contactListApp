import User from "../../models/user"
import RegisterUser from "../../pages/registerUser"
import AddContactPage from "../../pages/addContactPage"
import Environment from "../../support/environment"

describe("Add contact using API", { tags: ["@api", "@manageContacts"] }, () => {
  let user: User
  let registerUser: RegisterUser
  let addContactPage: AddContactPage
  let env: Environment

  beforeEach(() => {
    user = new User()
    registerUser = new RegisterUser()
    addContactPage = new AddContactPage()
    env = new Environment()

    registerUser.registerUsingAPI(user, env)
  })

  it("Should be able to add a contact using API", () => {
    addContactPage.addContactUsingAPI(user, env)
  })
})
