// Credit Card Mask - https://www.codewars.com/kata/5412509bd436bd33920011bc

const maskify = str => {
	let returnStr = '';
	if (str.length > 4) {
		for (let i = 0; i < str.length - 4; i++) {
			returnStr += '#';
		}

		for (let i = str.length - 4; i < str.length; i++) {
			returnStr += str[i];
		}
		return returnStr;
	} else {
		return str;
	}
};
