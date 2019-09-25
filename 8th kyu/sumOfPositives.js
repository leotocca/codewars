// Sum of positives https://www.codewars.com/kata/5715eaedb436cf5606000381

function sum(arr) {
	let a = 0;
	for (let i = 0; i < arr.length; i++) {
		if (Math.sign(arr[i]) === 1) {
			a += arr[i];
		}
	}

	return a;
}
