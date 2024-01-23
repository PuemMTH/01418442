# Midterm ข้อที่ 3

## 1. สร้างโครงสร้าง html

สร้างโครงสร้าง html ดังนี้
สร้าง tag ต่างๆ ดังนี้ โดยจะมี id ใช้สำหรับกาอ้างอิงค์เพื่อใช้ในการแสดงผล

```html
<h1>ณ ร้านขายผัก - ผลไม้ร้านหนึ่ง</h1>
<div id="result">ใส่คำตอบตรงนี้</div>
<p>Name: <span id="names"></span></p>
<p>Fruits: <span id="fruits"></span></p>
<p>Totalcost: <span id="totalcost"></span></p>
<p>Sorted Price: <span id="sortedprice"></span></p>
<p>Cucumber Details: <span id="cucumberdetails"></span></p>
<hr />

<p>Sum Price Fruit: <span id="sumf"></span></p>
<p>Low Price Fruit: <span id="lowpricefruit"></span></p>
<p>Sort Fruit Name: <span id="list_sort_name"></span></p>
<p>Average Price Fruit: <span id="average"></span></p>
<p>price more than 1: <span id="list_price_1"></span></p>
```

## 2. List Item ใช้สำหรับการทดลอง

```javascript
const items = [
	{ name: "Apple", category: "Fruit", price: 1 },
	{ name: "Carrot", category: "Vegetable", price: 0.5 },
	{ name: "Banana", category: "Fruit", price: 0.8 },
	{ name: "Cucumber", category: "Vegetable", price: 1.2 },
	{ name: "Orange", category: "Fruit", price: 0.9 },
	{ name: "Tomato", category: "Vegetable", price: 0.7 },
	{ name: "Lettuce", category: "Vegetable", price: 0.3 },
	{ name: "Grapes", category: "Fruit", price: 2 },
	{ name: "Mushroom", category: "Vegetable", price: 1.5 },
	{ name: "Strawberry", category: "Fruit", price: 1.8 },
	{ name: "Blueberry", category: "Fruit", price: 2.5 },
	{ name: "Potato", category: "Vegetable", price: 0.4 },
	{ name: "Broccoli", category: "Vegetable", price: 1.1 },
	{ name: "Mango", category: "Fruit", price: 1.7 },
	{ name: "Spinach", category: "Vegetable", price: 0.6 },
	{ name: "Cherry", category: "Fruit", price: 2.2 },
	{ name: "Peas", category: "Vegetable", price: 0.9 },
	{ name: "Peach", category: "Fruit", price: 1.3 },
	{ name: "Pineapple", category: "Fruit", price: 1.5 },
	{ name: "Celery", category: "Vegetable", price: 0.8 },
];
```

<!-- document.addEventListener("DOMContentLoaded", () => {
	const names = document.querySelector("#names");
	const fruits = document.querySelector("#fruits");
	const totalcost = document.querySelector("#totalcost");
	const sortedprice = document.querySelector("#sortedprice");
	const cucumberdetails = document.querySelector("#cucumberdetails");

	// get name list
	const namesList = items.map((item) => item.name);
	names.innerHTML = namesList.join(", ");

	// get fruit list
	const fruitsList = items.filter((item) => item.category === "Fruit");
	fruits.innerHTML = fruitsList.map((item) => item.name).join(", ");

  // Sum Total Cost
	const SumTotalCost = items.reduce((total, item) => total + item.price, 0);
	totalcost.innerHTML = "$" + SumTotalCost.toFixed(2);

  // sort price
	const SortByPrice = items.sort((a, b) => a.price - b.price);
	sortedprice.innerHTML = SortByPrice.map((item) => item.name).join(", ");

  // Cucumber Details
	const CucumberDetails = items.find((item) => item.name === "Cucumber");
	cucumberdetails.innerHTML = JSON.stringify(CucumberDetails);

	// 1. ราคารวมของผลไม้ทั้งหมด
	const sumf = document.querySelector("#sumf");
	const lowpricefruit = document.querySelector("#lowpricefruit");
	const list_sort_namefruit = document.querySelector("#list_sort_name");
	const averagefruit = document.querySelector("#average");
	const list_price_1 = document.querySelector("#list_price_1");

  // Sum Price Fruit
	const SumPriceFruit = items.filter((item) => item.category === "Fruit");
  const sumP = SumPriceFruit.reduce((total, item) => total + item.price, 0);
	sumf.innerHTML = sumP

	// 2. ผลไม้ที่ราคาถูกที่สุด
  const fruitlowprice = items.sort((a, b) => a.price - b.price);
  // console.log(fruitlowprice[0].name)
  lowpricefruit.innerHTML = fruitlowprice[0].name

  const sort_word = items.sort((a, b) => a.name - b.name);
  console.log(sort_word)
	// 3. รายชื่อผลไม้และราคาที่เรียงล าดับตามชื่อ
  const sort_name = items.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  console.log(sort_name)
  list_sort_namefruit.innerHTML = sort_name.map((item) => item.name).join(", ");


	// 4.
  const average = sumP/sort_word.length
  console.log(sumP)
  averagefruit.innerHTML = average

	// 5. สร้างรายการผักที่ราคามากกว่า $1 และเรียงตามราคาจากสูงไปต่ำ
  console.log(fruitsList.filter((item) => item.price > 1).sort((a,b) => b.price - a.price))
  list_price_1.innerHTML = fruitsList.filter((item) => item.price > 1).sort((a,b) => b.price - a.price).map((item) => {
    return `${item.name} - $${item.price}`
  }).join(", ")
}); -->

