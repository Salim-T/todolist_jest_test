class EmailSenderService {
  constructor() {}

  sendEmail(receiver, content) {
    console.log(`Email sent to ${receiver} with content: ${content}`);
  }
}

module.exports = EmailSenderService;
