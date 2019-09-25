// Don't give me five - https://www.codewars.com/kata/dont-give-me-five/train/javascript

const dontGiveMeFive = (start, end) => {
	let result = 0;
	for (let i = start; i <= end; i++) {
		if (
			!String(i)
				.split('')
				.includes('5')
		) {
			result += 1;
		}
	}
	return result;
};
