export class User {
  constructor(email, firstname, lastname, birthdate) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
  }

  static isValidEmail = () => {
    return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(this.email);
  };

  static isValidPassword = () => {
    return new RegExp(
      /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/
    ).test(this.password);
  };

  static isValidBirthDate = () => {
    let dateMinus13 = new Date();
    dateMinus13.setFullYear(dateMinus13.getFullYear() - 13);

    return this.birthDate.getTime() < dateMinus13.getTime();
  };

  static isValidFirstanme = () => {
    return new RegExp(/^[a-z ,.'-]+$/i).test(this.firstname);
  };

  static isValidLastname = () => {
    return new RegExp(/^[a-z ,.'-]+$/i).test(this.lastname);
  };

  isValid = () => {
    if (!isValidEmail()) return "Invalid email";

    if (!isValidPassword()) return "Invalid password";

    if (!isValidBirthDate()) return "Too young";

    if (!isValidFirstanme()) return "Too low char";

    if (!isValidLastname()) return "Too low char";

    return true;
  };
}
