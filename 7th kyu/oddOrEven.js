// Odd or even - https://www.codewars.com/kata/odd-or-even/train/javascript

function oddOrEven(array) {
	if(array.length === 0){
		return "even";
	  } else if((array.reduce((a, b) => a + b)) % 2 === 0){
			return "even";
		} else {
			return "odd";
		}
	}
}