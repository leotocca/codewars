// Disemvowel Trolls -  https://www.codewars.com/kata/disemvowel-trolls/train/javascript

const disemvowel = str => {
	let returnedStr = '';
	for (let i = 0; i < str.length; i++) {
		if (
			str[i] !== 'a' &&
			str[i] !== 'e' &&
			str[i] !== 'i' &&
			str[i] !== 'o' &&
			str[i] !== 'u' &&
			str[i] !== 'A' &&
			str[i] !== 'E' &&
			str[i] !== 'I' &&
			str[i] !== 'O' &&
			str[i] !== 'U'
		) {
			returnedStr += str[i];
		}
	}

	return returnedStr;
};
