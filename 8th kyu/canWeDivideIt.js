// Can we divide it? https://www.codewars.com/kata/5a2b703dc5e2845c0900005a

function isDivideBy(a, b, c) {
	if (a % b === 0 && a % c === 0) {
		return true;
	} else {
		return false;
	}
}
