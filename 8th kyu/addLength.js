//Add length - https://www.codewars.com/kata/559d2284b5bb6799e9000047

const addLength = str => {
	let splittedStr = str.split(' ');
	for (let i = 0; i < splittedStr.length; i++) {
		splittedStr[i] =
			splittedStr[i].slice(0, splittedStr[i].length) +
			' ' +
			splittedStr[i].length;
	}
	return splittedStr;
};
