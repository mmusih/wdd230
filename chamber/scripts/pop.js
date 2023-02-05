let d = new Date().getDay();
const banner =document.getElementById("banner")
if (d == 1 || d == 2) {
	banner.style.display = "block";
}

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
	banner.style.display = "none";
  });