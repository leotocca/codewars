// To square(root) or not to square(root) - https://www.codewars.com/kata/to-square-root-or-not-to-square-root/train/javascript

const sqrOrNotSqr = arr => {
	let arrCopy = array.slice();

	for (let i = 0; i < arrCopy.length; i++) {
		if (Math.sqrt(arrCopy[i]) % 1 === 0) {
			arrCopy[i] = Math.sqrt(arrCopy[i]);
		} else {
			arrCopy[i] = Math.pow(arrCopy[i], 2);
		}
	}
	return arrCopy;
};
