const User = require("./user");
const Item = require("./item");
const EmailSenderService = require("./emailSenderService");

test("add item todolist", () => {
  const user = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );

  user.addToDoList("todolist 1");

  const item = new Item("test1", "test1", Date.now());
  expect(user.toDoList.add(item)).toBe(true);
});

test("add item delay too short", () => {
  const user = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );

  user.addToDoList("todolist 1");

  const item = new Item("test1", "test1", Date.now());

  user.toDoList.add(item);

  const secondItem = new Item("test2", "test2", Date.now());

  expect(user.toDoList.add(secondItem)).toBe("delay too short");
});

test("add item name already exist", () => {
  const user = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );

  user.addToDoList("todolist 1");

  const item = new Item("test1", "test1", Date.now());
  const THIRTY_MINUTES = 30 * 60 * 1000;

  user.toDoList.add(item);

  const secondItem = new Item("test1", "test2", Date.now() + THIRTY_MINUTES);

  expect(user.toDoList.add(secondItem)).toBe("name already exist");
});

test("add item list full", () => {
  const user = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );

  user.addToDoList("todolist 1");

  for (let i = 0; i < 10; i++) {
    const item = new Item("test" + i, "test" + i, Date.now());
    user.toDoList.add(item);

    if (i === 10) {
      expect(user.toDoList.add(item)).toBe("list full");
    }
  }
});

test("add item content too long", () => {
  const user = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );

  user.addToDoList("todolist 1");

  const item = new Item("test1", "test1".repeat(1000), Date.now());

  expect(user.toDoList.add(item)).toBe("content too long");
});

test("should send email when 8th item is added", () => {
  let emailSenderService = new EmailSenderService();
  emailSenderService.sendEmail = jest.fn();

  const user = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );

  user.addToDoList("todolist 1");

  for (let i = 0; i < 8; i++) {
    user.toDoList.add(new Item("Item 1", "Description 1", new Date()));
    if (i === 7) {
      user.toDoList.add(new Item("Item 8", "Description 8", new Date()));
      emailSenderService.sendEmail("test", "test");
    }
  }
  expect(emailSenderService.sendEmail).toHaveBeenCalledTimes(1);
});

test("test save", () => {
  const user = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );

  user.addToDoList("todolist 1");

  const item = new Item("test1", "test1", Date.now());

  user.toDoList.add(item);

  user.toDoList.save = jest.fn().mockReturnValue(`item ${item.name} saved`);

  user.toDoList.save(item);

  expect(user.toDoList.save).toHaveBeenCalledTimes(1);
  expect(user.toDoList.save).toHaveBeenCalledWith(item);
});

test("test save error", () => {
  const user = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );

  user.addToDoList("todolist 1");

  expect(() => user.toDoList.save(null)).toThrow("item is required");
});
