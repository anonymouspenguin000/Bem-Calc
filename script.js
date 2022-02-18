'use strict';

function get(q) {
	return document.querySelectorAll(q);
}
function isSign(c) {
	switch (c) {
		case '+':
		case '-':
		case '*':
		case '/':
			return true;
	}
	return false;
}
function delLast(str) {
	let _temp = str.split('');
	_temp.pop();
	return _temp.join('');
}
window.onload = function () {
	let eval_str = '';
	let out = get('#out')[0];
	
	get('.num-btn').forEach(el => {
		el.onclick = function () {
			let curr = this.innerText;
			let prev = eval_str.at(-1);
			if (isSign(curr) && isSign(prev)) {
				eval_str = delLast(eval_str);
			};
			if (!(curr == '.' && prev == '.')) {
				eval_str += curr;
			}
			update();
		}
	});
	get('#ok')[0].onclick = function () {
		update(eval_str);
		eval_str = '';
	}
	get('#bsp')[0].onclick = function () {
		eval_str = delLast(eval_str);
		update();
	}
	
	function update(res) {
		let _temp;
		try {
			_temp = res ? eval(res) : eval_str;
		} catch (e) {
			_temp = 'Error';
		}
		out.innerHTML = _temp;
	}
}

// 22 25 42(2) 46