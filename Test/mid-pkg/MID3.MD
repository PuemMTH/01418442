# Midterm ข้อที่ 3

## เกมทายตัวอักษร

ระบบจะสุ่ม word มา 1 คำ และแสดงให้ผู้ใช้เห็น \_ ตามจำนวนตัวอักษรของคำนั้น และให้ผู้ใช้ทายตัวอักษร 1 ตัว โดยระบบจะตรวจสอบว่าตัวอักษรที่ผู้ใช้ทาย มีอยู่ในคำนั้นหรือไม่ ถ้ามีจะแสดงตำแหน่งของตัวอักษรนั้น และให้ผู้ใช้ทายต่อไปจนกว่าจะทายถูก หรือทายผิดหากผิดเกิน คูณ 2 จำนวนคำ ที่สุ่มได้

จากข้อที่ 1

### 1. สร้างโครงสร้าง html

อ้างอิงข้อมูลด้วย id

- word ใช้สำหรับแสดงคำที่สุ่มมา
- point ใช้สำหรับแสดงจำนวนครั้งที่ทายถูก
- maxpoint ใช้สำหรับแสดงจำนวนครั้งที่ทายได้สูงสุด
- letters ใช้สำหรับแสดงตัวอักษรที่ผู้ใช้ทายไปแล้ว
- message ใช้สำหรับแสดงข้อความว่าผู้ใช้ทายถูกหรือผิด
- playAgain ใช้สำหรับแสดงปุ่มเพื่อเริ่มเกมใหม่

ไฟล์ index.html

```html
<h1>เกมทายอะไรเอ่ยย ENG</h1>
<div id="word">_ _ _ _ _</div>
<div>เดาได้ <span id="point"></span>/<span id="maxpoint"></span></div>
<div id="letters"></div>
<div id="message"></div>
<button id="playAgain" style="display: none" onclick="resetGame()">
	Play Again
</button>
```

### 2. สร้าง Object สำหรับคำที่จะนำมาสุ่ม

ไฟล์ script.js

```javascript
const words = [
	"apple",
	"banana",
	"orange",
	"mango",
	...
];
```

### 3. สร้างฟังก์ชันสำหรับเกม

#### 3.1 กำหนดค่าเริ่มต้น

กำหนดค่าเริ่มต้นให้ตัวแปรต่างๆ

```javascript
// ดึงข้อมูลจาก id html มาเก็บไว้ในตัวแปร
const letters = document.getElementById("letters");
const word_show = document.getElementById("word");
const show_point = document.getElementById("point");
```

#### 3.2 config point

ทำการกำหนดค่าเริ่มต้นของ point และ max_point โดยให้ point = 0 และ max_point = ความยาวของคำที่สุ่มมา \* 2 เพื่อให้ผู้เล่นทาย

```javascript
let point = 0; // ค่าเริ่มต้นของ point
let max_point = 0; // ค่าเริ่มต้นของ ค่าสูงสุดของ
// random word
const word_rand = words[Math.floor(Math.random() * words.length)]; // สุ่มคำจาก words
answer = "_".repeat(word_rand.length); // แทนตัวอักษรที่ยังไม่ถูกทายด้วย _

max_point = answer.length * 2; // คำนวณค่าสูงสุดของ point
show_point.innerHTML = point; // แสดงค่า point ที่เป็น 0
```

#### 3.3 สร้างฟังก์ชันสำหรับการเพิ่ม ปุ่ม ตัวอักษร

สร้าง function สำหรับการสุ่มตัวอักษร โดยจะนำ A-Z มาสร้างเป็นปุ่ม และเมื่อกดปุ่มจะเรียกใช้ฟังก์ชัน ให้เพิ่ม point ไปเรื่อย ละในแต่ละรอบจะตรวจสอบว่าตัวอักษรที่ผู้ใช้กด มีอยู่ในคำที่สุ่มมาหรือไม่ ถ้ามีจะแสดงตำแหน่งใน element ของตัวอักษรนั้น และให้ผู้ใช้ทายต่อไปจนกว่าจะทายถูก หรือทายผิดหากผิดเกิน คูณ 2 จำนวนคำ ที่สุ่มได้

