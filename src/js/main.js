let timer = {
	running: false,
	elapsed: 0,
	now: null,
	handle: null,

	stop: () => {
		if (timer.handle !== null) {
			clearInterval(timer.handle);
			timer.handle = null;
		}
	},
	diff: () => { return Date.now() - timer.now; },
};

const showcases = [
	{ name: "counter", run: (idx, value) => {
		const maps = [x => 0, x => x + 1, x => x + 2, x => x + 5, x => x * 2];
		value.innerText = maps[idx](parseInt(value.innerText));
	}},
	{ name: "timer", run: (idx, value, buttons) => {
		const button = buttons[1];
		switch(idx) {
			case 0:
				timer.running = false;
				timer.elapsed = 0;
				timer.stop();
				value.innerText = "-:--:--.--";
				button.innerText = "Start";
				break;
			case 1:
				if (timer.running) {
					timer.stop();
					timer.elapsed += timer.diff();
					button.innerText = "Resume";
				} else {
					timer.now = Date.now();
					timer.handle = setInterval(() => {
						const millis = timer.elapsed + timer.diff();
						const duration = {
							hours: Math.floor(millis / 3.6e6),
							minutes: Math.floor(millis / 6e4) % 60,
							seconds: Math.floor(millis / 1000) % 60,
							milliseconds: millis % 1000,
						};
						value.innerText = new Intl
							.DurationFormat("en", { style: "digital", fractionalDigits: 2 })
							.format(duration);
					}, 50);
					button.innerText = "Pause";
				}
				timer.running = !timer.running;
				break;
			default:
				return;
		}
	}},
];

function initShowcase(showcase) {
	const container = document.getElementById(`sc-${showcase.name}`);
	const value = container.getElementsByClassName("value")[0];
	const buttonsCollection = container.getElementsByClassName("controls")[0].children;
	const buttons = Array.from(buttonsCollection);
	buttons.forEach((button, idx) => button.addEventListener("click", function() {
		showcase.run(idx, value, buttons);
	}));
}

showcases.forEach(showcase => {
	document.addEventListener("DOMContentLoaded", function() { initShowcase(showcase); });
});
