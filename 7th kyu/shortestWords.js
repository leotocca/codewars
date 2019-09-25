// Shortest word - https://www.codewars.com/kata/shortest-word/train/javascript

const shortest = str => {
	let arr = str.split(' ');
	let shortestWord = arr[0].length;
	for (const e of arr) {
		if (e.length < shortestWord) {
			shortestWord = e.length;
		}
	}
	return shortestWord;
};
