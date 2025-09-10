const counterMaps = [x => 0, x => x + 1, x => x + 2, x => x + 5, x => x * 2];
function initCounter() {
	const counter = document.getElementById("s-counter");
	const value = counter.children.item(0).children.item(2);
	const buttonsCollection = counter.children.item(1).children;
	const buttons = Array.from(buttonsCollection);
	buttons.forEach((button, idx) => button.addEventListener("click", function() {
		const init = parseInt(value.innerText);
		value.innerText = counterMaps[idx](init);
	}));
}

document.addEventListener("DOMContentLoaded", initCounter);
