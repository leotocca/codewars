// The Supermarket Queue - https://www.codewars.com/kata/57b06f90e298a7b53d000a86

const queueTime = (costumers, tills) => {
	let t = new Array(tills).fill(0);
	for (const e of costumers) {
		const smallerTill = t.indexOf(Math.min(...t));
		t[smallerTill] += e;
	}
	return Math.min(...t);
};
