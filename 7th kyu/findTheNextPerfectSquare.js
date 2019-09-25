// Find the next perfect square! - https://www.codewars.com/kata/find-the-next-perfect-square/train/javascript

const findNextSquare = num => {
	if (Number.isInteger(Math.sqrt(num))) {
		return Math.pow(Math.sqrt(num) + 1, 2);
	} else {
		return -1;
	}
};
