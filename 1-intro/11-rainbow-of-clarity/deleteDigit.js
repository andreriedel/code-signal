function solution(n) {
  let maxNum = 0;

  n.toString().split("").forEach((el, idx, arr) => {
    let currentNum = Number.parseInt(
      (arr.slice(0, idx).concat(arr.slice(idx + 1))).join("")
    );
    if (currentNum > maxNum) maxNum = currentNum;
  });

  return maxNum;
}

/* -------------------------------------------------------------------------- */

function solution2(n) {
  s = n.toString();
  return Math.max(...[...Array(s.length).keys()].map(i => Number(s.slice(0, i) + s.slice(i + 1))));
}
