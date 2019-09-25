// Codewars - Get the middle character - https://www.codewars.com/kata/56747fd5cb988479af000028

let middle = s => {
	if (s.length % 2 === 0) {
		let a = s.length / 2 - 1;
		let b = a + 2;
		return console.log(s.slice(a, b));
	} else if (s.length % 2 !== 0) {
		let a = Math.ceil(s.length / 2 - 1);
		let b = a + 1;
		return console.log(s.slice(a, b));
	}
};
