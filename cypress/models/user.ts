import { faker } from "@faker-js/faker"

export default class User {
  private firstName: string
  private lastName: string
  private email: string
  private password: string

  constructor() {
    this.firstName = faker.person.firstName()
    this.lastName = faker.person.lastName()
    this.email = faker.internet.email()
    this.password = "Test1234"
  }

  getFirstName() {
    return this.firstName
  }

  getLastName() {
    return this.lastName
  }

  getEmail() {
    return this.email
  }

  getPassword() {
    return this.password
  }
}
