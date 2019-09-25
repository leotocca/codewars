// Descending Order - https://www.codewars.com/kata/5467e4d82edf8bbf40000155

const desc = number => {
	let str = String(n);
	let arr = str
		.split('')
		.sort(function(a, b) {
			return a - b;
		})
		.reverse()
		.join('');
	return Number(arr);
};
