const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener("click", () => {
	const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
	navBtn.setAttribute("aria-expanded", !isExpanded);
	menuBar.classList.toggle("hidden");
	menuBar.classList.toggle("flex");
});

const wrap1 = document.getElementById("wrapHover1");
const hoverNav1 = document.getElementById("hoverNav1");
const ulNav1 = document.getElementById("ulNav1");

// wrap1
wrap1.onmouseover = function () {
	ulNav1.classList.remove("hidden");
};
wrap1.onmouseleave = function () {
	ulNav1.classList.add("hidden");
};

const wrap2 = document.getElementById("wrapHover2");
const hoverNav2 = document.getElementById("hoverNav2");
const ulNav2 = document.getElementById("ulNav2");
// wrap2
wrap2.onmouseover = function () {
	ulNav2.classList.remove("hidden");
};
wrap2.onmouseleave = function () {
	ulNav2.classList.add("hidden");
};

const cardLg = document.getElementById("cartLg");
const cardLg2 = document.getElementById("cartLg2");
// const kiriKanan = document.getElementById("kiriKanan");
// const kiriKanan2 = document.getElementById("kiriKanan2");

(function (delay, callback) {
	var loop = function () {
		callback();
		setTimeout(loop, delay);
	};
	loop();
})(1500, function () {
	let x = window.innerWidth;
	if (x < 1280) {
		// kiriKanan.classList.add("hidden");
		// kiriKanan2.classList.remove("hidden");
		cardLg.classList.add("hidden");
		cardLg2.classList.remove("hidden");
	} else {
		// kiriKanan.classList.remove("hidden");
		// kiriKanan2.classList.add("hidden");
		cardLg.classList.remove("hidden");
		cardLg2.classList.add("hidden");
	}
});
