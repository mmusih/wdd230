let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"

];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = months[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName  +" " + d.getDate() + ", " + d.getFullYear();

document.getElementById("currentdate").textContent = fulldate