## 3. ส่วนที่ 1

### 3.1 อ้างอิงค่าจาก html

อ้างอิงค่าจาก html โดยใช้ id ที่กำหนดไว้ใน html ดังนี้

```javascript
const names = document.querySelector("#names");
const fruits = document.querySelector("#fruits");
const totalcost = document.querySelector("#totalcost");
const sortedprice = document.querySelector("#sortedprice");
const cucumberdetails = document.querySelector("#cucumberdetails");
```

### 3.2 สร้างฟังก์ชันสำหรับการนำชื่อผลไม้มาแสดง

สร้างฟังก์ชันสำหรับการนำชื่อมาแสดงโดยใช้ฟังก์ชัน map และ join ดังนี้

map คือการนำค่าจาก array มาแปลงให้เป็นค่าใหม่ โดยจะทำการวนลูปแต่ละค่าใน array และนำค่า name ใหม่ที่ได้จากการวนลูปแต่ละค่ามาเก็บไว้ใน array ใหม่

```javascript
const namesList = items.map((item) => item.name);
names.innerHTML = namesList.join(", ");
```

### 3.3 สร้างฟังก์ชันสำหรับการนำชื่อผลไม้มาแสดง

filter เป็นการ filter ค่าใน array โดยจะทำการวนลูปแต่ละค่าใน array และเช็คว่าค่านั้นๆ มี category เป็น Fruit หรือไม่ ถ้าใช่ก็จะเก็บค่า name ลงใน array ใหม่ และนำ array name ใหม่ที่ได้มา join ด้วยเครื่องหมาย , ดังนี้

```javascript
const fruitsList = items.filter((item) => item.category === "Fruit");
fruits.innerHTML = fruitsList.map((item) => item.name).join(", ");
```

### 3.4 สร้างฟังก์ชันสำหรับการนำเฉพาะผลไม้มารวมราคา

reduce เป็นการรวมค่าใน array โดยจะทำการวนลูปแต่ละค่าใน array และนำค่า price มาบวกกัน โดยค่าเริ่มต้นจะเป็น 0 ดังนี้

```javascript
const SumTotalCost = items.reduce((total, item) => total + item.price, 0);
totalcost.innerHTML = "$" + SumTotalCost.toFixed(2);
```

### 3.5 สร้างฟังก์ชันสำหรับการนำเฉพาะผลไม้มาเรียงลำดับตามราคา

sort เป็นการเรียงลำดับค่าใน array โดยจะทำการวนลูปแต่ละค่าใน array และนำค่า price มาเปรียบเทียบกัน โดยจะเรียงจากน้อยไปมาก ดังนี้

```javascript
const SortByPrice = items.sort((a, b) => a.price - b.price);
sortedprice.innerHTML = SortByPrice.map((item) => item.name).join(", ");
```

### 3.6 สร้างฟังก์ชันสำหรับการแสดงรายละเอียดของ Cucumber

