// Codewars - Multiples of 3 or 5 - https://www.codewars.com/kata/514b92a657cdc65150000006

const mult = num => {
	let arr = [];
	for (let i = 0; i <= num; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			arr.push(i);
		} else if (i % 3 === 0) {
			arr.push(i);
		} else if (i % 5 === 0) {
			arr.push(i);
		}
	}

	return arr.reduce((a, b) => a + b, 0);
};
