const requestURL = 'https://raw.githubusercontent.com/mmusih/wdd230/main/directory/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['companies'];
        console.table(jsonObject); // temporary checking for valid response and data parsing
        companies.forEach(displaycompanies_1);
    });

function displaycompanies_1(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p = document.createElement('p');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `<span class = 'companyName'>${company.name}</span>`;
    p.innerHTML = `<span class='companyAddress'>${company.address}</span> <br> <span class = 'companyPhone'>${company.phone} </span><br><span class='companyWebsite'><a href="${company.website}">${company.website}</a></span>`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('alt', `image of ${company.name }`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(p);


    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}


// Make provision to toggle between grid and list

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
