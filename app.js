const btn = document.querySelector('.btn');
const bigNum = document.querySelector('.big-num');
const keyName = document.querySelector('.key');
const which = document.querySelector('.which');
const code = document.querySelector('.code');

const result = document.querySelector('.result')

document.addEventListener('keypress', (e) => {
	result.classList.add = 'show'
	bigNum.textContent =  ' you pressed:  ' + e.which
	keyName.textContent = e.code
	which.textContent = e.which
	code.textContent  = e.key
});