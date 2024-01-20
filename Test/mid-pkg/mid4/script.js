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

document.addEventListener("DOMContentLoaded", () => {
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
});