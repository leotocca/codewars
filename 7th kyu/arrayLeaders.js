// Array Leaders (Array Series #3) - https://www.codewars.com/kata/5a651865fd56cb55760000e0

const arrayLeaders = numbers => {
	const isLeader = (numbers, x, i) => {
		let sum = numbers
			.slice(i + 1)
			.reduce((previous, current) => previous + current, 0);
		return x > sum;
	};

	return numbers.filter(x => isLeader(numbers, x, i), i);
};
