let btn = document.querySelector(".sidebar");
let side = document.querySelector(".wrapper-nav");
let item = document.querySelectorAll(".navitem");

btn.addEventListener("click", function (e) {
	side.classList.toggle("active");

	if (side.className == "wrapper-nav active") {
		btn.innerHTML = '<button class="sidebar">X</button>';
	} else if (side.className == "wrapper-nav") {
		btn.innerHTML = '<button class="sidebar">=</button>';
	}
});
