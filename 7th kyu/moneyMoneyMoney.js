// Money, money, money - https://www.codewars.com/kata/money-money-money/train/javascript

// Not finished - It almost works, does not return the "years" in the last recursion call

const calculateYears = (principal, interest, tax, desired, years = 0) => {
	let result = 0;
	result += principal + principal * interest - principal * interest * tax;

	if (result >= desired) {
		years += 1;
		return years;
	} else {
		calculateYears(result, interest, tax, desired, years + 1);
	}
};
