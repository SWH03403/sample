function initShowcase(showcase) {
	const container = document.getElementById(`sc-${showcase.name}`);
	const value = container.getElementsByClassName("value")[0];
	const buttonsCollection = container.getElementsByClassName("controls")[0].children;
	const buttons = Array.from(buttonsCollection);
	buttons.forEach((button, idx) => button.addEventListener("click", function() {
		showcase.run(value, idx);
	}));
}

const counterMaps = [x => 0, x => x + 1, x => x + 2, x => x + 5, x => x * 2];

const showcases = [
	{
		name: "counter",
		run: (value, idx) => value.innerText = counterMaps[idx](parseInt(value.innerText)),
	},
];
showcases.forEach(s => {
	document.addEventListener("DOMContentLoaded", function() { initShowcase(s); });
});
