// Complementary DNA - https://www.codewars.com/kata/complementary-dna/train/javascript

const dna = str => {
	let procesedStr = '';
	for (const e of str) {
		if (e === 'A') {
			procesedStr += 'T';
		} else if (e === 'T') {
			procesedStr += 'A';
		} else if (e === 'G') {
			procesedStr += 'C';
		} else if (e === 'C') {
			procesedStr += 'G';
		}
	}

	return procesedStr;
};
