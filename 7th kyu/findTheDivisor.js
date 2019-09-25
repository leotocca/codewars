// Find the divisors! - https://www.codewars.com/kata/find-the-divisors/train/javascript

const divisors = num => {
	let result = [];
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			result.push(i);
		}
	}

	if (result.length === 0) {
		return `${num} is prime`;
	} else {
		return result;
	}
};
