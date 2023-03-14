import '../style.less';
import {applyExpression} from './interface.js';
import exampleImage from '../assets/icon/javascript.svg';

const applyBtn = document.querySelector('#applyBtn');
applyBtn.addEventListener('click', () => {
	applyExpression();
})

const img = document.querySelector('#image');
img.src = exampleImage;
