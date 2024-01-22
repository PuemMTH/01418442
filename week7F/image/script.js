document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");

    const image = document.createElement("img");
    image.src = "https://th.bing.com/th/id/OIP.6r17Fy3JjmL2k_7dBjCCBwHaG6?rs=1&pid=ImgDetMain";
    image.alt = "A cute cat";
    
    container.appendChild(image);

    const fruits = ["Apple", "Banana", "Orange", "Grapes"];

    const fruitsList = document.getElementById("ul_fruit");

    fruits.forEach(function(fruit) {
        const li = document.createElement("li");
        li.textContent = fruit;
        fruitsList.appendChild(li);
    });
});
