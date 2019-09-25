// Form the minimum - https://www.codewars.com/kata/5ac6932b2f317b96980000ca

const formTheMinimum = arr => {
	let arrWithNoDuplicates = [];
	for (const i of arr) {
		if (!arrWithNoDuplicates.includes(i)) {
			arrWithNoDuplicates.push(i);
		}
	}
	return Number(arrWithNoDuplicates.sort().join(''));
};
