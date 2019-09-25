// Cat years, Dog years - https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

const catDogYears = y => {
	let catYears = 0;
	let dogYears = 0;

	for (let i = 1; i <= y; i++) {
		if (i === 1) {
			catYears += 15;
		} else if (i === 2) {
			catYears += 9;
		} else {
			catYears += 4;
		}
	}

	for (let i = 1; i <= y; i++) {
		if (i === 1) {
			dogYears += 15;
		} else if (i === 2) {
			dogYears += 9;
		} else {
			dogYears += 5;
		}
	}

	return [y, catYears, dogYears];
};
