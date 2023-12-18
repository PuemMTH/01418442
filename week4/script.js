// ซื้อของ 30 บาทได้ แสตมป์ 1 ดวง สะสมแสตมป์ครบ 50 ดวง เพิ่มเงิน 1 บาท แลกหมอนข้างคนโสดได้ 1 ใบ เอ็มม่ามีแสตมป์ 33 ดวง ต้องใช้เงินอีกกี่บาทจึงจะแลกหมอนข้างได้
// ตัวแปร: stampPrice, pillowPrice, emmaStamp

let stampPrice = 30;
let pillowPrice = 50;
let emmaStamp = 33;

// สรุปว่าต้องใช้เงินอีก 17 * 30 + 1 = 511 บาทจึงจะแลกหมอนข้างได้
let result = ((pillowPrice - emmaStamp) * (stampPrice)) + 1;
console.log(`ต้องใช้เงินอีก ${result} บาทจึงจะแลกหมอนข้างได้`);