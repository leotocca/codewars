// Two to one - https://www.codewars.com/kata/two-to-one/train/javascript

const twoToOne = (s1, s2) => {
	let str1 = s1.split('');
	let str2 = s2.split('');
	let result = [];
	for (const i of str1) {
		if (!result.includes(i)) {
			result.push(i);
		}
	}
	for (const j of str2) {
		if (!result.includes(j)) {
			result.push(j);
		}
	}
	return result.sort().join('');
};
