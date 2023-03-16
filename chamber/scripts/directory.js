const requestURL = 'https://raw.githubusercontent.com/mmusih/wdd230/main/directory/data.json';
const cards = document.querySelector('.cards');
const cards_2 = document.querySelector('.cards_2');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['companies'];
        console.table(jsonObject); // temporary checking for valid response and data parsing
        companies.forEach(displaycompanies_1);
        companies.forEach(displaycompanies_2)
    });

function displaycompanies_1(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p = document.createElement('p');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `<span class = 'companyName'>${company.name}</span>`;
    p.innerHTML = `<span class='companyAddress'>${company.address}</span> <br> <span class = 'companyPhone'>${company.phone}</span>`;

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

function displaycompanies_2(company) {
    // Create elements to add to the document
    let card_2 = document.createElement('section');
    let ul = document.createElement('ul');
    let li_1 = document.createElement('li');
    let li_2 = document.createElement('li');
    let li_3 = document.createElement('li');
    let li_4 = document.createElement('li');

    // Change the textContent property of the h2 element to contain the prophet's full name
    li_1.innerHTML = `${company.name} `;
    li_2.innerHTML = `${company.address}`;
    li_3.innerHTML = `${company.phone} `;
    li_4.innerHTML = `${company.website}`;




    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).

    // Add/append the section(card) with the h2 element
    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);
    ul.appendChild(li_4);
    card_2.appendChild(ul);


    // Add/append the existing HTML div with the cards class with the section(card)
    cards_2.appendChild(card_2);
}