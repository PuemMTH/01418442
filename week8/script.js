// "use strict";
// document.addEventListener("DOMContentLoaded", () => {
// 	const countries = document.querySelector(".countries");

// 	const getCountries = async function (countryName) {
// 		const res = new XMLHttpRequest();
// 		res.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
// 		res.send();

// 		res.addEventListener("load", function () {
// 			const [data] = JSON.parse(this.responseText);
// 			const html_req = `
//         <article class="country">
//           <img src="${data.flags.png}" alt="" class="country_img" />
//           <div class="country_data">
//             <h3 class="country_name">
//                 ${data.capital}
//             </h3>
//             <h4 class="country_region">
//                 ${data.region}
//             </h4>
//             <p class="country_languages">
//             Languages: ${Object.values(data.languages).join(", ")}
//             </p>
// 			<p>
// 				Capitail : ${data.capital[0]}
// 			</p>
// 			<p>
// 				borders : ${data.borders ? data.borders.join(", ") : "Not Found"}
// 			</p>
// 			<p>
// 				border area: ${data.borders?.area}
// 				borders : ${data.borders.area ? data.borders?.area : "Not Found"}
// 			</p>
//             <p class="country_currency">
//                 ${Object.values(data.currencies)
// 									.map((currency) => `${currency.name} (${currency.symbol})`)
// 									.join(", ")}
//             </p>
// 		<p>
// 		</p>
//           </div>
//         </article>
//         `;
// 			countries.insertAdjacentHTML("beforeend", html_req);
// 			countries.style.opacity = 1;
// 		});
// 	};

// 	const list_countries = [
// 		"thailand",
// 		"japan",
// 		"usa",
// 		"korea",
// 		"china",
// 		"russia",
// 		"germany",
// 		"france",
// 		"italy",
// 	];

// 	list_countries.forEach((country) => {
// 		getCountries(country);
// 	});
// });
