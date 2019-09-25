// Dubstep - https://www.codewars.com/kata/dubstep/javascript

const songDecoder = str => {
	return str
		.split('WUB')
		.filter(x => x !== '')
		.join(' ');
};
