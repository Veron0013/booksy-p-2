import refs from '/js/refs';
import * as render from '/js/render-function';
import * as apiRest from '/js/books-api';
import * as modal from '/js/modal';
import * as storage from '/js/storage';

class Typewriter {
	constructor(element, words, period = 2000) {
		this.element = element;
		this.words = words;
		this.period = period;
		this.loopNum = 0;
		this.txt = '';
		this.isDeleting = false;
		this.type();
	}

	type() {
		const current = this.loopNum % this.words.length;
		const fullTxt = this.words[current];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.element.innerHTML = `<span class="article-wrap">${this.txt}</span>`;

		//тут, бо вже є літера
		const articleWrapper = document.querySelector('.article-wrap');

		let delta = 180 - Math.random() * 100;

		if (this.isDeleting) delta /= 2;

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;

			//моргання
			this.blinkCursor(articleWrapper, 3, () => {
				this.isDeleting = true;
				this.type();
			});
			return;
		}
		else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(() => this.type(), delta);
	}

	blinkCursor(element, times, callback) {
		let count = 0;
		const blinkInterval = setInterval(() => {
			element.style.borderColor = (element.style.borderColor === "transparent") ? "var(--button-txt-light)" : "transparent";
			count++;
			if (count >= times * 2) { // times * 2 because blink includes turning off and on
				clearInterval(blinkInterval);
				if (callback) callback();
			}
		}, 400);
	}
}

document.addEventListener('DOMContentLoaded', async () => {
	const elements = document.querySelectorAll('.js-rotate-tagline');
	const mWords = await getQuoteData();

	//console.log(mWords);

	elements.forEach(element => {
		//const words = JSON.parse(element.getAttribute('data-rotate'));
		const period = parseInt(element.getAttribute('data-period'), 10) || 2000;
		new Typewriter(element, mWords, period);
	});
});

async function getQuoteData() {
	try {
		const apiHeaders = {
			"X-Api-Key": refs.QUOTES_API_KEY
		};
		const apiData = await apiRest.getApiData(refs.QUOTES_URL, apiHeaders);

		if (!apiData.data.length) return;
		//console.log(apiData);

		return [apiData.data[0].quote];
	} catch (e) {
		render.showMessage(e.message, "Error", "red");
	}
} 