import User from "../../models/user"
import RegisterUser from "../../pages/registerUser"
import AddContactPage from "../../pages/addContactPage"

describe("Add contact using API", { tags: ["@api", "@manageContacts"] }, () => {
  let user: User
  let registerUser: RegisterUser
  let addContactPage: AddContactPage

  beforeEach(() => {
    user = new User()
    registerUser = new RegisterUser()
    addContactPage = new AddContactPage()

    registerUser.registerUsingAPI(user)
  })

  it("Should be able to add a contact using API", () => {
    addContactPage.addContactUsingAPI(user)
  })
})
