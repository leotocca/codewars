// You're a square! - https://www.codewars.com/kata/youre-a-square/train/javascript

const square = n => {
	if (Math.sqrt(n) % 1 === 0) {
		return true;
	} else {
		return false;
	}
};
