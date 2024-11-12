const User = require("./user");
const Item = require("./item");

class ToDoList {
  constructor(name, user) {
    this.name = name;
    this.user = user;
    this.items = [];
    this.dateLastItem = null;
  }

  checkUniqueName(name) {
    return this.items.filter((item) => item.name === name).length === 0;
  }

  checkMaxCharContent(content) {
    return content.length <= 1000;
  }

  checkDelayBetweenItems(date) {
    if (this.dateLastItem === null) return true;

    const THIRTY_MINUTES = 30 * 60 * 1000;

    const dateLastItem = new Date(this.dateLastItem);
    const dateItem = new Date(date);

    const diff = dateItem.getTime() - dateLastItem.getTime();

    return diff >= THIRTY_MINUTES;
  }

  sendEmailWhenListGot8Items() {
    if (this.items.length === 8) {
      this.user.emailSender.sendEmail(
        this.user.email,
        "Your todolist is almost full"
      );
    }
  }

  add(item) {
    if (!(item instanceof Item)) return "not an item";

    if (!this.checkDelayBetweenItems(item.date)) return "delay too short";

    if (!this.checkUniqueName(item.name)) return "name already exist";

    if (!this.checkMaxCharContent(item.content)) return "content too long";

    if (this.items.length >= 10) return "list full";

    this.items.push(item);
    this.dateLastItem = new Date();

    this.sendEmailWhenListGot8Items();

    return true;
  }

  save(item) {
    if (!item) {
      throw new Error("item is required");
    }
    console.log(`Item ${item.name} saved`);
  }
}

module.exports = ToDoList;
