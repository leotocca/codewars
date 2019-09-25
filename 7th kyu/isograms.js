// Codewars - Isograms - https://www.codewars.com/kata/54ba84be607a92aa900000f1

const isograms = str => {
	let nonDuplicateArr = [];
	str.split('').forEach(x => {
		if (!nonDuplicateArr.includes(x.toLowerCase())) {
			nonDuplicateArr.push(x.toLowerCase());
		}
	});

	if (nonDuplicateArr.join('') === str.toLowerCase()) {
		return true;
	} else {
		return false;
	}
};
