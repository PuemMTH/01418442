# Midterm ข้อที่ 1

## นำข้อมูลมาแสดงใน Table html ด้วย Javascript

### 1. สร้างไฟล์ index.html และไฟล์ script.js

ไฟล์ index.html

```html
<table id="leagueTable">
	<thead>
		<tr>
			<th>ทีม</th>
			<th>แข่ง</th>
			<th>ชนะ</th>
			<th>เสมอ</th>
			<th>แพ้</th>
			<th>ได้ประตู</th>
			<th>เสียประตู</th>
			<th>ส่วนต่าง</th>
			<th>คะแนน</th>
		</tr>
	</thead>
	<tbody></tbody>
</table>
```

### 2. สร้างไฟล์ script.js และอ้างอิงไฟล์ script.js ในไฟล์ index.html

ไฟล์ index.html

```html
...
<script src="script.js"></script>
```

ไฟล์ script.js

```javascript
var table = document.getElementById("leagueTable");
```

<!-- ขึ้นหน้าใหม่ tag html -->

### 3. สร้างตัวแปรข้อมูลของตาราง

ตัวอย่างข้อมูลในตัวแปล tableData

```javascript
const tableData = [
	{
		team: "Liverpool",
		played: 20,
		win: 13,
		draw: 6,
		loss: 1,
		goals_for: 43,
		goals_against: 18,
		goal_difference: 25,
		points: 45,
	},
	{
		team: "Aston Villa",
		played: 20,
		win: 13,
		draw: 3,
		loss: 4,
		goals_for: 43,
		goals_against: 27,
		goal_difference: 16,
		points: 42,
	},
];
```

### 4. เพิ่มข้อมูลในตาราง

#### วิธีที่ 1: ใช้ innerHTML และ for loop

ในไฟล์ script.js:

```javascript
document.addEventListener("DOMContentLoaded", () => {
	const table = document.querySelector("#leagueTable tbody");
	tableData.forEach((data) => {
		const row = document.createElement("tr");
		row.innerHTML = `
            <td>${data.team}</td>
            <td>${data.played}</td>
            <td>${data.win}</td>
            <td>${data.draw}</td>
            <td>${data.loss}</td>
            <td>${data.goals_for}</td>
            <td>${data.goals_against}</td>
            <td>${data.goal_difference}</td>
            <td>${data.points}</td>
        `;
		table.appendChild(row);
	});
});
```

#### วิธีที่ 2: ใช้ Object และ for loop

ในไฟล์ script.js:

```javascript
document.addEventListener("DOMContentLoaded", () => {
	const table = document.querySelector("#leagueTable tbody");
	tableData.forEach((data) => {
		const row = document.createElement("tr");
		const cell = {
			team: document.createElement("td"),
			played: document.createElement("td"),
			win: document.createElement("td"),
			draw: document.createElement("td"),
			loss: document.createElement("td"),
			goals_for: document.createElement("td"),
			goals_against: document.createElement("td"),
			goal_difference: document.createElement("td"),
			points: document.createElement("td"),
		};

		// เพิ่มข้อมูลลงในแต่ละ cell
		cell.team.textContent = data.team;
		cell.played.textContent = data.played;
		cell.win.textContent = data.win;
		cell.draw.textContent = data.draw;
		cell.loss.textContent = data.loss;
		cell.goals_for.textContent = data.goals_for;
		cell.goals_against.textContent = data.goals_against;
		cell.goal_difference.textContent = data.goal_difference;
		cell.points.textContent = data.points;

		// เพิ่ม cell ลงใน row
		Object.values(cell).forEach((value) => {
			row.appendChild(value);
		});

		// เพิ่ม row ลงในตาราง
		table.appendChild(row);
	});
});
```
