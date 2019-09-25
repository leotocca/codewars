// highest and lowest - https://www.codewars.com/kata/highest-and-lowest/train/javascript

const hAndL = str => {
	let arr = str.split(' ');
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	return max + ' ' + min;
};
