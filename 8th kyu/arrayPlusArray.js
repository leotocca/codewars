// Array plus Array https://www.codewars.com/kata/array-plus-array/train/javascript

function arrayPlusArray(arr1, arr2) {
	let arrA = 0;
	let arrB = 0;

	arr1.forEach(function(i) {
		arrA += i;
	});

	arr2.forEach(function(i) {
		arrB += i;
	});

	return arrA + arrB;
}
