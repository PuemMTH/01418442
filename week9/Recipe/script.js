
document.addEventListener("DOMContentLoaded", initData);

function addData(data) {
    const storeDataLocal = localStorage.getItem("storeData")
        ? JSON.parse(localStorage.getItem("storeData"))
        : [];
    const found = storeDataLocal.find((item) => item.id === data.id);
    if (storeDataLocal) {
        if (!found) {
            data.count = 0;
            localStorage.setItem(
                "storeData",
                JSON.stringify([...storeDataLocal, data])
            );
        } else {
            if (found.count < found.max_count) {
                found.count++;
                localStorage.setItem("storeData", JSON.stringify(storeDataLocal));
            } else {
                alert("Max count");
            }
        }
    }
}

function removeCard(id) {
    const storeDataLocal = localStorage.getItem("storeData")
        ? JSON.parse(localStorage.getItem("storeData"))
        : [];
    const found = storeDataLocal.find((item) => item.id === id);
    if (found) {
        localStorage.setItem(
            "storeData",
            JSON.stringify(storeDataLocal.filter((item) => item.id !== id))
        );
    }
}

function updateState(id) {
    const storeDataLocal = localStorage.getItem("storeData")
        ? JSON.parse(localStorage.getItem("storeData"))
        : [];
    const found = storeDataLocal.find((item) => item.id === id);

    return {
        count: found ? found.count : 0,
        max_count: found ? found.max_count : 0,
    };
}

function createCard(id, imgSrc, title, text, price) {
    const countState = updateState(id);
    let count = countState.count;
    let max_count = 5;

    const createCard = document.createElement("div");
    createCard.classList.add("card");
    const createImg = document.createElement("img");
    createImg.src = imgSrc;
    createImg.alt = title;
    createImg.classList.add("card-img");
    createCard.appendChild(createImg);

    const createContent = document.createElement("div");
    createContent.classList.add("card-content");
    const createTitle = document.createElement("h3");
    createTitle.classList.add("card-title");
    createTitle.textContent = title;
    createContent.appendChild(createTitle);

    const createText = document.createElement("p");
    createText.classList.add("card-text");
    createText.textContent = text;
    createContent.appendChild(createText);

    const createPrice = document.createElement("p");
    createPrice.classList.add("card-price");
    createPrice.textContent = `Price: $${price}`;
    createContent.appendChild(createPrice);

    createCard.appendChild(createContent);

    const createButtom = document.createElement("div");
    createButtom.classList.add("card-buttom");
    const createCount = document.createElement("span");
    createCount.classList.add("card-count");
    createCount.textContent = `${count} / ${max_count}`;
    createButtom.appendChild(createCount);

    const createButton = document.createElement("button");
    createButton.classList.add("btn", "btn-sm", "btn-primary");
    createButton.textContent = "Add To Card";
    createButtom.addEventListener("click", () => {
        const data = { id, imgSrc, title, text, price, count, max_count };
        addData(data);
        count = updateState(id).count;
        updateCard();
        createCount.textContent = `${count} / ${max_count}`;
    });

    createButtom.appendChild(createButton);

    const createButtonRemove = document.createElement("button");
    createButtonRemove.classList.add("btn", "btn-sm", "btn-danger");
    createButtonRemove.textContent = "Remove";
    createButtonRemove.addEventListener("click", () => {
        removeCard(id);
        count = updateState(id).count;
        updateCard();
        createCount.textContent = `${count} / ${max_count}`;
    });
    createButtom.appendChild(createButtonRemove);
    createCard.appendChild(createButtom);
    return createCard;
}

function initData() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        .then((response) => response.json())
        .then((data) => {
            data.drinks.forEach((drink) => {
                const random_price = Math.floor(Math.random() * 600) + 1;
                const card = createCard(
                    drink.idDrink,
                    drink.strDrinkThumb,
                    drink.strDrink,
                    drink.strInstructions,
                    random_price
                );
                updateCard();
                document.querySelector(".container").appendChild(card);
            });
        });
}


function updateCard() {
    const storeDataLocal = localStorage.getItem("storeData")
        ? JSON.parse(localStorage.getItem("storeData"))
        : [];

    const count_ = []

    const totol = document.getElementById("total");
    const card_checkout = document.getElementById("card_checkout");

    storeDataLocal.forEach((item) => {
        if (item.count > 0) {
            count_.push(
                {
                    id: item.id,
                    count: item.count,
                    price: item.price
                }
            );
        }
    });

    
    totol.textContent = count_.length;
    
    if (count_.length > 0) {
        card_checkout.classList.remove("hide");
    } else {
        card_checkout.classList.add("hide");
    }
    
}