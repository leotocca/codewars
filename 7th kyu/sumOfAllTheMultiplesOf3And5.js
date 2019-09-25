// Sum of all the multiples of 3 or 5 - https://www.codewars.com/kata/sum-of-all-the-multiples-of-3-or-5/train/javascript

const findSum = n => {
	let result = 0;
	for (let i = 0; i <= n; i++) {
		if (i % 3 === 0) {
			result += i;
		} else if (i % 5 === 0) {
			result += i;
		}
	}
	return result;
};
