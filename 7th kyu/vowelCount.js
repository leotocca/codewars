// Vowel Count - https://www.codewars.com/kata/54ff3102c1bad923760001f3

const countVowel = str => {
	let count = 0;
	for (let a of str) {
		if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u') {
			count++;
		}
	}
	return count;
};
