// Is this a triangle? - https://www.codewars.com/kata/is-this-a-triangle/train/javascript

const isTriangle = (a, b, c) => {
	if (a - (b + c) < 0 && b - (a + c) < 0 && c - (b + a) < 0) {
		return true;
	} else {
		return false;
	}
};
