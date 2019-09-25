// Convert number to reversed array of digits - https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript

const digitize = n => {
	let arr = String(n).split('');
	let result = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		result.push(Number(arr[i]));
	}
	return result;
};
