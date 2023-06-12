const div = [document.getElementById("div1"), document.getElementById("div2")];
let cardX, cardXOpen;
function item1(x) {
	switch (x) {
		case 0:
			cardX = "left-64";
			cardXOpen = "left-0";
			break;
		case 1:
			cardX = "right-64";
			cardXOpen = "right-0";
			break;
	}

	div[x].classList.toggle("z-20");
	div[x].classList.toggle("absolute");
	div[x].classList.toggle("fixed");
	div[x].classList.toggle("rounded-md");
	div[x].classList.toggle("w-[20rem]");
	div[x].classList.toggle("h-[20rem]");
	div[x].classList.toggle(`${cardX}`);
	div[x].classList.toggle("top-32");
	div[x].children[1].classList.toggle("-z-50");
	div[x].children[1].classList.toggle("from-transparent");
	div[x].children[1].classList.toggle("via-transparent");
	div[x].children[1].classList.toggle("to-black");
	div[x].children[1].classList.toggle("group-hover:from-black/70");
	div[x].children[1].classList.toggle("group-hover:via-black/60");
	div[x].children[1].classList.toggle("group-hover:to-black/70");
	div[x].children[1].classList.toggle("from-gray-900");
	div[x].children[1].classList.toggle("via-gray-900");
	div[x].children[1].classList.toggle("to-black");

	div[x].classList.toggle("h-full");
	div[x].classList.toggle("w-full");
	div[x].classList.toggle(`${cardXOpen}`);
	div[x].classList.toggle("top-0");

	div[x].children[2].classList.toggle("hidden");

	div[x].children[0].classList.toggle("scale-90");
	div[x].children[0].classList.toggle("-translate-x-[25.5rem]");
	div[x].children[0].classList.toggle("group-hover:scale-110");

	div[x].children[2].classList.toggle("translate-y-1/2");
	div[x].children[2].classList.toggle("group-hover:translate-y-0");
	div[x].children[2].classList.toggle("translate-y-0");
	div[x].children[2].children[1].classList.toggle("group-hover:opacity-100");
	div[x].children[2].children[1].classList.toggle("opacity-100");

	if (div[x].classList.contains("z-20")) {
		setTimeout(function () {
			div[x].children[3].classList.toggle("-z-50");
			div[x].children[3].classList.add("visible");
			for (let i = 0; i <= 3; i++) {
				div[x].children[3].children[i].classList.add("visible");
				let length = div[x].children[3].children[i].childElementCount;
				if (i == 2) {
					for (let p = 0; p < length; p++) {
						div[x].children[3].children[i].children[p].classList.add("visible");
					}
				}
			}
		}, 100);
		setTimeout(function () {
			div[x].setAttribute("onclick", `item1(${x})`);
		}, 300);
	} else {
		div[x].children[3].classList.toggle("-z-50");
		div[x].children[3].classList.remove("visible");
		for (let i = 0; i <= 3; i++) {
			div[x].children[3].children[i].classList.remove("visible");
			if (i == 2) {
				let length = div[x].children[3].children[i].childElementCount;
				for (let l = 0; l < length; l++) {
					div[x].children[3].children[i].children[l].classList.remove(
						"visible"
					);
				}
			}
		}
		div[x].removeAttribute("onclick", `item1(${x})`);
	}
}

const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector('[role="menubar"]');
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

navBtn.addEventListener("click", () => {
	const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
	navBtn.setAttribute("aria-expanded", !isExpanded);
	menuBar.classList.toggle("hidden");
	menuBar.classList.toggle("flex");
});

const cardLg = document.getElementById("cartLg");
const cardLg2 = document.getElementById("cartLg2");

(function (delay, callback) {
	var loop = function () {
		callback();
		setTimeout(loop, delay);
	};
	loop();
})(1500, function () {
	let x = window.innerWidth;
	if (x < 1280) {
		cardLg.classList.add("hidden");
		cardLg2.classList.remove("hidden");
	} else {
		cardLg.classList.remove("hidden");
		cardLg2.classList.add("hidden");
	}
});
