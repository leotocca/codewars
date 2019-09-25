// if you can't sleep, just count sheep - https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/javascript

const sheep = n => {
	let str = '';
	for (let i = 1; i <= n; i++) {
		str += i + ' sheep...';
	}
	return str;
};
