//Exercise #1
// ให้สร้าง Class ที่ชื่อว่า EmailNotification ซึ่งมีคุณสมบัติดังนี้
// มี Methods ทั้งหมด 2 ตัว
// constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class โดยมี Property ดังนี้
// notificationId คือตัวบ่งชี้ของอีเมลชุดนั้นเป็น String
// createdTime คือเวลาส่งอีเมลเป็น String
// content คือข้อความในอีเมลเป็น String
// receiver คืออีเมลของผู้รับเป็น String
// send เป็น Method ที่ส่ง Notification ไปยัง Email เมื่อเรียกใช้ Method นี้ ระบบจะแสดงผลข้อความผ่านหน้าจอด้วย console.log() ในรูปแบบนี้
//"Notification has been sent to <email>"
// <email> คืออีเมลของผู้รับ
// สร้าง Class ที่ชื่อว่า SMSNotification
// มี Methods ทั้งหมด 2 ตัว
// constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class โดยมี Property ดังนี้
// notificationId คือตัวบ่งชี้ของ SMS ชุดนั้นเป็น String
// createdTime คือเวลาที่ส่ง SMS เป็น String
// content คือข้อความใน SMS เป็น String
// phoneNumber คือเบอร์โทรศัพท์ของผู้รับเป็น String
// send เป็น Method ที่ส่ง Notification ด้วย SMS ไปยังโทรศัพท์มือถือ โดยที่ให้ Log ข้อความว่า "Notification has been sent to <phoneNumber>"
// <phoneNumber> นี้ให้ใส่เป็น Value ของ Property phoneNumber จริงๆ
// ต่อมาให้สร้าง Object จาก Class ที่ชื่อว่า EmailNotification และ SMSNotification (วิธี Instantiate the object)
// ให้ Execute ตัว Method send จาก Object EmailNotification และ Object SMSNotification ที่เราสร้าง

class EmailNotification {
  // ให้สร้าง Class ที่ชื่อว่า EmailNotification
  constructor(notificationId, createdTime, content, receiver) {
    //stirngหมดเลย
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  // send เป็น Method ที่ส่ง Notification ไปยัง Email เมื่อเรียกใช้ Method นี้ ระบบจะแสดงผลข้อความผ่านหน้าจอด้วย console.log() ในรูปแบบนี้"Notification has been sent to <email>"
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification {
  // สร้าง Class ที่ชื่อว่า SMSNotification
  constructor(notificationId, createdTime, content, phoneNumber) {
    //stirngหมดเลย
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  // send เป็น Method ที่ส่ง Notification ด้วย SMS ไปยังโทรศัพท์มือถือ โดยที่ให้ Log ข้อความว่า "Notification has been sent to <phoneNumber>"
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
} // ต่อมาให้สร้าง Object จาก Class ที่ชื่อว่า EmailNotification และ SMSNotification (วิธี Instantiate the object)

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
  "055-555-555"
);
SMSNotificationData.send(); //ให้ Execute ตัว Method send จาก Object EmailNotification และ Object SMSNotification ที่เราสร้าง
