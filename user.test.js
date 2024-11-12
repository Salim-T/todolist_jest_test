const User = require("./user");

test("firstname unvalid", () => {
  let user1 = new User(
    "jean-dupont@gmail.com",
    "Josz",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );
  expect(user1.isValid()).toBe(true);
});

//tester avec une mauvaise

test("lastname unvalid", () => {
  let user1 = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont/",
    "12345678Mm*",
    new Date("2000-01-01")
  );
  expect(user1.isValid()).toBe(false);
});

test("email unvalid", () => {
  let user1 = new User(
    "jean-dupont@gmail",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );
  expect(user1.isValid()).toBe(false);
});

test("password unvalid", () => {
  let user1 = new User(
    "jean-dupont@gmail.fr",
    "Jean",
    "Dupont",
    "12345678Mm",
    new Date("2000-01-01")
  );
  expect(user1.isValid()).toBe(false);
});

test("age unvalid", () => {
  let user1 = new User(
    "jean-dupont@gmail.fr",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2012-01-01")
  );
  expect(user1.isValid()).toBe(false);
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
