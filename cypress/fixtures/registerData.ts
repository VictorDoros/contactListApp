import User from "../models/user"

export default {
  errorMessages: {
    noData:
      "User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., email: Email is invalid, password: Path `password` is required.",
    noLastNameEmailPassword:
      "User validation failed: lastName: Path `lastName` is required., email: Email is invalid, password: Path `password` is required.",
    noFirstNameEmailPassword:
      "User validation failed: firstName: Path `firstName` is required., email: Email is invalid, password: Path `password` is required.",
    noEmailPassword:
      "User validation failed: email: Email is invalid, password: Path `password` is required.",
    noFirstLastNamePassword:
      "User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., password: Path `password` is required.",
    noLastNamePassword:
      "User validation failed: lastName: Path `lastName` is required., password: Path `password` is required.",
    noFirstNamePassword:
      "User validation failed: firstName: Path `firstName` is required., password: Path `password` is required.",
    noPassword:
      "User validation failed: password: Path `password` is required.",
    noFirstLastNameEmail:
      "User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., email: Email is invalid",
    noLastNameEmail:
      "User validation failed: lastName: Path `lastName` is required., email: Email is invalid",
    noFirstNameEmail:
      "User validation failed: firstName: Path `firstName` is required., email: Email is invalid",
    invalid_noEmail: "User validation failed: email: Email is invalid",
    noFirstLastName:
      "User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required.",
    noLastName:
      "User validation failed: lastName: Path `lastName` is required.",
    noFirstName:
      "User validation failed: firstName: Path `firstName` is required.",
    invalidPassword: `User validation failed: password: Path \`password\` (\`${new User().getInvalidPassword()}\`) is shorter than the minimum allowed length (7).`,
    existingEmail: "Email address is already in use",
  },
}
