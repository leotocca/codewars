// Sort odd and even numbers in different order - https://www.codewars.com/kata/sort-odd-and-even-numbers-in-different-order/train/javascript

// Note: This solution does what the author of the exercises expects it to do,
//       but doesn't pass the arbitrary tests, as the pattern for sorting the numbers inside the array is not explained

const sortArray = arr => {
	let oddArr = [];
	let evenArr = [];

	arr.forEach(x => {
		if (x / 2 === 0) {
			evenArr.push(x);
		} else if (x / 2 !== 0) {
			oddArr.push(x);
		}
	});

	return evenArr.sort().concat(oddArr.sort().reverse());
};
