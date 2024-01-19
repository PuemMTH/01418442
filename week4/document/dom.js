// Path: week4/document/dom.js

document.addEventListener("DOMContentLoaded", function () {
	const title = document.getElementById("title");
    const desc = document.querySelector(".description")
    
	const changeText = document.getElementById("changeTextBtn");
    const toggleClassBtn = document.getElementById("toggleClassBtn");

    changeText.addEventListener("click", function () {
        title.textContent = "I'am hacker ^^"
        desc.textContent = "Anonymouse meaw meaw"
    })

    toggleClassBtn.addEventListener("click", function () {
        title.innerText === "Hello World!"
            ? title.innerText = "Hello JavaScript!"
            : title.innerText = "Hello World!";
        title.classList.toggle("text-toggle");
    });

    const li_x = document.getElementById("x");
    const li_y = document.getElementById("y");

    // onmousemove
    document.addEventListener("mousemove", function (e) {
        li_x.textContent = e.clientX;
        li_y.textContent = e.clientY;
    });

    // onmousemove effect
    const mouse = document.getElementById("mouse");
    document.addEventListener("mousemove", function (e) {
        mouse.style.left = e.clientX + "px";
        mouse.style.top = e.clientY + "px";
    });

    // 
    const link = document.getElementById("link");
    link.addEventListener("click", function (e) {
        e.preventDefault();
        alert("You clicked on the link");
    });
    
    // game coin
    const gameArea = document.getElementById("gameArea");
    const scoreBtn =document.getElementById("score");
    const startBtn = document.getElementById("startBtn");
    let score = 0;

    startBtn.addEventListener("click", function () {
        score = 0;
        scoreBtn.textContent = score;
        startGame();
    });

    const startGame = function () {
        const coin = createCoin();
        gameArea.appendChild(coin);

        coin.addEventListener("click", function () {
            score++;
            scoreBtn.textContent = score;
            gameArea.removeChild(coin);
            startGame();
        });
    }

    const createCoin = function () {
        const coin = document.createElement("div");
        coin.classList.add("coin");
        coin.style.top = Math.random() * (gameArea.offsetHeight - 30) + "px";
        coin.style.left = Math.random() * (gameArea.offsetWidth - 30) + "px";
        return coin;
    }
});
