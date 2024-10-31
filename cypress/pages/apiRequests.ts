import User from "../models/user"
import Environment from "../models/environment"
import AddContactAPI from "../api/addContactAPI"
import LogInAPI from "../api/logInAPI"
import LogOutAPI from "../api/logOutAPI"
import UserAPI from "../api/registerAPI"
import GetUser from "../api/getUserAPI"
import GetContactAPI from "../api/getContactAPI"
import logInData from "../fixtures/logInData"
import UpdateUserAPI from "../api/updateUserAPI"
import DeleteUserAPI from "../api/deleteUserAPI"
import DeleteContactAPI from "../api/deleteContactAPI"

export default class APIRequests {
  registerUser(user: User, env: Environment) {
    return new UserAPI().register(user, env).then((response) => {
      user.setToken(response.body.token)
    })
  }

  loginUser(user: User, env: Environment) {
    return new LogInAPI().apiLogIn(user, env).then((response) => {
      user.setToken(response.body.token)
    })
  }

  logoutUser(user: User, env: Environment) {
    return new LogOutAPI().apiLogOut(user, env)
  }

  addContact(user: User, env: Environment) {
    return new AddContactAPI().apiAddContact(user, env)
  }

  addStaticContact(user: User, env: Environment) {
    return new AddContactAPI()
      .apiAddStaticContact(user, env)
      .then((response) => {
        user.setIDContact(response.body._id)
      })
  }

  getUser(user: User, env: Environment) {
    return new GetUser().getUser(user, env).then((response) => {
      expect(response.body.firstName).to.eq(logInData.firstName)
      expect(response.body.lastName).to.eq(logInData.lastName)
      expect(response.body.email).to.eq(user.getStaticEmail())
    })
  }

  getUserAfterUpdate(user: User, env: Environment) {
    return new GetUser().getUser(user, env).then((response) => {
      expect(response.body.firstName).to.eq(`${user.getFirstName()}_updated`)
      expect(response.body.lastName).to.eq(`${user.getLastName()}_updated`)
    })
  }

  getContactList(user: User, env: Environment) {
    return new GetContactAPI().getContactList(user, env).then((response) => {
      expect(response.body).to.be.an("array").and.not.empty
    })
  }

  updateUser(user: User, env: Environment) {
    new UpdateUserAPI().updateUser(user, env)
  }

  deleteUser(user: User, env: Environment) {
    new DeleteUserAPI().deleteUser(user, env)
  }

  deleteContact(user: User, env: Environment) {
    new DeleteContactAPI().apiDeleteContact(user, env)
  }
}
