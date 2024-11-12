const EmailSenderService = require('./emailSenderService');
const User = require('./user');
const Item = require('./item');

test('should send email when 8th item is added', () => {
    let emailSenderService = new EmailSenderService();
    let user = new User('jean-dupont@gmail.com', 'Jean', 'Dupont', '12345678Mm*', new Date('2000-01-01'));
    const items = [];
    for (let i = 0; i < 7; i++) {
        items.push(new Item(`Item ${i + 1}`, `Description ${i + 1}`, new Date()));
    }

    emailSenderService.sendEmail = jest.fn();

    items.push(new Item('Item 8', 'Description 8', new Date()));
    if (items.length === 8) {
        emailSenderService.sendEmail(user.email, "Your todolist is almost full");
    }

    // Vérifier que sendEmail a été appelée une seule fois avec les bons arguments
    expect(emailSenderService.sendEmail).toHaveBeenCalledTimes(1);
    expect(emailSenderService.sendEmail).toHaveBeenCalledWith(user.email, "Your todolist is almost full");
});
