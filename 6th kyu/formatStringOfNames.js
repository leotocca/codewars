// Format a string of names - https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/

function formatString(array) {
  let mappedArray = array.map(object => object.name);
  let arrLength = mappedArray.lenght;

  if (arrLength === 0) {
    return "";
  } else if (arrLength === 1) {
    return mappedArray[0];
  } else if (arrLength === 2) {
    return mappedArray[0] + " & " + mappedArray[1];
  } else if (arrLength > 2) {
    let lastValue = mappedArray.slice(arrLength - 1, arrLength)[0];
    let allValuesButLast = mappedArray.slice(0, arrLength);
    let partialResult = allValuesButLast.join(", ");
    return partialResult + " & " + lastValue;
  }
}
