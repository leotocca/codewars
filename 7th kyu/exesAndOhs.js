// Exes and Ohs - https://www.codewars.com/kata/exes-and-ohs/train/javascript

const XO = str => {
	let x = 0;
	let o = 0;
	for (const e of str) {
		if (e.toLowerCase() === 'x') {
			x += 1;
		} else if (e.toLowerCase() === 'o') {
			o += 1;
		}
	}

	if (x === o) {
		return true;
	} else if (x === 0 && o === 0) {
		return true;
	} else {
		return false;
	}
};
