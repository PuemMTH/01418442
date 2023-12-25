document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("myForm");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const formData = new FormData(form);
		const { name, gender, country } = Object.fromEntries(formData.entries());
        const interests = formData.getAll("interests");

		console.log({
			name: name,
			gender: gender,
			interests: interests,
			country: country,
		});

		let data = [];
		for (const [key, value] of formData.entries()) {
			console.log(key);
			data.push({ key, value });
		}
		// alert(JSON.stringify(data));
	});

    // form varidation
    form.addEventListener("input", function (event) {
        const { name, value } = event.target;
        const error = document.getElementById(`${name}-error`);
        if (error) {
            if (value === "") {
                error.textContent = `${name} is required`;
            } else {
                error.textContent = "";
            }
        }
    });
    
});
