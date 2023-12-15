class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }

  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

const emailNotification = new EmailNotification(
  "001",
  "08:30 PM",
  "Job description Email",
  "hedis_nice@yahoo.com"
);
emailNotification.send();

const smsNotification = new SMSNotification(
  "002",
  "01:30 PM",
  "Reminder: Appointment with the dentist at 6:30 PM",
  "0812345678"
);
smsNotification.send();
