function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

// datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

let curretDate = new Date();
const Year = curretDate.getFullYear();
document.getElementById("year").textContent = Year;