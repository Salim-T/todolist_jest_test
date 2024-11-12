class User {
  constructor(email, firstname, lastname, password, birthdate) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.birthdate = birthdate;
  }

  isValidEmail = () => {
    return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(this.email);
  };

  isValidPassword = () => {
    return new RegExp(
      "^(?=.[a-z])(?=.[A-Z])(?=.d)(?=.[@$!%?&])[A-Za-zd@$!%?&]{8,10}$"
    ).test(this.password);
  };

  isValidBirthDate = () => {
    let dateMinus13 = new Date();
    dateMinus13.setFullYear(dateMinus13.getFullYear() - 13);

    return this.birthDate.getTime() < dateMinus13.getTime();
  };

  isValidFirstanme = () => {
    return new RegExp(/^[a-z ,.'-]+$/i).test(this.firstname);
  };

  isValidLastname = () => {
    return new RegExp(/^[a-z ,.'-]+$/i).test(this.lastname);
  };

  isValid = () => {
    console.log("HRAZIERIZARIZAJERO", this.password);
    if (!this.isValidEmail()) return "Invalid email";
    if (!this.isValidFirstanme()) return "Too low char";

    if (!this.isValidPassword()) return "Invalid password";

    if (!this.isValidBirthDate()) return "Too young";

    if (!this.isValidLastname()) return "Too low char";

    return true;
  };
}

module.exports = User;
