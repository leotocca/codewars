// Mumbling - https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/

const mumbling = s => {
	let procesedStr = '';
	for (let i = 0; i < s.length; i++) {
		procesedStr += s[i].toUpperCase();
		for (let j = 0; j < i; j++) {
			procesedStr += s[i].toLowerCase();
		}
		if (i < s.length - 1) {
			procesedStr += '-';
		}
	}
	return procesedStr;
};
