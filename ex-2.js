class Notification {
  // ให้สร้าง Class ที่ชื่อว่า Notification เพื่อที่จะทำเป็นตัวแม่
  constructor(notificationId, createdTime, content, receiver) {
    //stirngหมดเลย
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}
//___________________________________________________________________________________________________________________________________________________________________;

//สร้าง Class EmailNotification และ ใช้วิธี inheritสืบทอดข้อมูลจาก notification
class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    //ของclassแม่บวกของตัวเองในข้อนี้เหมือนกันหมดเลย
    //stirngหมดเลย
    // เรียก Constructor ของ Class แม่ (Notification)
    super(notificationId, createdTime, content, receiver); //ลบthis._____ = ______ ที่ซ้ำกับตัวแม่จะได้ของตัวเองที่เหลือหลังจากลบตัวซ้ากับตัวแม่
  }
  // send เป็น Method ที่ส่ง Notification ไปยัง Email เมื่อเรียกใช้ Method นี้ ระบบจะแสดงผลข้อความผ่านหน้าจอด้วย console.log() ในรูปแบบนี้"Notification has been sent to <email>"
  send() {
    console.log(`EmailNotification has been sent to ${this.receiver}`);
  }
}
//___________________________________________________________________________________________________________________________________________________________________;

//สร้าง Class SMSNotification และ ใช้วิธี inheritสืบทอดข้อมูลจาก notification
class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver, phoneNumber) {
    //ของclassแม่บวกของตัวเอง
    //stirngหมดเลย
    // เรียก Constructor ของ Class แม่ (Notification)
    super(notificationId, createdTime, content, receiver);
    this.phoneNumber = phoneNumber; //ลบthis._____ = ______ ที่ซ้ำกับตัวแม่จะได้ของตัวเองที่เหลือหลังจากลบตัวซ้ากับตัวแม่
  }

  // send เป็น Method ที่ส่ง Notification ด้วย SMS ไปยังโทรศัพท์มือถือ โดยที่ให้ Log ข้อความว่า "Notification has been sent to <phoneNumber>"
  send() {
    console.log(`SMSNotification has been sent to ${this.phoneNumber}`);
  }
}

//___________________________________________________________________________________________________________________________________________________________________;

// ต่อมาให้สร้าง Object จาก Class ที่ชื่อว่า EmailNotification และ SMSNotification (วิธี Instantiate the object)

const EmailNotificationData = new EmailNotification( //สร้าง Object จาก Class ที่ชื่อว่า EmailNotification(วิธี Instantiate the object)
  "555",
  "2023-05-15 05:50:05",
  "Hi,555 email notification",
  "fiveGuy555@gmail.com"
);
EmailNotificationData.send(); //ให้ Execute ตัว Method send จาก Object EmailNotification และ Object SMSNotification ที่เราสร้าง

const SMSNotificationData = new SMSNotification( //สร้าง Object จาก Class ที่ชื่อว่า SMSNotification(วิธี Instantiate the object)
  "555",
  "2023-05-15 05:50:05",
  "Hi,555 email notification",
  "fiveGuy555@gmail.com",
  "055-555-555"
);
SMSNotificationData.send(); //ให้ Execute ตัว Method send จาก Object EmailNotification และ Object SMSNotification ที่เราสร้าง
