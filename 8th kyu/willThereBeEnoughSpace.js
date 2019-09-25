// Will there be enough space - https://www.codewars.com/kata/will-there-be-enough-space/train/javascript

const enoughSpace = (cap, on, wait) => {
	if (wait < cap - on) {
		return 0;
	} else {
		return on + wait - cap;
	}
};
