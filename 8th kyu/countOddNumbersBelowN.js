// Codewars - Count Odd Numbers Below N - https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript

const countPositivesBelowN = n => {
	let count = 0;
	for (let i = 0; i < n; i++) {
		if (i % 2 !== 0) {
			count += 1;
		}
	}
	return count;
};
