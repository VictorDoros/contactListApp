import { faker } from "@faker-js/faker"

export default class User {
  private firstName: string
  private staticFirstname: string
  private lastName: string
  private staticLastName: string
  private email: string
  private invalidEmail: string
  private staticEmail: string
  private staticSecondEmail: string
  private password: string
  private invalidPassword: string
  private dateOfBirth: string
  private phone: string
  private phoneSet: string
  private streetAddress: string
  private city: string
  private postalCode: string
  private country: string
  private token: string

  private idContact: string

  constructor() {
    this.firstName = faker.person.firstName()
    this.staticFirstname = "Roberto"
    this.lastName = faker.person.lastName()
    this.staticLastName = "Carlos"
    this.email = faker.internet.email()
    this.invalidEmail = "email.com"
    this.staticEmail = "miha123@email.com"
    this.staticSecondEmail = "miha321@email.com"
    this.password = "Test1234"
    this.invalidPassword = "123"
    this.dateOfBirth = faker.date
      .between({ from: "1960/01/01", to: "2006/12/31" })
      .toLocaleDateString("en-CA")
    this.phone = faker.string.octal({
      length: { min: 7, max: 12 },
      prefix: "00",
    })
    this.streetAddress = faker.location.street()
    this.city = faker.location.city().trim()
    this.postalCode = faker.location.zipCode().trim()
    this.country = faker.location.country()
  }

  getFirstName() {
    return this.firstName
  }

  getStaticFirstName() {
    return this.staticFirstname
  }

  getLastName() {
    return this.lastName
  }

  getStaticLastName() {
    return this.staticLastName
  }

  getEmail() {
    return this.email.toLowerCase()
  }

  getStaticEmail() {
    return this.staticEmail
  }

  getStaticSecondEmail() {
    return this.staticSecondEmail
  }

  getInvalidEmail() {
    return this.invalidEmail
  }

  getPassword() {
    return this.password
  }

  getInvalidPassword() {
    return this.invalidPassword
  }

  getDateOfBirth() {
    return this.dateOfBirth
  }

  getPhone() {
    return this.phone
  }

  getPhoneSet() {
    return this.phoneSet
  }

  setPhone(phoneSet: string) {
    this.phoneSet = phoneSet
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

  setToken(token: string) {
    this.token = token
  }

  getIDContact() {
    return this.idContact
  }

  setIDContact(idContact: string) {
    this.idContact = idContact
  }
}
