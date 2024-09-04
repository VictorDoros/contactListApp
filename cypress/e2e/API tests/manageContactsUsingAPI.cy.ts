import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import AddContactPage from "../../pages/addContactPage"

describe("Add contact using API", { tags: ["@api", "@manageContacts"] }, () => {
  let user: User
  let env: Environment
  let registerUser: RegisterUser
  let addContactPage: AddContactPage

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
