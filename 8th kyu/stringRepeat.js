// String repeat - https://www.codewars.com/kata/string-repeat/train/javascript

function repeatStr(n, s) {
	let str = s;
	for (let i = 1; i < n; i++) {
		str += s;
	}
	return str;
}
