function solution(inputString) {
  return inputString.split("").find(el => !isNaN(parseInt(el)));
}

/* -------------------------------------------------------------------------- */

function solution2(inputString) {
  return inputString.match(/\d/)[0]
}
