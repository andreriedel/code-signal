function solution(inputString) {
  let ans = [];
  for (let x of inputString.split("")) {
    if (/\d/.test(x)) ans.push(x);
    else break;
  }

  return ans.join("");
}

/* -------------------------------------------------------------------------- */

function solution2(inputString) {
  return inputString.match(/^\d*/)[0]
}
