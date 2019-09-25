// Number of people in the bus - https://www.codewars.com/kata/number-of-people-in-the-bus/train/javascript

const peopleOnBus = arr => {
	let result = 0;

	for (const e of arr) {
		for (let i = 0; i < e.length; i++) {
			if (i === 0) {
				result += e[0];
			} else {
				result -= e[1];
			}
		}
	}

	return result;
};
