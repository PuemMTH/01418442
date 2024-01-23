# Midterm ข้อที่ 2

## เพิ่มข้อมูลจากฟอร์ม และแสดงใน Table ด้วย Javascript

จากข้อที่ 1 ได้มีการดึงข้อมูลจาก Object JSON มาแสดงใน Table แล้ว ในข้อนี้จะเพิ่มข้อมูลจากฟอร์ม และแสดงใน Table

### 1. สร้างฟอร์ม และปุ่มสำหรับเพิ่มข้อมูล

สร้างฟอร์มสำหรับเพิ่มข้อมูล โดยมีปุ่มสำหรับเพิ่มข้อมูล โดยมี id ไว้สำหรับใช้เรียกใช้งาน id addResultForm

```html
<h1>เพิ่มผลการแข่งขัน</h1>
<form id="addResultForm">
	<input
		type="text"
		id="date"
		placeholder="Date (e.g., Sunday 14 January 2024)"
		required
	/><br />
	<input type="text" id="homeTeam" placeholder="Home Team" required /><br />
	<input type="text" id="awayTeam" placeholder="Away Team" required /><br />
	<input
		type="text"
		id="score"
		placeholder="Score (e.g., 2-1)"
		required
	/><br />
	<input type="text" id="location" placeholder="Location" required /><br />
	<button type="submit" class="btn">Add Result</button>
</form>
```

### 2. สร้าง Event สำหรับเพิ่มข้อมูล

2.1 สร้าง Event จาก Form โดยใช้ addEventListener และใช้ preventDefault() เพื่อทำให้แน่ใจว่าจะเรียกใช้งานฟังก์ชันที่เราต้องการเท่านั้น

```javascript
const addResultForm = document.getElementById("addResultForm");
const resultsTable = document.getElementById("resultsTable");

addResultForm.addEventListener("submit", (event) => {
	event.preventDefault();
});
```

2.2 นำข้อมูลจากฟอร์มมาเก็บไว้ในตัวแปร โดยใช้ value ของ input และเก็บไว้ในตัวแปรที่มีชื่อเดียวกับ id ของ input date, homeTeam, awayTeam, score, location ตามลำดับ

```javascript
addResultForm.addEventListener("submit", (event) => {
	event.preventDefault();
	...

	const date = document.getElementById("date");
    const homeTeam = document.getElementById("homeTeam");
    const awayTeam = document.getElementById("awayTeam");
    const score = document.getElementById("score");
    const location = document.getElementById("location");
  ...
});
```

2.3 สร้าง Object ของข้อมูลที่จะเพิ่ม โดยใช้ชื่อ key ตามชื่อของ column ในตาราง และใช้ value จากตัวแปรที่เก็บข้อมูลจากฟอร์ม มาเพิ่มเข้าไปใน Element ของ Tag tr โดยใช้ innerHTML และเก็บไว้ในตัวแปร newRow ก่อนจะเครียร์ค่าในฟอร์ม และเพิ่ม newRow เข้าไปใน tbody ของตาราง

```javascript
addResultForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const date = document.getElementById("date");
	const homeTeam = document.getElementById("homeTeam");
	const awayTeam = document.getElementById("awayTeam");
	const score = document.getElementById("score");
	const location = document.getElementById("location");

	const newRow = document.createElement("tr");
	newRow.innerHTML = `
      <td>${date.value}</td>
      <td>${homeTeam.value} vs ${awayTeam.value}</td>
      <td>${score.value}</td>
      <td>${location.value}</td>
    `;

	// clear input
	date.value = "";
	homeTeam.value = "";
	awayTeam.value = "";
	score.value = "";
	location.value = "";

	resultsTable.querySelector("tbody").appendChild(newRow);
});
```
