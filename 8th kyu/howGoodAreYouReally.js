// Codewars - How good are you really? - https://www.codewars.com/kata/how-good-are-you-really/train/javascript

const betterThanAverage = (classPoints, yourPoints) => {
	classPoints.push(yourPoints);

	let average =
		classPoints.reduce((a, b) => {
			return a + b;
		}) / classPoints.length;

	if (yourPoints > average) {
		return true;
	} else {
		return false;
	}
};
