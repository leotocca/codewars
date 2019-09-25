// Remove the minimum - https://www.codewars.com/kata/563cf89eb4747c5fb100001b/solutions/javascript

function removeSmallest(arr) {
	let resultArr = arr.slice();
	resultArr.splice(resultArr.indexOf(Math.min(...resultArr)), 1);
	return resultArr;
}
