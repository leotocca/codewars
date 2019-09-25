// Total amount of points - https://www.codewars.com/kata/total-amount-of-points/train/javascript

const point = arr => {
	let counter = 0;
	for (const e of arr) {
		if (Number(e[0]) > Number(e[2])) {
			counter += 3;
		} else if (Number(e[0]) === Number(e[2])) {
			counter += 1;
		}
	}
	return counter;
};