```javascript
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i < alphabet.length; i++) {
	const btn = document.createElement("button"); // สร้างปุ่ม
	btn.classList.add("btn"); // เพิ่ม class ให้ปุ่ม
	btn.innerHTML = alphabet[i]; // ใส่ตัวอักษรลงในปุ่ม
	// เพิ่ม event ให้กับปุ่ม
	btn.addEventListener("click", () => {
		point += 1;
		show_point.innerHTML = point;
		checkWord(alphabet[i]); // เรียกใช้ฟังก์ชัน checkWord

		if (point == max_point) {
			document.getElementById("message").innerHTML =
				"Game over! The word was " + word_rand; // แสดงข้อความว่าเกมจบแล้ว
			document.getElementById("playAgain").style.display = "block";
			disableAllButton(); // เรียกใช้ฟังก์ชัน disableAllButton
		}
	});
	letters.appendChild(btn); // เพิ่มปุ่มลงใน div ที่มี id = letters
}
```

#### 3.4 สร้างฟังก์ชันสำหรับการเช็คคำ

เป็น function ที่หาตำแหน่งของตัวอักษรที่ผู้ใช้ทาย และแทนตัวอักษรที่ถูกทายแล้วลงในคำตอบ และเช็คว่าชนะหรือยัง

```javascript
function checkWord(alpha) {
	const word_split_list = word_rand.split("");
	console.log(word_split_list);
	console.log(alpha.toLowerCase());

	if (word_split_list.includes(alpha.toLowerCase())) {
		// get index of alpha
		indexList = [];
		for (let i = 0; i < word_split_list.length; i++) {
			if (word_split_list[i] == alpha.toLowerCase()) {
				indexList.push(i);
			}
		}

		// replace answer
		for (let i = 0; i < indexList.length; i++) {
			answer = answer.split("");
			answer[indexList[i]] = alpha.toLowerCase();
			answer = answer.join("");
		}

		// check win
		checkWin();

		word_show.innerHTML = answer;
	} else {
		console.log("false");
	}
}
```

#### 3.5 สร้างฟังก์ชันสำหรับการเช็คชนะ

เป็น function ที่เช็คว่าชนะหรือยัง ถ้าชนะจะแสดงข้อความว่าชนะ และปุ่มเพื่อเริ่มเกมใหม่ แต่ถ้าเกมจบแล้วจะแสดงข้อความว่าเกมจบแล้ว และปุ่มเพื่อเริ่มเกมใหม่

```javascript
function checkWin() {
	if (point == max_point) {
		document.getElementById("message").innerHTML =
			"Game over! The word was " + word_rand;
		document.getElementById("playAgain").style.display = "block";
		disableAllButton();
	} else if (answer == word_rand) {
		document.getElementById("message").innerHTML = "Congratulations! You Win!";
		document.getElementById("playAgain").style.display = "block";
	}
}
```

#### 3.6 สร้างฟังก์ชันสำหรับปุ่มเริ่มเกมใหม่

เป็น function ที่ใช้สำหรับทำให้ปุ่มตัวอักษรทั้งหมดทำงานไม่ได้ เพื่อไม่ให้ผู้ใช้กดตัวอักษรได้หลังจากเกมจบแล้ว

```javascript
function disableAllButton() {
	const btn = document.getElementsByClassName("btn");
	for (let i = 0; i < btn.length; i++) {
		btn[i].disabled = true;
	}
}
```

#### 3.7 เพิ่ม event ให้กับปุ่มเพื่อเริ่มเกมใหม่

เมื่อกดปุ่มเพื่อเริ่มเกมใหม่ จะทำการเรียกใช้ฟังก์ชัน reload window เพื่อเริ่มเกมใหม่

```javascript
document.getElementById("playAgain").addEventListener("click", () => {
	window.location.reload();
});
```
