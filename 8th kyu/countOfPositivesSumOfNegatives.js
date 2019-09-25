// Count of positives / sum of negatives - https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript

const countPositivesSumNegatives = input => {
	let positives = 0;
	let negatives = 0;
	for (const e of input) {
		if (e < 0) {
			negatives += e;
		} else if (e > 0) {
			positives += 1;
		}
	}
	if (positives === 0 && negatives === 0) {
		return [];
	} else {
		return [positives, negatives];
	}
};