find เป็นการหาค่าใน array โดยจะทำการวนลูปแต่ละค่าใน array และเช็คว่าค่านั้นๆ มี name เป็น Cucumber หรือไม่ ถ้าใช่ก็จะเก็บค่าที่เจอไว้ในตัวแปร CucumberDetails และแสดงผลออกมา ก่อนจะแสดงผลออกมาจะทำการแปลงเป็น string ด้วยฟังก์ชัน JSON.stringify ดังนี้

```javascript
const CucumberDetails = items.find((item) => item.name === "Cucumber");
cucumberdetails.innerHTML = JSON.stringify(CucumberDetails);
```

### ส่วนที่ 2

### 3.7 อ้างอิงค่าจาก html

นำ Id ที่อยู่ในช่วงที่ 2 มาเชื่อมโยงกับตัวแปรเพื่อมาใช้งานในช่วงที่ 2

```javascript
const sumf = document.querySelector("#sumf");
const lowpricefruit = document.querySelector("#lowpricefruit");
const list_sort_namefruit = document.querySelector("#list_sort_name");
const averagefruit = document.querySelector("#average");
const list_price_1 = document.querySelector("#list_price_1");
```

### 3.8 รวมราคาเฉพาะ Category Fruit

รวมราคาของ Category Fruit โดยใช้ Filter ในการเลือกข้อมูลที่ต้องการก่อนจะมา บวกกันด้วย Reduce โดยให้คาเริ่มต้นเป็น 0

```javascript
const SumPriceFruit = items.filter((item) => item.category === "Fruit");
const sumP = SumPriceFruit.reduce((total, item) => total + item.price, 0);
sumf.innerHTML = sumP;
```

### 3.9 หาผลไม้ที่มีราคถูกที่สุด

โดยในการหาราคาที่ถูกที่สุด จะเรียงราคาจากน้อยไปมาก โดยการนำ a และ b ที่อ้างอิงถึง item มาเปรียบเทียบกับ จากนั้นจะนำข้อมูลชื่อจาก index ที่ 0 หลังเรียงข้อมูลมาแล้วมาใช้ในการแสดง

```javascript
const fruitlowprice = items.sort((a, b) => a.price - b.price);
lowpricefruit.innerHTML = fruitlowprice[0].name;
```

### 3.10 เรียงผลไม้ตามชื่อ

โดยในการเรียงผลไม้ตามชื่อ จะเรียงจากน้อยไปมาก โดยการนำ a < b คือ น้อยกว่า แล้วจะคือค่า -1 (ต้องเรียง a ก่อน b)
a > b คือ มากกว่า แล้วจะคือค่า 1 (ต้องเรียง b ก่อน a)
a = b คือ เท่ากัน แล้วจะคือค่า 0 (ไม่ต้องเปลี่ยนตำแหน่ง)

จากนั้นนำข้อมูลที่ถูกเรียงแล้วมาใช้ในการแสดงผลโดยใช้คำสั่ง map และ join ในการแสดงข้อมูลทั้งหมด

```javascript
const sort_name = items.sort(function (a, b) {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
});
list_sort_namefruit.innerHTML = sort_name.map((item) => item.name).join(", ");
```

### 3.11 หาค่าเฉลี่ยของผลไม้

โดยในการหาค่าเฉลี่ยของผลไม้ จะนำผลรวมของผลไม้ทั้งหมดมาหารด้วยจำนวนของผลไม้ทั้งหมด

```javascript
const average = sumP / sort_word.length;
averagefruit.innerHTML = average;
```

### 3.12 แสดงผลไม้ที่มีราคามากกว่า 1 และเรียงจากมากไปน้อย

โดยในการแสดงผลไม้ที่มีราคามากกว่า 1 และเรียงจากมากไปน้อย จะใช้ filter ในการเลือกข้อมูลที่ต้องการก่อน แล้วจะนำข้อมูลที่เลือกมาเรียงจากมากไปน้อย โดยใช้ sort ในการเรียงข้อมูล และใช้ map และ join ในการแสดงผล

```javascript
list_price_1.innerHTML = fruitsList
	.filter((item) => item.price > 1)
	.sort((a, b) => b.price - a.price)
	.map((item) => {
		return `${item.name} - $${item.price}`;
	})
	.join(", ");
```
