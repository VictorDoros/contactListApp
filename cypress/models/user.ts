import { faker } from "@faker-js/faker"

export default class User {
  private firstName: string
  private lastName: string
  private email: string
  private password: string
  private dateOfBirth: string
  private phone: string
  private streetAddress: string
  private city: string
  private postalCode: string
  private country: string
  private token: string

  constructor() {
    this.firstName = faker.person.firstName()
    this.lastName = faker.person.lastName()
    this.email = faker.internet.email()
    this.password = "Test1234"
    this.dateOfBirth = '1970-12-12'
    this.phone = faker.string.octal({length: {min:7, max: 12}, prefix: "00"})
    this.streetAddress = faker.location.street()
    this.city = faker.location.city()
    this.postalCode = faker.location.zipCode()
    this.country = faker.location.country()
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

  getDateOfBirth() {
    return this.dateOfBirth
  }

  getPhone() {
    return this.phone
  }

  getStreetAddress() {
    return this.streetAddress
  }

  getCity() {
    return this.city
  }

  getPostalCode() {
    return this.postalCode
  }

  getCountry() {
    return this.country
  }

  getToken() {
    return this.token
  }

  setToken(token : string){
    this.token = token
  }
}
