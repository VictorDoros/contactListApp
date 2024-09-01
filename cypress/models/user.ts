import { faker } from "@faker-js/faker"

export default class User {
  private firstName: string
  private firstNameSet: string
  private lastName: string
  private lastNameSet: string
  private email: string
  private emailSet: string
  private invalidEmail: string
  private staticEmail: string
  private password: string
  private passwordSet: string
  private invalidPassword: string
  private dateOfBirth: string
  private dateOfBirthSet: string
  private phone: string
  private phoneSet: string
  private streetAddress: string
  private streetAddressSet: string
  private city: string
  private citySet: string
  private postalCode: string
  private postalCodeSet: string
  private country: string
  private countrySet: string
  private token: string

  constructor() {
    this.firstName = faker.person.firstName()
    this.lastName = faker.person.lastName()
    this.email = faker.internet.email()
    this.invalidEmail = "email.com"
    this.staticEmail = "miha123@email.com"
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

    //
    this.firstNameSet = this.firstName
    this.lastNameSet = this.lastName
    this.emailSet = this.email
    this.passwordSet = this.password
    this.dateOfBirthSet = this.dateOfBirth
    this.phoneSet = this.phone
    this.streetAddressSet = this.streetAddress
    this.citySet = this.city
    this.postalCodeSet = this.postalCode
    this.countrySet = this.country
  }

  getFirstName() {
    return this.firstName
  }

  getFirstNameSet() {
    return this.firstNameSet
  }

  setFirstName(firstNameSet: string) {
    this.firstNameSet = firstNameSet
  }

  getLastName() {
    return this.lastName
  }

  getLastNameSet() {
    return this.lastNameSet
  }

  setLastName(lastNameSet: string) {
    this.lastNameSet = lastNameSet
  }

  getEmail() {
    return this.email.toLowerCase()
  }

  getEmailSet() {
    return this.emailSet
  }

  setEmail(emailSet: string) {
    this.emailSet = emailSet
  }

  getStaticEmail() {
    return this.staticEmail
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

  getPasswordSet() {
    return this.passwordSet
  }

  setPassword(passwordSet: string) {
    this.passwordSet = passwordSet
  }

  getDateOfBirth() {
    return this.dateOfBirth
  }

  getDateOfBirthSet() {
    return this.dateOfBirthSet
  }

  setDateOfBirth(dateOfBirthSet: string) {
    this.dateOfBirthSet = dateOfBirthSet
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

  getStreetAddressSet() {
    return this.streetAddressSet
  }

  setStreetAddress(streetAddressSet: string) {
    this.streetAddressSet = streetAddressSet
  }

  getCity() {
    return this.city
  }

  getCitySet() {
    return this.citySet
  }

  setCity(citySet: string) {
    this.citySet = citySet
  }

  getPostalCode() {
    return this.postalCode
  }

  getPostalCodeSet() {
    return this.postalCodeSet
  }

  setPostalCode(postalCodeSet: string) {
    this.postalCodeSet = postalCodeSet
  }

  getCountry() {
    return this.country
  }

  getCountrySet() {
    return this.countrySet
  }

  setCountry(countrySet: string) {
    this.countrySet = countrySet
  }

  getToken() {
    return this.token
  }

  setToken(token: string) {
    this.token = token
  }
}
