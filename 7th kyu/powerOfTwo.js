// Power of two - https://www.codewars.com/kata/power-of-two/train/javascript

// To divide a number by 2 until the result is not divisible by 2

// A number is received
// The number is divided by 2
// Is the result divisible by 2?
// Yes, then it gets divided again
// No. Does the modulus of the division by 2 is 0?
// Yes, then it is a power of two
// No, then it is not a power of two

const isPowerOfTwo = n => {
	if (n === 1) {
		return true;
	} else if (n === 0) {
		return false;
	} else if (n % 2 === 0 && n / 2 < 3) {
		return true;
	} else if (n % 2 !== 0 && n / 2 < 3) {
		return false;
	}

	return isPowerOfTwo(n / 2);
};
