// Jaden Casing String - https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function() {
	let splitStr = this.split(' ');
	let result = [];
	for (let i = 0; i < splitStr.length; i++) {
		result.push(
			splitStr[i].replace(splitStr[i][0], splitStr[i][0].toUpperCase())
		);
	}
	return result.join(' ');
};
