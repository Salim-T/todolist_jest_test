const User = require("./user");
const Item = require("./item");

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

  user.toDoList.save(item) = jest.fn();

  expect(user.toDoList.save).toHaveBeenCalledTimes(1);
  expect(user.toDoList.save).toHaveBeenCalledWith(item);
  expect(user.toDoList.save).toHaveReturnedWith(`item ${item} saved`);
  
});


