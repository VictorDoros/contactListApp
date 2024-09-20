import User from "../../models/user"
import Environment from "../../models/environment"
import LogInLogOutPage from "../../pages/loginLogoutPage"
import AddContactPage from "../../pages/addContactPage"

describe(
  "Log in - Visual",
  { tags: ["@visual", "@manageContacts", "@manageContactsVisual"] },
  () => {
    let user: User
    let env: Environment
    let loginLogoutPage: LogInLogOutPage
    let addContactPage: AddContactPage

    beforeEach(() => {
      user = new User()
      env = new Environment()
      loginLogoutPage = new LogInLogOutPage()
      addContactPage = new AddContactPage()

      loginLogoutPage.loadLoginPage(env)
      loginLogoutPage.logInVisual(user)
      loginLogoutPage.submitLogIn()
    })
    it("Should be able to add a new contact", () => {
      addContactPage.loadAddContact()

      addContactPage.takeScreenshot_beforeFillInFields()

      addContactPage.addContactVisual(user)

      addContactPage.takeScreenshot_afterFillInFields()

      addContactPage.getSubmit()

      addContactPage.takeScreenshot_newAddedContact()
    })

    it("Should be able to edit the new contact", () => {
      addContactPage.loadContactDetailsVisual_newContact(user)

      addContactPage.takeScreenshot_contactDetails()

      addContactPage.loadEditContact()

      addContactPage.takeScreenshot_editContact()

      addContactPage.editContactVisual(user)

      addContactPage.getSubmit()

      addContactPage.getReturn()

      addContactPage.takeScreenshot_editedContact()
    })

    it("Should be able to delete the contact", () => {
      addContactPage.loadContactDetailsVisual_editedContact(user)

      addContactPage.getDelete()

      addContactPage.takeScreenshot_deletedContact()
    })
  }
)
