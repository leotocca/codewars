// Find the stray number - https://www.codewars.com/kata/find-the-stray-number/train/javascript

function strayNumber(arr) {
	for (let i = 1; i <= arr.length; i++) {
		if (arr[i] !== arr[i - 1]) {
			return arr[i];
		}
	}
}
