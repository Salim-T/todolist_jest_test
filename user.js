const ToDoList = require("./todolist");

class User {
  constructor(email, firstname, lastname, password, birthdate) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.birthdate = birthdate;
    this.toDoList = null;
  }

  isValidEmail = () => {
    return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(this.email);
  };

  isValidPassword = () => {
    return new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/
    ).test(this.password);
  };

  isValidBirthDate = () => {
    const birthdate = new Date(this.birthdate);

    let dateMinus13 = new Date();
    dateMinus13.setFullYear(dateMinus13.getFullYear() - 13);

    return birthdate.getTime() < dateMinus13.getTime();
  };

  isValidFirstanme = () => {
    return new RegExp(/^[a-z ,.'-]+$/i).test(this.firstname);
  };

  isValidLastname = () => {
    return new RegExp(/^[a-z ,.'-]+$/i).test(this.lastname);
  };

  isValid = () => {
    if (!this.isValidEmail()) return "Invalid email";

    if (!this.isValidFirstanme()) return "Invalid firstname";

    if (!this.isValidPassword()) return "Invalid password";

    // if (!this.birthdate instanceof Date) return "Invalid date";

    if (!this.isValidBirthDate()) return "Invalid birthdate";

    if (!this.isValidLastname()) return "Invalid Lastname";

    // if(!this.birthdate instanceof Date) return "Invalid date";

    return true;
  };

  addToDoList = (nameTodo) => {
    if (this.toDoList !== null) return "A todo list already";

    const toDoList = new ToDoList(nameTodo, this);

    this.toDoList = toDoList;

    return true;
  };
}

module.exports = User;
