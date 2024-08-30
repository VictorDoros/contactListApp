import LogInPage from "../../pages/loginPage"
import User from "../../models/user"
import AddContactPage from "../../pages/addContactPage"
import "cypress-plugin-api"
import RegisterUser from "../../pages/registerUser"
import 'cypress-map'

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

  it.skip("Should be able to add a valid contact", () => {
    addContactPage.loadAddContact()
    addContactPage.addContact(user)

    addContactPage.checkError().should("not.exist")
  })

  it("Should be able to add a valid contact", () => {
    // cy.get("tbody td").then((tbody) => {
    //   expect(tbody.find.length).to.eq(0)
    // })
    addContactPage.loadAddContact()
    addContactPage.addContact(user)

    addContactPage.checkError().should("not.exist")
    cy.get("table tr").then((tbody) => {
      expect(tbody.find.length).to.eq(1)
    })
    
    let array = []
    cy.get("table tr td").then((rows) => {
      expect(rows.length).to.eq(8)
    })

    cy.get('table tr').find("td").not("[hidden='true']").map('innerText').print()


  })
    
  })

