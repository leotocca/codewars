// Categorize New Member - https://www.codewars.com/kata/categorize-new-member/train/javascript

const catNewMember = arr => {
	return arr.map(x => {
		return x[0] >= 55 && x[1] > 2 ? 'Senior' : 'Open';
	});
};
