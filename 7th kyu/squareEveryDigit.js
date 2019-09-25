// Square every digit - https://www.codewars.com/kata/546e2562b03326a88e000020

const squareDigits = num => {
	let squaredArr = [];
	let str = String(num);
	let arr = str.split('');
	for (const e of arr) {
		squaredArr.push(e * e);
	}
	return Number(squaredArr.join(''));
};
