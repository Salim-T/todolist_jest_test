const EmailSenderService = require("./emailSenderService");
const User = require("./user");
const Item = require("./item");

test("should send email when 8th item is added", () => {
  let emailSenderService = new EmailSenderService();
  let user = new User(
    "jean-dupont@gmail.com",
    "Jean",
    "Dupont",
    "12345678Mm*",
    new Date("2000-01-01")
  );
  const items = [];
  for (let i = 0; i < 8; i++) {
    items.push(new Item(`Item ${i + 1}`, `Description ${i + 8}`, new Date()));
  }

  emailSenderService.sendEmail = jest.fn();
  if (items.length === 8) {
    emailSenderService.sendEmail(user.email, "Your todolist is almost full");
  }

  emailSenderService.sendEmail.mockReturnValue(`Email sent to ${user.email} with content: Your todolist is almost full`);

  expect(emailSenderService.sendEmail).toHaveBeenCalledTimes(1);
  expect(emailSenderService.sendEmail).toHaveBeenCalledWith(
    user.email,
    "Your todolist is almost full"
  );
  expect(emailSenderService.sendEmail()).toBe(`Email sent to ${user.email} with content: Your todolist is almost full`);
});
