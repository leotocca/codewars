// Return the first M multiples of N - https://www.codewars.com/kata/return-the-first-m-multiples-of-n/train/javascript

const multiplesOfN = (a, b) => {
	let result = [];
	for (let i = 1; i <= a; i++) {
		result.push(b * i);
	}
	return result;
};
