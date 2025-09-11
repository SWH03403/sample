const counterMaps = [x => 0, x => x + 1, x => x + 2, x => x + 5, x => x * 2];
function initCounter() {
	const counter = document.getElementById("section-counter");
	const value = counter.getElementsByClassName("value")[0];
	const buttonsCollection = counter.getElementsByClassName("controls")[0].children;
	const buttons = Array.from(buttonsCollection);
	buttons.forEach((button, idx) => button.addEventListener("click", function() {
		const init = parseInt(value.innerText);
		value.innerText = counterMaps[idx](init);
	}));
}

document.addEventListener("DOMContentLoaded", initCounter);
