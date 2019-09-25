// Count by X - https://www.codewars.com/kata/count-by-x/train/javascript

const countByX = (x, n) => {
	let result = [];
	for (let i = 1; i <= n; i++) {
		if ((x * i) % x === 0) {
			result.push(x * i);
		}
	}
	return result;
};
