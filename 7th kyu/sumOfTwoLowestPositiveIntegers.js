// Sum of two lowest positive integers - https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/train/javascript

const sumOfTwoLowest = numbers => {
	let a = numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
	let b = numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
	return Number(a) + Number(b);
};
