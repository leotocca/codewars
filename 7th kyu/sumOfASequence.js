// https://www.codewars.com/kata/sum-of-a-sequence

const recur = (begin, end, step) => {
	if (begin > end) {
		return 0;
	} else {
		return begin + recur(begin + step, end, step);
	}
};
