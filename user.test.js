const User = require("./user");

test("email invalid", () => {
  let user1 = new User(
    "jean-dupont@gmail",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );
  expect(user1.isValid()).toBe("Invalid email");
});

test("firstname invalid", () => {
  let user1 = new User(
    "jean-dupont@gmail.com",
    "Jos6",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );
  expect(user1.isValid()).toBe("Invalid firstname");
});

//tester avec une mauvaise

test("lastname invalid", () => {
  let user1 = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont/",
    "12345678Mm*",
    new Date("2000-01-01")
  );
  expect(user1.isValid()).toBe("Invalid Lastname");
});



test("password invalid", () => {
  let user1 = new User(
    "jean-dupont@gmail.fr",
    "Jean",
    "Dupont",
    "12345678Mm",
    new Date("2000-01-01")
  );
  expect(user1.isValid()).toBe("Invalid password");
});

test("age invalid", () => {
  let user1 = new User(
    "jean-dupont@gmail.fr",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2012-01-01")
  );
  expect(user1.isValid()).toBe("Invalid birthdate");
});

//tester si la date est invalide
test("date invalid", () => {
  let user1 = new User(
    "jean-dupont@gmail.fr",
    "Jean",
    "Dupont",
    "12345678Mm*",
    "2000-01-01"
  );
  expect(user1.isValid()).toBe("Invalid date");
});



test("all valid", () => {
  let user1 = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );
  expect(user1.isValid()).toBe(true);
});
