document.addEventListener("DOMContentLoaded", function () {

    const account = [
        {
            owner: "Tanapat Eiam-arj",
            user: "puem",
            psw: "puem1234",
        },
        {
            owner: "Meaw Meaw Meaw",
            user: "may",
            psw: "may1234",
        },
        {
            owner: "Meaw Meaw",
            user: "preaw",
            psw: "preaw1234",
        }
    ]
    
    
	const loginBtn = document.querySelector(".login_btn");
	const welcome = document.querySelector(".welcome");

	loginBtn.addEventListener("click", (e) => {
		e.preventDefault();
		const user = document.querySelector(".login__input--user").value;
		const psw = document.querySelector(".login__input--psw").value;

        let currentAccount = account.find((item) => user === item.user && psw === item.psw);
        if (currentAccount) {
            document.querySelector(".login__input--user").value = "";
            document.querySelector(".login__input--psw").value = "";
            const newSpan = document.createElement("span");
            newSpan.style.color = "red";
            newSpan.textContent = currentAccount.owner;
            welcome.textContent = "ยินดีต้อนรับ ";
            welcome.appendChild(newSpan);
        }
	});
});
