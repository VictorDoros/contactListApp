import User from "../models/user"
import Environment from "../models/environment"
import AddContactAPI from "../api/addContactAPI"
import LogInAPI from "../api/logInAPI"
import LogOutAPI from "../api/logOutAPI"
import UserAPI from "../api/registerAPI"
import GetUser from "../api/getUserAPI"
import GetContactAPI from "../api/getContactAPI"
import logInData from "../fixtures/logInData"
import UpdateUserAPI from "../api/updateUserUsingAPI"
import "cypress-map"

export default class APIRequests {
  registerUsingAPI(user: User, env: Environment) {
    return new UserAPI().register(user, env).then((response) => {
      user.setToken(response.body.token)
    })
  }

  logInUsingAPI(user: User, env: Environment) {
    return new LogInAPI().apiLogIn(user, env).then((response) => {
      user.setToken(response.body.token)
    })
  }

  logOutUsingAPI(user: User, env: Environment) {
    return new LogOutAPI().apiLogOut(user, env)
  }

  addContactUsingAPI(user: User, env: Environment) {
    return new AddContactAPI().apiAddContact(user, env)
  }

  getUserUsingAPI(user: User, env: Environment) {
    return new GetUser().getUser(user, env).then((response) => {
      expect(response.body.firstName).to.eq(logInData.firstName)
      expect(response.body.lastName).to.eq(logInData.lastName)
      expect(response.body.email).to.eq(user.getStaticEmail())
    })
  }

  getUserAfterUpdateUsingAPI(user: User, env: Environment) {
    return new GetUser().getUser(user, env).then((response) => {
      expect(response.body.firstName).to.eq(`${user.getFirstName()}_updated`)
      expect(response.body.lastName).to.eq(`${user.getLastName()}_updated`)
    })
  }

  getContactListUsingAPI(user: User, env: Environment) {
    return new GetContactAPI().getContactList(user, env).then((response) => {
      expect(response.body).to.be.an("array").and.not.empty
    })
  }

  updateUserUsingAPI(user: User, env: Environment) {
    new UpdateUserAPI().updateUser(user, env)
  }
}
