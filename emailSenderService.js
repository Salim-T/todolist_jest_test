class EmailSenderService {
  constructor() {}

  sendEmail(receiver, content) {
    return `Email sent to ${receiver} with content: ${content}`;
  }
}

module.exports = EmailSenderService;
