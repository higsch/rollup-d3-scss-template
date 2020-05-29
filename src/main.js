// Pattern borrowed from https://github.com/the-pudding/eu-regions/blob/master/src/js/entry.js
import './styles/main.scss';
import { select } from 'd3';
import debounce from 'lodash.debounce';
import graphic from './graphic';

const $body = select('body');

let previous_width = 0;

function resize() {
	const width = $body.node().offsetWidth;
	if (previous_width !== width) {
		previous_width = width;
		graphic.resize();
	}
}

function init() {
	window.addEventListener('resize', debounce(resize, 150));
	graphic.init();
}

init();
